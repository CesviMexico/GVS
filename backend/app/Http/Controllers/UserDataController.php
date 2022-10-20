<?php

namespace App\Http\Controllers;

use App\Models\UserData;
use App\Models\FormData;
use App\Models\PermisosData;
use Illuminate\Http\Request;
use App\MetaFritterVerso\TablaFront;
use App\MetaFritterVerso\UserColumnasFront;
use Illuminate\Database\Eloquent\ModelNotFoundException;

// use Illuminate\Support\Facades\DB;
// use Symfony\Component\Console\Helper\Table;

class UserDataController extends Controller
{

    // public function showAll()
    // {
    //     $data = UserData::where("estatus", "=", "ALTA")->get();

    //     $formItems = FormData::where("tb_name", "=", "cat_user")->get();
    //     $noComponents = FormData::where("tb_name", "cat_user")->distinct()->get(['orden']);
    //     $arr = [];


    //     foreach ($noComponents as $key => $value) {
    //         $orden = $value['orden'];
    //         $obj = [];
    //         foreach ($formItems as $item) {
    //             if ($item['orden'] == $orden) {
    //                 $obj += [$item['propiedad'] => $item['value']];
    //                 $obj['tipo'] = $item['tipo'];
    //             }
    //         }
    //         $arr[] = $obj;
    //     }


    //     $columnas = UserColumnasFront::columnasTablaDemo();
    //     $columns = TablaFront::getColumns($columnas);

    //     $response = [
    //         "status" => 200,
    //         "data" => $data,
    //         "columns" => $columns,
    //         "formItems" => $arr,
    //         "message" => "Info Actualizada",
    //         "props_table" => TablaFront::getPropsTable(
    //             [
    //                 "Title" => 'Usuarios',
    //                 "IconAvatar" => 'ph:users-three-fill',
    //                 "scrollX" => 600,
    //                 "scrollY" => 300,
    //             ]
    //         ),
    //         "type" => "success"
    //     ];
    //     return response()->json($response);
    // }

    // public function showOne($id)
    // {
    //     return response()->json(UserData::find($id));
    // }

    // public function create(Request $request)
    // {
    //     $params = $request->all();
    //     $arr = $params['parametros'];
        
    //     try {
    //         UserData::create($arr);
    //     } catch (\Throwable $th) {
    //         //throw $th;
    //     }
      

    //     $response = [
    //         "status" => 200,
    //         "message" => "Se creo correctamente el registro!",
    //         "type" => "success",
    //         "tipoComponent" => "notification"
    //     ];

    //     return response()->json($response, 200);
    // }

    // public function update($id, Request $request)
    // {
    //     $data = UserData::findOrFail($id);
    //     $params = $request->all();
    //     $arr = $params['parametros'];
    //     $data->update($arr);

    //     $response = [
    //         "status" => 200,
    //         "data" => $data,
    //         "message" => "Se modificó correctamente el registro!",
    //         "type" => "success",
    //         "tipoComponent" => "notification"
    //     ];
    //     return response()->json($response, 200);
    // }

    // public function delete($id)
    // {
    //     $data = UserData::findOrFail($id)->delete();

    //     try {
    //         $data2 = PermisosData::findOrFail($id)->delete();
    //     } catch (ModelNotFoundException  $ex) {
    //         $ex->getMessage();
    //     }


    //     $response = [
    //         "status" => 200,
    //         "data" => $data,
    //         "message" => "Se elimino correctamente el registro!",
    //         "type" => "success",
    //         "tipoComponent" => "notification"
    //     ];
    //     return response()->json($response, 200);
    // }
}
