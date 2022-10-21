<?php

namespace App\Http\Controllers\Configuracion;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\MetaFritterVerso\FritterDynamic;
use Illuminate\Support\Facades\DB;

class FormsController extends Controller
{

    public function showAll()
    {
        $form = FritterDynamic::itemsForm('Fritter Forms');
        $columns = FritterDynamic::columnsTable('Agregar Forms');
        $props_table = FritterDynamic::propsTable(2);
        $raw = " SELECT  COUNT(component_no) FROM sys_data_forms WHERE form_id = sys_forms.forms_id ";
        $data = DB::table('sys_forms')->selectRaw('forms_id, name_form, module, ('.$raw.') AS total_elements')->where('status', 'alta')->where('editable', 1)->get();

        $response = [
            "status" => 200,
            "data" => $data,
            "formItems" => $form,
            "columns" => $columns,
            "props_table" => $props_table,
            "message" => "Info Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function create(Request $request)
    {

        $params = $request->all();
        $arr = $params['parametros'];
        DB::table('sys_forms')->insert($arr);

        $response = [
            "status" => 200,
            "message" => "Se creo correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }

    public function update($id, Request $request)
    {

        $params = $request->all();
        $arr = $params['parametros'];
        DB::table('sys_forms')
            ->where('forms_id', $id)
            ->update($arr);

        $message = "Se modificó correctamente el registro!";
        if (array_key_exists("status", $arr)) {
            $message = "Se elimino correctamente el registro!";
        }

        $response = [
            "status" => 200,
            "message" => $message,
            "type" => "success",
            "tipoComponent" => "notification"
        ];

        return response()->json($response, 200);
    }

    public function showElement($id)
    {
        $form = FritterDynamic::itemsForm('Form Elementos');
        $columns = FritterDynamic::columnsTable('Agregar Elementos');
        $sys_data_forms = DB::table('sys_data_forms')->where('form_id', $id)->get();
        $data = [];
        $row = [];
        foreach ($sys_data_forms as $dataform) {
            $attributes = [];
            $row['data_form_id'] = $dataform->data_form_id;
            $row['form_id'] = $dataform->form_id;
            $row['component_no'] = $dataform->component_no;
            $components = DB::table('sys_components')
                ->join('sys_elements', 'sys_components.element_id', '=', 'sys_elements.element_id')
                ->join('sys_attributes', 'sys_components.attribute_id', '=', 'sys_attributes.attribute_id')
                ->select('sys_components.*', 'sys_elements.name_element', 'sys_attributes.name_attribute')
                ->where('component_no', $dataform->component_no)->get();
            foreach ($components as $component) {
                if ($component->attribute_id == 1) {
                    $row['element_id'] = $component->element_id;
                    $row['name_element'] = $component->name_element;
                    $row['label'] = $component->value;
                }
                $attributes[] = ['element_id' => $component->element_id, 'attribute_id' => $component->attribute_id, 'name_attribute' => $component->name_attribute, 'value' => $component->value];
            }
            $row['attributes'] = $attributes;
            array_push($data, $row);
        }

        $props_table = FritterDynamic::propsTable(3);

        $response = [
            "status" => 200,
            "data" => $data,
            "formItems" => $form,
            "columns" => $columns,
            "props_table" => $props_table,
            "message" => "Info Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function showAttributes($id, Request $request)
    {
        if (isset($request->_dfi)) {
            $component_id = $request->_dfi;
            $raw = " sys_elements_attributes.*, sys_elements.*, sys_attributes.*, ( SELECT sys_components.value FROM sys_components WHERE sys_components.attribute_id = sys_elements_attributes.attribute_id AND sys_components.component_no = $component_id ) as defaultValue ";
            if ($component_id == 0) {
                $raw = " sys_elements_attributes.*, sys_elements_attributes.default as defaultValue, sys_elements.*, sys_attributes.* ";
            }
        }

        $columns = FritterDynamic::columnsTable('Agregar Atributos');
        $data = DB::table('sys_elements_attributes')
            ->join('sys_elements', 'sys_elements_attributes.element_id', '=', 'sys_elements.element_id')
            ->join('sys_attributes', 'sys_elements_attributes.attribute_id', '=', 'sys_attributes.attribute_id')
            ->selectRaw($raw)
            ->where('sys_elements_attributes.element_id', $id)
            ->get();
        $form = [];
        $props_table = FritterDynamic::propsTable(2);
        $response = [
            "status" => 200,
            "data" => $data,
            "formItems" => $form,
            "columns" => $columns,
            "props_table" => $props_table,
            "message" => "Info Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function createAttributes(Request $request)
    {
        $params = $request->all();
        $arr = $params['parametros'];
        //DB::table('sys_components')->insert($arr);
        $no_componente = DB::table('sys_components')->orderByDesc('component_no')->first(['component_no']);

        foreach ($arr['component'] as $comp) {
            $comp['component_no'] = $no_componente->component_no + 1;
            DB::table('sys_components')->insert($comp);
        }
        //$order = DB::table('sys_data_forms')->where('form_id', $arr['form_id'])->orderByDesc('order')->first(['order']);
        $sys_data_forms = ["form_id" => $arr['form_id'], "component_no" => ($no_componente->component_no + 1), "order" => 1, "dependency" => 0];
        DB::table('sys_data_forms')->insert($sys_data_forms);

        $response = [
            "status" => 200,
            "message" => "Se creo correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }

    public function updateAttributes(Request $request)
    {
        $params = $request->all();
        $arr = $params['parametros'];
        $no_componente = $arr['component_no'];
        foreach ($arr['component'] as $comp) {
            // $comp['component_no'] = $no_componente;
            $revisar = [];
            $actualizar = [];
            $revisar['component_no'] = $no_componente;
            $revisar['element_id'] = $comp['element_id'];
            $revisar['attribute_id'] = $comp['attribute_id'];
            $revisar['type'] = $comp['type'];
            $actualizar['value'] = $comp['value'];
            DB::table('sys_components')->updateOrInsert($revisar, $actualizar);
        }
        $response = [
            "status" => 200,
            "message" => "Se actualizo correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }

    public function deleteElement($id)
    {
        DB::table('sys_data_forms')->where('data_form_id', $id)->delete();
        $response = [
            "status" => 200,
            "message" => "Se elimino correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }
}