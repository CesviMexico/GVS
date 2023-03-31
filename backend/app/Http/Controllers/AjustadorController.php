<?php

namespace App\Http\Controllers;

use App\Models\ViewUserData;
use Illuminate\Http\Request;

use App\Models\ValuacionData;
use App\Models\ViewValuacionData;
use Illuminate\Support\Facades\DB;
use Carbon\Carbon;

use Dompdf\Dompdf;
use Dompdf\Options;

class AjustadorController extends Controller
{

    public function index($id)
    {
        $data = ViewValuacionData::where('id_ajustado', $id)
            ->where("status", "solicitado")->get();

        foreach ($data as $row) {
            $row->files = DB::table('tb_valucion_file')
                ->where('id_valuacion', $row->id_valuacion)
                ->where('category_file', 'valuacion')
                ->get(['id_files', 'pathname', 'type_file']);
        }


        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Información Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }
    public function porconfirmar($id)
    {
        $data = ViewValuacionData::where('id_ajustado', $id)
            ->where("status", "valuado")->get();

        foreach ($data as $row) {
            $row->files = DB::table('tb_valucion_file')
                ->where('id_valuacion', $row->id_valuacion)
                ->where('category_file', 'valuacion')
                ->get(['id_files', 'pathname', 'type_file']);
        }


        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Información Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function declinadas($id)
    {
        $data = ViewValuacionData::where('id_ajustado', $id)
            ->where("status", "declinado")->get();

        foreach ($data as $row) {
            $row->files = DB::table('tb_valucion_file')
                ->where('id_valuacion', $row->id_valuacion)
                ->where('category_file', 'valuacion')
                ->get(['id_files', 'pathname', 'type_file']);
        }


        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Información Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function aceptadas($id)
    {
        $data = ViewValuacionData::where('id_ajustado', $id)
            ->where("status", "aceptado")->get();

        foreach ($data as $row) {
            $row->files = DB::table('tb_valucion_file')
                ->where('id_valuacion', $row->id_valuacion)
                ->where('category_file', 'valuacion')
                ->get(['id_files', 'pathname', 'type_file']);
        }


        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Información Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function pdf($id)
    {
        // $data = ViewValuacionData::where('id_ajustado', $id)
        //     ->where("status", "aceptado")->get();

        // foreach ($data as $row) {

        $data = DB::table('tb_valucion_file')
            ->where('id_valuacion', $id)
            ->where('category_file', 'pdf')
            ->where('status', 'alta')
            ->limit(1)
            ->get(['pathname']);
        // }


        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Información Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function busqueda($id, Request $request)
    {
        $params = $request->all();
        $arr = $params['parametros'];

        $data = ViewValuacionData::where('id_ajustado', $id)
            ->where("status", "aceptado")
            ->where('busqueda', 'like', '%' . $arr["busqueda"] . '%')
            ->get();

        foreach ($data as $row) {
            $row->files = DB::table('tb_valucion_file')
                ->where('id_valuacion', $row->id_valuacion)
                ->where('category_file', 'valuacion')
                ->get(['id_files', 'pathname', 'type_file']);
        }


        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "Información Actualizada",
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function show($id)
    {
        // return response()->json(UserData::find($id));
        return response()->json(ViewUserData::where("id_keycloak", $id)->get());
    }

    public function store(Request $request)
    {

        date_default_timezone_set('America/Mexico_City');
        $data_valuacion = [
            "id_user_solicita" => $request->id_user_solicita,
            "id_company" => $request->id_company,
            "reporte" => $request->reporte,
            "vin" => $request->vin,
            "danios" => $request->danios,

            "created_at" => Carbon::now()->format('Y-m-d H:i:s'),
            "fecha_solicitud" => Carbon::now()->format('Y-m-d H:i:s'),
        ];

        $id_valuacion = DB::table('tb_valuacion')->insertGetId($data_valuacion);

        if ($request->hasFile('photos')) {
            $files = $request->file('photos');
            foreach ($files as $file) {
                $destinationPath = "/var/www/html/appweb.cesvimexico.com.mx/public_html/GVS/public/valuacion/" . $id_valuacion;
                $extension = ".jpg";
                $fileName = uniqid() . "_" . Carbon::now()->format('YmdHis') . ".jpg";
                $file->move($destinationPath, $fileName);
                $path_bd = $id_valuacion . "\\" . $fileName;
                $valucion_file = [
                    "id_valuacion" => $id_valuacion,
                    "pathname" =>  "https://appweb.cesvimexico.com.mx/GVS/public/valuacion/" . str_replace('\\', '/', $path_bd),
                    "category_file" => "valuacion",
                    "type_file" => "image",
                    "extension" => $extension,
                ];
                DB::table('tb_valucion_file')->insert($valucion_file);
            }
        }

        $emails_cadena = "ngarcia@cesvimexico.com.mx";
        $subject = "Notificación Valuacion en Crucero- Nuevo Expediente-AFIRME";
        $body = "Datos del siniestro creado:                         
                        <br> <br>
                        Numero reporte: " . $request->reporte . "
                        <br><br>
                        VIN: " . $request->vin . "
                        <br><br>
                        Reporte de daños: " . $request->danios . "                         
                        <br><br>
                        Este es un aviso automatico favor de no responder
                        ";

        $curl = curl_init();
        curl_setopt($curl, CURLOPT_SSL_VERIFYHOST, 0);
        curl_setopt($curl, CURLOPT_SSL_VERIFYPEER, 0);
        curl_setopt_array($curl, array(
            CURLOPT_URL => 'https://cesvimexico.com/vinplus/apimail/',
            CURLOPT_RETURNTRANSFER => true,
            CURLOPT_ENCODING => '',
            CURLOPT_MAXREDIRS => 10,
            CURLOPT_TIMEOUT => 0,
            CURLOPT_FOLLOWLOCATION => true,
            CURLOPT_HTTP_VERSION => CURL_HTTP_VERSION_1_1,
            CURLOPT_CUSTOMREQUEST => 'POST',
            CURLOPT_POSTFIELDS => array(
                'action' => 'mail',
                'emails' => $emails_cadena,
                'subject' => $subject,
                'body' => $body,
                'fromname' => 'GVS'
            ),
            CURLOPT_HTTPHEADER => array(
                'Authorization: Basic dXNyYXBpOiM2N29JNXREcjcwc2cudVI='
            ),
        ));
        $response = curl_exec($curl);
        curl_close($curl);

        $response = [
            "status" => 200,
            "message" => "¡Perfecto! El registro se ha creado correctamente.",
            "type" => "success",
            "tipoComponent" => "notification"
        ];

        return response()->json($response, 200);
    }

    public function update($id, Request $request)
    {
        date_default_timezone_set('America/Mexico_City');
        $data = ValuacionData::findOrFail($id);
        $params = $request->all();
        $arr = $params['parametros'];

        $data_update = [
            "status" => $arr["status"],
            "motivo_declina" => $arr["motivo_declina"],
            "fecha_confirmacion_declina" => Carbon::now()->format('Y-m-d H:i:s')
        ];

        $data->update($data_update);

        if ($arr["status"] == 'aceptado') {
            $options = new Options();
            $options->set('defaultFont', 'Courier');
            $options->set('isRemoteEnabled', TRUE);
            $options->set('debugKeepTemp', TRUE);
            $options->set('isHtml5ParserEnabled', TRUE);
            $options->set('chroot', '/');
            $options->setIsRemoteEnabled(true);

            $dompdf = new Dompdf($options);
            $dompdf->set_option('isRemoteEnabled', TRUE);


            $data  = DB::table('tb_valucion_file')->where("id_valuacion", '=', $id)->where("extension", '!=', '.pdf')->get(['pathname']);

            $htmlC = "";
            // $htmlC.= '<p><h1>Hola</h1></p></br></br></br></br></br>'; 

            $dataE = DB::table('view_valuacion')->where("id_valuacion", '=', $id)->get(['ajustador_name', 'vin', 'reporte', 'danios']);
            // ViewValuacionData::where('id_valuacion', '=',$id)->get(['ajustador_name']);

            //   print_r($dataE);

            foreach ($dataE as $row) {
                $htmlC .= "<p>Reporte: " . $row->reporte . "</br>";
                $htmlC .= "VIN: " . $row->vin . "</br>";
                $htmlC .= "Da&ntilde;os amparados: " . $row->danios . "</p>";
            }

            $htmlC .= '</br></br></br></br></br>';

            //$htmlC.=$dataE[0]->ajustador_name."<br/>";

            $htmlC .= "<p>";
            foreach ($data as $file) {

                $htmlC .= '<img src="' . $file->pathname . '" height="375px" style="margin-left:5px"></img>';
            }
            $htmlC .= "</p>";


            //echo $htmlC;


            //  $htmlC.='<img src="/var/www/html/apis.cesvimexico.com.mx/public_html/PlaneacionCesvi/public/images/cesvi20aniv.png"></img>'; 
            //$htmlC.='<img src="https://i.pinimg.com/originals/f9/04/71/f904717bf50d12acf5e42bdb39ad1a85.jpg" height="375px"></img>'; 


            //  Añadir el HTML a dompdf
            $dompdf->loadHtml($htmlC);

            //Establecer el tamaño de hoja en DOMPDF
            $dompdf->setPaper('A4', 'portrait');

            // Renderizar el PDF
            //$dompdf->render();

            // $name = Carbon::now()->format('Y-m-d_h_s_m');
            // $name = "reportePDF";
            // $name = $name.".pdf";
            $name = uniqid() . "_" . Carbon::now()->format('YmdHis') . ".pdf";
            //$pdf=$dompdf->stream($name);
            $dompdf->render();
            $pdf = $dompdf->output();
            //// Guardar el archivo en el servidor
            file_put_contents("/var/www/html/appweb.cesvimexico.com.mx/public_html/GVS/public/valuacion/" . $id . "/" . $name, $pdf);


            $valucion_file = [
                "id_valuacion" => $id,
                "pathname" =>  "https://appweb.cesvimexico.com.mx/GVS/public/valuacion/" . $id . "/" . $name,
                "category_file" => "pdf",
                "type_file" => "pdf",
                "extension" => ".pdf",
            ];
            DB::table('tb_valucion_file')->insert($valucion_file);
        }



        $response = [
            "status" => 200,
            "data" => $data,
            "message" => "¡Perfecto! El registro se ha modificado correctamente.",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response, 200);
    }

    // public function showPrueba()
    // {

    //     //       Storage::disk('local')->directories();
    //     //
    //     //        //Storage::disk('local')->put('/var/www/html/apis.cesvimexico.com.mx/public_html/PlaneacionCesvi/storage/app/dato.txt', 'Contents');
    //     //        
    //     //        echo "okoko"; 

    //     $id = "8";

    //     $options = new Options();
    //     $options->set('defaultFont', 'Courier');
    //     $options->set('isRemoteEnabled', TRUE);
    //     $options->set('debugKeepTemp', TRUE);
    //     $options->set('isHtml5ParserEnabled', TRUE);
    //     $options->set('chroot', '/');
    //     $options->setIsRemoteEnabled(true);

    //     $dompdf = new Dompdf($options);
    //     $dompdf->set_option('isRemoteEnabled', TRUE);


    //     $data  = DB::table('tb_valucion_file')->where("id_valuacion", '=', $id)->where("extension", '!=', '.pdf')->get(['pathname']);

    //     $htmlC = "";
    //     // $htmlC.= '<p><h1>Hola</h1></p></br></br></br></br></br>'; 

    //     $dataE = DB::table('view_valuacion')->where("id_valuacion", '=', $id)->get(['ajustador_name', 'vin', 'reporte', 'danios']);
    //     // ViewValuacionData::where('id_valuacion', '=',$id)->get(['ajustador_name']);

    //     //   print_r($dataE);

    //     foreach ($dataE as $row) {
    //         $htmlC .= "<p>Reporte: " . $row->reporte . "</br>";
    //         $htmlC .= "VIN: " . $row->vin . "</br>";
    //         $htmlC .= "Da&ntilde;os amparados: " . $row->danios . "</p>";
    //     }

    //     $htmlC .= '</br></br></br></br></br>';

    //     //$htmlC.=$dataE[0]->ajustador_name."<br/>";

    //     $htmlC .= "<p>";
    //     foreach ($data as $file) {

    //         $htmlC .= '<img src="' . $file->pathname . '" height="375px" style="margin-left:5px"></img>';
    //     }
    //     $htmlC .= "</p>";


    //     //echo $htmlC;


    //     //  $htmlC.='<img src="/var/www/html/apis.cesvimexico.com.mx/public_html/PlaneacionCesvi/public/images/cesvi20aniv.png"></img>'; 
    //     //$htmlC.='<img src="https://i.pinimg.com/originals/f9/04/71/f904717bf50d12acf5e42bdb39ad1a85.jpg" height="375px"></img>'; 


    //     //  Añadir el HTML a dompdf
    //     $dompdf->loadHtml($htmlC);

    //     //Establecer el tamaño de hoja en DOMPDF
    //     $dompdf->setPaper('A4', 'portrait');

    //     // Renderizar el PDF
    //     //$dompdf->render();

    //     // $name = Carbon::now()->format('Y-m-d_h_s_m');
    //     // $name = "reportePDF";
    //     // $name = $name.".pdf";
    //     $name = uniqid() . "_" . Carbon::now()->format('YmdHis') . ".pdf";
    //     //$pdf=$dompdf->stream($name);
    //     $dompdf->render();
    //     $pdf = $dompdf->output();
    //     //// Guardar el archivo en el servidor
    //     file_put_contents("/var/www/html/appweb.cesvimexico.com.mx/public_html/GVS/public/valuacion/" . $id . "/" . $name, $pdf);


    //     $valucion_file = [
    //         "id_valuacion" => $id,
    //         "pathname" =>  "https://appweb.cesvimexico.com.mx/GVS/public/valuacion/" . $id . "/" . $name,
    //         "category_file" => "pdf",
    //         "type_file" => "pdf",
    //         "extension" => ".pdf",
    //     ];
    //     DB::table('tb_valucion_file')->insert($valucion_file);
    // }
}
