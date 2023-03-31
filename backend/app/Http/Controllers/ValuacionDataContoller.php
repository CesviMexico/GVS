<?php

namespace App\Http\Controllers;

use App\Models\ViewValuacionData;
use App\Models\ValuacionFile;
use App\Models\ValuacionData;
use Illuminate\Http\Request;
use App\MetaFritterVerso\FritterDynamic;
use Carbon\Carbon;
use Illuminate\Support\Facades\DB;


class ValuacionDataContoller extends Controller
{
    public function index(){
        $data = ViewValuacionData::where("view_valuacion.status", "solicitado")->get();
        $columns = FritterDynamic::columnsTable("Valuaciones en espera");
        $props_table = FritterDynamic::propsTable('Valuaciones en espera');

        $response = [
            "status" => 200,
            "message" => "Información Actualizada",
            "type" => "success",
            "data" => $data,
            "columns" => $columns,
            "props_table" => $props_table,

        ];
        return response()->json($response);
    }
    public function indexConfirm(){
        $data = ViewValuacionData::where("view_valuacion.status", "valuado")->get();
        $columns = FritterDynamic::columnsTable("Valuaciones por Confirmar");
        $props_table = FritterDynamic::propsTable('Valuaciones por Confirmar');
        $response = [
            "status" => 200,
            "message" => "Información Actualizada",
            "type" => "success",
            "data" => $data,
            "columns" => $columns,
            "props_table" => $props_table,
        ];
        return response()->json($response);
    }

    public function indexAcept (){
        $data = ViewValuacionData::where("view_valuacion.status", "aceptado")->get();
        $columns = FritterDynamic::columnsTable("Valuaciones aceptadas");
        $props_table = FritterDynamic::propsTable('Valuaciones aceptadas');
        $response = [
            "status" => 200,
            "message" => "Información Actualizada",
            "type" => "success",
            "data" => $data,
            "columns" => $columns,
            "props_table" => $props_table,
        ];
        return response()->json($response);
    }
    
    public function indexDeclined(){
        $data = ViewValuacionData::where("view_valuacion.status", "declinado")->get();
        $columns = FritterDynamic::columnsTable("Valuaciones declinadas");
        $props_table = FritterDynamic::propsTable('Valuaciones declinadas');
        $response = [
            "status" => 200,
            "message" => "Información Actualizada",
            "type" => "success",
            "data" => $data,
            "columns" => $columns,
            "props_table" => $props_table,
        ];
        return response()->json($response);
    }

    public function show($id)
    {
        $data = ValuacionFile::select("pathname")->where("tb_valucion_file.id_valuacion", $id)
        ->where("tb_valucion_file.status", "alta")
        ->where("tb_valucion_file.category_file", "valuacion")
        ->get();
        $response = [
            "status" => 200,
            "type" => "success",
            "message" => "Fotos tomadas",
            "data" => $data,
        ];
        return response()->json($response);

    }

    public function showMonto($id){
        $data = ValuacionFile::select("pathname")->where("tb_valucion_file.id_valuacion", $id)
        ->where("tb_valucion_file.status", "alta")
        ->where("tb_valucion_file.category_file", "monto")
        ->get();
        $response = [
            "status" => 200,
            "type" => "success",
            "message" => "Fotos tomadas",
            "data" => $data,
        ];
        return response()->json($response);
    }

    public function storageValuacion($id, Request $request)
    {

        if ($request->hasFile('file')) {
            $files =$request->file();
            foreach ($files as $file) {
                
                // $pathname = getcwd();
                $id_valuacion = $id;
                $uri = "/var/www/html/appweb.cesvimexico.com.mx/public_html/GVS/public/valuacion/" . $id_valuacion;
                $destinationPath = $uri;
                $extension = ".jpg";
                $fileName = uniqid() . "_" . Carbon::now()->format('YmdHis') . ".jpg";
                $file->move($destinationPath, $fileName);

                // $pathname = env("PATHNAME");
                // $destinationPath = $pathname . $uri;

                $path_bd = $id_valuacion . "\\" . $fileName;

                $valucion_file = [
                    "id_valuacion" => $id_valuacion,
                    "pathname" =>  "https://appweb.cesvimexico.com.mx/GVS/public/valuacion/" . str_replace('\\', '/', $path_bd),
                    "category_file" => "monto",
                    "type_file" => "image",
                    "extension" => $extension,
                ];
                DB::table('tb_valucion_file')->insert($valucion_file);
            }
        }

        $response = [
            "status" => 200,
            "valucion_file"=> $files,
            "message" => "Se creo correctamente el registro!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];

        return response()->json($response, 200);
    }

    public function update($id, Request $request)
    {
        date_default_timezone_set('America/Mexico_City');
        $data = ValuacionData::findOrFail($id);
        $parametros = $request->all();
        $arr = $parametros['parametros'];

        $data_update = [
            "status" => $arr["status"],
            "id_user_respuesta" => $arr ["id_user_respuesta"],
            "fecha_respuesta" => Carbon::now()->format('Y-m-d H:i:s')
        ];

        $data->update($data_update);
        $valuationsUser = ViewValuacionData::selectRaw("COUNT(view_valuacion.id_valuacion) as T")
        ->where("view_valuacion.id_ajustado", "=", $arr["id_ajustado"] )
        ->where("view_valuacion.status", "=", "valuado")
        ->get();        

        $response = [
            "status" => 200,
            "message" => "Información Actualizada",
            "type" => "success",
            "totales" => $valuationsUser,

        ];
        return response()->json($response, 200);
    }
     
    public function destroyValuacion($id)
    {
        $data = ValuacionFile::findOrFail($id)->delete();
        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Se eliminó correctamente la imagen!",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }
}