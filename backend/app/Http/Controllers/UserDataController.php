<?php

namespace App\Http\Controllers;

use App\Models\UserData;
use App\Models\MenuData;
use App\Models\PermisosData;
use Illuminate\Http\Request;
use App\MetaFritterVerso\FritterDynamic;

class UserDataController extends Controller
{

    public function index()
    {
        $data = UserData::join("sys_cat_rol", "sys_users.id_rol", "=", "sys_cat_rol.id_rol")
            ->join("sys_cat_companys", "sys_users.id_company", "=", "sys_cat_companys.id_company")
            ->select('sys_users.*', 'sys_cat_rol.rol', 'sys_cat_companys.company')
            ->where("sys_users.status", "alta")
            ->get();
        $form = FritterDynamic::itemsForm('Usuarios');
        $columns = FritterDynamic::columnsTable('Usuarios');
        $props_table = FritterDynamic::propsTable('Usuarios');

        $response = [
            "status" => 200,
            "data" => $data,
            "formItems" => $form,
            "columns" => $columns,
            "props_table" => $props_table,
            "message" => "Información Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function show($id)
    {
        return response()->json(UserData::find($id));
    }

    public function store(Request $request)
    {
        $params = $request->all();
        $arr = $params['parametros'];

        try {
            UserData::create($arr);
        } catch (\Throwable $th) {
            //throw $th;
        }

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
        $data = UserData::findOrFail($id);
        $params = $request->all();
        $arr = $params['parametros'];
        $data->update($arr);

        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Se modificó correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }

    public function destroy($id)
    {
        $data = UserData::findOrFail($id)->delete();

        // try {
        //PermisosData::findOrFail($id)->delete();
        // } catch (ModelNotFoundException  $ex) {
        //     $ex->getMessage();
        // }


        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Se elimino correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }

    public static function validateUser($id)
    {
        $validate = UserData::where("id_keycloak", $id)->count("id_user");
        if ($validate > 0) {
            return true;
        }
        return false;
    }
}
