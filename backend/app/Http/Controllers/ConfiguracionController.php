<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MetaFritterVerso\FritterDynamic;
use Illuminate\Support\Facades\DB;

class ConfiguracionController extends Controller
{

    public function showAll()
    {
        $form = FritterDynamic::itemsForm('Fritter Forms');
        $columns = FritterDynamic::columnsTable('Agregar Forms');
        $props_table = FritterDynamic::propsTable(2);
        $data = DB::table('sys_forms')->where('status', 'alta')->get();

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

    public function showComponetizar($id)
    {
        $form = FritterDynamic::itemsForm('Form Elementos');
        $columns = FritterDynamic::columnsTable('Agregar Elementos');
        $sys_data_forms = DB::table('sys_data_forms')->where('form_id', $id)->get();
        $data = [];
        $row = [];
        foreach ($sys_data_forms as $dataform) {
            $attributes = [];
            $row['form_id'] = $dataform->form_id;
            $row['component_no'] = $dataform->component_no;
            $components = DB::table('sys_components')
                ->join('sys_elements', 'sys_components.element_id', '=', 'sys_elements.element_id')
                ->join('sys_attributes', 'sys_components.attribute_id', '=', 'sys_attributes.attribute_id')
                ->select('sys_components.*', 'sys_elements.name_element', 'sys_attributes.name_attribute')
                ->where('component_no', $dataform->component_no)->get();
            foreach ($components as $component) {
                if ($component->attribute_id == 1) {
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

    public function showAttributes($id)
    {
        $columns = FritterDynamic::columnsTable('Agregar Atributos');
        $data = DB::table('sys_elements_attributes')
            ->join('sys_elements', 'sys_elements_attributes.element_id', '=', 'sys_elements.element_id')
            ->join('sys_attributes', 'sys_elements_attributes.attribute_id', '=', 'sys_attributes.attribute_id')
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
            $comp['component_no'] = $no_componente->component_no + 1 ;
            DB::table('sys_components')->insert($comp);
        }
        $order = DB::table('sys_data_forms')->where('form_id', $arr['form_id'])->orderByDesc('order')->first(['order']); 
        $sys_data_forms = ["form_id" => $arr['form_id'], "component_no" => ($no_componente->component_no + 1), "order" => $order->order, "dependency" => 0];
        DB::table('sys_data_forms')->insert($sys_data_forms);

        $response = [
            "status" => 200,
            "message" => "Se creo correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }
}
