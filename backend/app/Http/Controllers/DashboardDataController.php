<?php

namespace App\Http\Controllers;
use App\Models\FormData;
use Illuminate\Support\Facades\DB;

class DashboardDataController extends Controller
{

    public function showAll()
    {
      
        $formItems = FormData::where("tb_name", "=", "cat_dashboar")->get();
        $noComponents = FormData::where("tb_name", "cat_dashboar")->distinct()->get(['orden']);
        $arr = [];

        foreach ($noComponents as $key => $value) {
            $orden = $value['orden'];
            $obj = [];

            foreach ($formItems as $item) {
                if ($item['orden'] == $orden) {
                    $obj += [$item['propiedad'] => $item['value']];
                    $obj['tipo'] = $item['tipo'];
                }
            }
            $arr[] = $obj;
        }

        for ($i=0; $i < sizeof($arr) ; $i++) { 
            if($arr[$i]['tipo'] == "Select"){
                $arr[$i]['arrayOption'] = DB::table($arr[$i]['tb'])->select($arr[$i]['stext'].' as text', $arr[$i]['svalue'].' as value')->get();
            }
        }
        
        $response = [
            "status" => 200,          
            "formItems" => $arr,
            "message" => "Info Actualizada",           
            "type" => "success"
        ];
        return response()->json($response);
    }
   

 
}
