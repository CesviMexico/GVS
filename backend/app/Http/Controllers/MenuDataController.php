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

    public function show($id)
    {
        $data = MenuData::whereNull("submenu_id")
            ->where("keycloak_id", $id)
            ->get();

        foreach ($data as $key => $dataRow) {
            $data[$key]['children'] = MenuData::where("submenu_id", "=", $dataRow['menu_id'])
                ->where("keycloak_id", "=", $id)
                ->get(["menu_id", "key", "label", "icon", "order"]);
        }

        if(!UserDataController::validateUser($id)){
            $user = [];
            $permission = [];
            //UserData::created($user);
            foreach (MenuData::where('menu_basic','Si')->get(['menu_id']) as $value) {
                $permission['menu_id'] = $value->menu_id;
                $permission['user_id'] = UserData::where('id_keycloak',$id)->value('id_user');
                PermisosData::create($permission);
            }            
        }

        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Menu Actualizado",
            "type" => "success"
        ];

        return response()->json($response, 200);
        //return response()->json(["Hola mundo" => "brayquiriun"]);
    }

    public function menuPermisos($id)
    {
        $menus = DB::table("view_sys_cat_menu")->whereNull("submenu_id")->get();
        $permisos = PermisosData::where("user_id", $id)->get();
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
