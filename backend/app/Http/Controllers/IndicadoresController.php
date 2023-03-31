<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\MetaFritterVerso\FritterDynamic;
use App\Models\ViewValuacionData;


class IndicadoresController extends Controller
{
    public function index()
    {
        $form = FritterDynamic::itemsForm('Indicadores');
        $response = [
            "status" => 200,
            "message" => "Información Actualizada",
            "type" => "success",
            "formItems" => $form,
        ];
        return response()->json($response);
    }

    public function show(Request $request)
    {

        $params = $request->all();
        $arr = $params['parametros'];

        $exel = ViewValuacionData::where('ajustador_id_estado', 'like',  $arr['estado'] . '%')
            ->where('id_ajustado', 'like',  $arr['ajustador'] . '%')
            ->where('id_valuador', 'like', $arr['valuador'] . '%')
            ->whereDate('fecha_solicitud_BD', '>=', $arr['fechaIn'])
            ->whereDate('fecha_solicitud_BD', '<=', $arr['fechaOut'])
            ->get();

        $sqlData = ViewValuacionData::where('ajustador_id_estado', 'like',  $arr['estado'] . '%')
            ->where('id_ajustado', 'like',  $arr['ajustador'] . '%')
            ->where('id_valuador', 'like', $arr['valuador'] . '%')
            ->whereDate('fecha_solicitud_BD', '>=', $arr['fechaIn'])
            ->whereDate('fecha_solicitud_BD', '<=', $arr['fechaOut'])
            ->selectRaw("
                            SUM( IF(status <> 'solicitado' ,1,0) ) as Total,
                            SUM( IF(status='aceptado' ,1,0) ) AS Taceptadas,
                            SUM( IF(status='declinado' ,1,0) ) AS Tdeclinado,
                            (SUM( IF(status='aceptado' ,1,0) ) +  SUM( IF(status='declinado' ,1,0) ) ) as TAD,
                            Truncate( SUM( IF(status='aceptado' ,1,0) )*100/ (SUM( IF(status='aceptado' ,1,0) ) +  SUM( IF(status='declinado' ,1,0) ) ),0)  as Tporc,
                            Truncate(SUM(Tconfirmacion)/(SUM( IF(status='aceptado' ,1,0) ) +  SUM( IF(status='declinado' ,1,0) ) ),0) AS Tpromedioconfi ,
                            Truncate(SUM(Trespuesta)/ SUM( IF(status <> 'solicitado' ,1,0) ),0) AS Trespuesta,
                            
                            Truncate(SUM(IF(Trespuesta > 18 ,1,0))*100 / SUM( IF(status <> 'solicitado' ,1,0) ),0) AS T18
                     ")
                     
            ->get();

        // $longitud = count($exel);
        $Total = isset($sqlData[0]->Total) ? $sqlData[0]->Total : 0;
        $TotalAceptados = isset($sqlData[0]->Taceptadas) ? $sqlData[0]->Taceptadas : 0;
        $Tporc = isset($sqlData[0]->Tporc) ? $sqlData[0]->Tporc : 0;
        $Tpromedioconfi = isset($sqlData[0]->Tpromedioconfi) ? $sqlData[0]->Tpromedioconfi : 0;
        $Trespuesta = isset($sqlData[0]->Trespuesta) ? $sqlData[0]->Trespuesta : 0;
        $T18 = isset($sqlData[0]->T18) ? $sqlData[0]->T18 : 0;

        $data = [
            [
                "title" => "No. de valuaciones atendidas",
                "body" => $Total,
                "actions" => "",
            ],
            [
                "title" => "Efectividad",
                "body" => $Tporc ." %",
                "actions" =>   $TotalAceptados . " valuaciones aceptadas",
            ],
            [
                "title" => "Tiempo de Respuesta",
                "body" =>   $Trespuesta." minutos",
                "actions" =>  $T18."% < 18 minutos",
            ],
            [
                "title" => "Tiempo de confirmación",
                "body" => $Tpromedioconfi." minutos",
                "actions" => "",
            ]
        ];

        $response = [
            "status" => 200,
            "message" => "Información Actualizada",
            "type" => "success",
            "data" => $data,
            "exel" => $exel,
        ];

        return response()->json($response);
    }
}
