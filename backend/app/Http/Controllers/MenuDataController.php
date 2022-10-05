<?php

namespace App\Http\Controllers;

use App\Models\MenuData;
use Illuminate\Support\Facades\DB;

class MenuDataController extends Controller
{

    public function showAll()
    {
        $data = MenuData::whereNull("submenu_id")->get();

        foreach ($data as $key => $dataRow) {
            $data[$key]['children'] = DB::table('view_sys_menu')->where("submenu_id", $dataRow['menu_id'])->get(["menu_id", "key", "label", "icon", "order"]);
        }

        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Menu Actualizado",
            "type" => "success"
        ];
        return response()->json($response, 200);
    }

    public function showOne($id)
    {
        $data = MenuData::whereNull("submenu_id")
            ->where("keycloak_id", $id)
            ->get();

        foreach ($data as $key => $dataRow) {
            $data[$key]['children'] = DB::table('view_sys_menu')
                ->where("submenu_id", "=", $dataRow['menu_id'])
                ->where("keycloak_id", "=", $id)
                ->get(["menu_id", "key", "label", "icon", "order"]);
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
}
