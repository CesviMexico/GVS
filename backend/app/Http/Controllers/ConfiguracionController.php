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
        if(array_key_exists("status", $arr)){
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

    public function showComponetizar()
    {
        $form = FritterDynamic::itemsForm('Fritter Forms');
        $columns = FritterDynamic::columnsTable('Agregar Forms');
        $data = DB::table('sys_forms')->where('status', 'alta')->get();
        $props_table = [];

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

}
