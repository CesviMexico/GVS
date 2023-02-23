<?php

namespace App\Http\Controllers;

use App\Models\MenuData;
use App\Models\UserData;
use App\Models\PermisosData;
use App\Http\Controllers\UserDataController;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class MenuDataController extends Controller
{

    public function index()
    {
        $data = MenuData::whereNull("submenu_id")->get();

        foreach ($data as $key => $dataRow) {
            $data[$key]['children'] = DB::table('view_sys_menu')->where("submenu_id", $dataRow['menu_id'])->get(["menu_id", "key", "label", "icon", "order", "submenu"]);
        }

        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Menu Actualizado",
            "type" => "success"
        ];
        return response()->json($response, 200);
    }

    public function show($id, Request $request)
    {

        if (!UserDataController::validateUser($id)) {
            $parametros = $request->all();
            $us = json_decode($parametros['_us'], true);
            $rol_id = DB::table('sys_cat_rol')->where('rol', $us['rol'])->value('id_rol');
            $us['id_rol'] = is_null($rol_id) ? 1 : $rol_id;
            unset($us['rol']);
            UserData::create($us);
            $permission = [];
            foreach (MenuData::where('menu_basic','Si')->get(['menu_id']) as $value) {
                $permission['menu_id'] = $value->menu_id;
                $permission['user_id'] = UserData::where('id_keycloak',$id)->value('id_user');
                $permission['keycloak_id'] = $id;
            }
            PermisosData::create($permission);            
        }

        $data = MenuData::whereNull("submenu_id")
            ->where("keycloak_id", $id)
            ->get();

        foreach ($data as $key => $dataRow) {
            $data[$key]['children'] = MenuData::where("submenu_id", "=", $dataRow['menu_id'])
                ->where("keycloak_id", "=", $id)
                ->get(["menu_id", "key", "label", "icon", "order"]);
        }

        $user = UserData::join("sys_cat_rol", "sys_users.id_rol", "=", "sys_cat_rol.id_rol")
        ->join("sys_cat_companys", "sys_users.id_company", "=", "sys_cat_companys.id_company")
        ->select('sys_users.*', 'sys_cat_rol.rol', 'sys_cat_companys.company')
        ->where("sys_users.status", "alta")
        ->find($id);

        $response = [
            "status" => 200,
            "data" => $data,
            "user" => $user,
            "message" => "Menu Actualizado",
            "type" => "success"
        ];

        return response()->json($response, 200);
        //return response()->json(["Hola mundo" => "brayquiriun"]);
    }

    public function menuPermisos($id)
    {
         $menus = DB::table("view_sys_cat_menu")->get(); //// se quito el where para aparezcan tods los menus y submenus
        //$menus = DB::table("view_sys_cat_menu")->whereNull("submenu_id")->get();
        $permisos = PermisosData::where("user_id", $id)->get();
        
        $id_keycloak = UserData::where('id_user',$id)->value('id_keycloak');
        
        foreach ($menus as $menu) {
            $aux = false;
            $permission_id = 0;
            $menu_id = $menu->menu_id;
            foreach ($permisos as $permiso) {
                $permission_id = $permiso->permission_id;
                if ($permiso->menu_id == $menu_id) {
                    $aux = true;
                    break;
                }
            }
            $menu->checked = $aux;
            $menu->permission_id = $permission_id;
            $menu->keycloak_id = $id_keycloak;
        }
        $response = [
            "status" => 200,
            "menu" => $menus,
            "permisos" => $permisos,
            "message" => "Menu Actualizado",
            "type" => "success"
        ];

        return response()->json($response, 200);
    }

    public function addPermiso(Request $request)
    {
        $params = $request->all();
        $arr = $params['parametros'];
        PermisosData::create($arr);

        $response = [
            "status" => 200,
            "message" => "Permiso Actualizado",
            "type" => "success"
        ];
        return response()->json($response, 200);
    }

    public function deletePermiso($id)
    {

        PermisosData::findOrFail($id)->delete();

        $response = [
            "status" => 200,
            "message" => "Permiso Eliminado",
            "type" => "success"
        ];
        return response()->json($response, 200);
    }
}
