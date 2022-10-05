<?php

namespace App\Http\Controllers;

use App\Models\LayoutData;
use App\Models\DetalleData;
use Illuminate\Support\Facades\DB;

use Illuminate\Http\Request;


class DashoardConsultaDataController extends Controller
{


    public function layoutData(Request $request)
    {

        $params = $request->all();
        $arr = $params['parametros'];

        //$arr =isset($arr["id_condicion"]) ? $arr["id_condicion"] : 0;
        $tipo_grua = isset($arr["id_tipo_grua"]) ? $arr["id_tipo_grua"] : '';
        $condicion = isset($arr["id_condicion"]) ? $arr["id_condicion"] : '';
        $permisionario = isset($arr["id_sucursal"]) ? $arr["id_sucursal"] : '';
        $zona = isset($arr["id_zona"]) ? $arr["id_zona"] : '';


        $layout = LayoutData::all();

        $Arribo = DB::table('ord_servicio_asignacion_extras')
            ->where('i_lat', '<>', null)
            ->Where('permisionario', 'like', $permisionario . "%")
            ->Where('tipo_grua', 'like', $tipo_grua . "%")
            ->Where('zona', 'like', $zona . "%")
            ->Where('arrastre_carga', 'like', "%" . $condicion . "%")
            ->selectRaw("count(siniestro) as Total, 

                            Truncate((SUM(i_dtiempo_traf)/60)/ count(siniestro)  ,1) AS Teorico, 
                            Truncate((SUM(i_ddist)/1000)/ count(siniestro) ,1) AS kTeorico, 

                            Truncate((SUM(a_tiempo_desf_traf)/60)/ count(siniestro) ,1) AS TeoricoDesfase, 
                            Truncate((SUM(a_dist_desf)/1000)/ count(siniestro) ,1) AS kTeoricoDesfase, 

                            Truncate((SUM(a_tiempo_real)/60)/ count(siniestro) ,1) AS Real1, 

                            
                            Truncate((((SUM(a_tiempo_real)/60) -(SUM(i_dtiempo_traf)/60))/(SUM(i_dtiempo_traf)/60))+1,2) AS FactorRealTeorico ,

                            Truncate(SUM(ST_Distance_Sphere(point(i_dlat, i_dlng),point(a_lat, a_lng)))/ count(siniestro) ,0) as Mdesviacion,

                            Truncate((((SUM(a_tiempo_real)/60) -(SUM(i_dtiempo_traf)/60))),2)  as Tdesviacion,

                            Truncate((((SUM(a_tiempo_real)/60) -(SUM(a_tiempo_desf_traf)/60))/(SUM(a_tiempo_desf_traf)/60))+1,2) AS FactorRealTeoricoDesfase ,


                            Truncate((((SUM(a_tiempo_real)/60) -(SUM(a_tiempo_desf_traf)/60))),2) AS TdesviacionDesfase ,


                            Truncate((SUM(TIMESTAMPDIFF(SECOND, i_registro , a_registro ))/60)/ count(siniestro) ,1) AS MFactorRealTeoricoDesfase,

                            Truncate(  (SUM(TIMESTAMPDIFF(SECOND, fecha_solicitud, i_registro))/60) / count(siniestro)  ,0) AS TiempoSalida,

                            Truncate((SUM(TIMESTAMPDIFF(SECOND, a_registro  , a_dregistro  ))/60)/ count(siniestro) ,0) AS TiempoPrestacionServicio,

                            Truncate((SUM( TIMESTAMPDIFF(SECOND, a_registro , a_dregistro  ))*100/60) /(SUM(TIMESTAMPDIFF(SECOND, i_registro, f_registro ))/60),1)  AS MTiempoPrestacionServicio

                            ")
            ->get();


        // $Total = $Arribo[0]->Total;
        $Total = isset($Arribo[0]->Total) ? $Arribo[0]->Total : '';

        //  $Teorico = $Arribo[0]->Teorico;
        $Teorico = isset($Arribo[0]->Teorico) ? $Arribo[0]->Teorico : '';

        // $kTeorico = $Arribo[0]->kTeorico;
        $kTeorico = isset($Arribo[0]->kTeorico) ? $Arribo[0]->kTeorico : '0';

        //  $TeoricoDesfase = $Arribo[0]->TeoricoDesfase;
        $TeoricoDesfase = isset($Arribo[0]->TeoricoDesfase) ? $Arribo[0]->TeoricoDesfase : '';

        // $kTeoricoDesfase = $Arribo[0]->kTeoricoDesfase;
        $kTeoricoDesfase = isset($Arribo[0]->kTeoricoDesfase) ? $Arribo[0]->kTeoricoDesfase : '0';


        //$Real1 = $Arribo[0]->Real1;
        $Real1 = isset($Arribo[0]->Real1) ? $Arribo[0]->Real1 : '';

        //$FactorRealTeorico = $Arribo[0]->FactorRealTeorico;
        $FactorRealTeorico = isset($Arribo[0]->FactorRealTeorico) ? $Arribo[0]->FactorRealTeorico : '';

        //$Mdesviacion = $Arribo[0]->Mdesviacion;
        $Mdesviacion = isset($Arribo[0]->Mdesviacion) ? $Arribo[0]->Mdesviacion : '0';

        $Tdesviacion = isset($Arribo[0]->Tdesviacion) ? $Arribo[0]->Tdesviacion : '0';

        //$FactorRealTeoricoDesfase = $Arribo[0]->FactorRealTeoricoDesfase;
        $FactorRealTeoricoDesfase = isset($Arribo[0]->FactorRealTeoricoDesfase) ? $Arribo[0]->FactorRealTeoricoDesfase : '';

        //$MFactorRealTeoricoDesfase = $Arribo[0]->MFactorRealTeoricoDesfase;
        $MFactorRealTeoricoDesfase = isset($Arribo[0]->MFactorRealTeoricoDesfase) ? $Arribo[0]->MFactorRealTeoricoDesfase : '0';

        $TdesviacionDesfase = isset($Arribo[0]->TdesviacionDesfase) ? $Arribo[0]->TdesviacionDesfase : '0';

        

        //$TiempoSalida = $Arribo[0]->TiempoSalida;
        $TiempoSalida = isset($Arribo[0]->TiempoSalida) ? $Arribo[0]->TiempoSalida : '';

        //$TiempoPrestacionServicio = $Arribo[0]->TiempoPrestacionServicio;
        $TiempoPrestacionServicio = isset($Arribo[0]->TiempoPrestacionServicio) ? $Arribo[0]->TiempoPrestacionServicio : '0';

        //$MTiempoPrestacionServicio = $Arribo[0]->MTiempoPrestacionServicio;
        $MTiempoPrestacionServicio = isset($Arribo[0]->MTiempoPrestacionServicio) ? $Arribo[0]->MTiempoPrestacionServicio : '0';


        $Arrastre  = DB::table('ord_servicio_asignacion_extras')
            ->where('a_ilat', '<>', null)
            ->Where('permisionario', 'like', $permisionario . "%")
            ->Where('tipo_grua', 'like', $tipo_grua . "%")
            ->Where('zona', 'like', $zona . "%")
            ->Where('arrastre_carga', 'like', "%" . $condicion . "%")
            ->selectRaw('
                          count(siniestro) as Total,  
                          
                          Truncate((SUM(a_dtiempo_traf)/60)/ count(siniestro) ,1) AS Teorico, 

                          Truncate((SUM(a_ddist)/1000)/ count(siniestro) ,1) AS kTeorico, 

                          Truncate((SUM(t_tiempo_desf_traf)/60)/ count(siniestro) ,1) AS TeoricoDesfase, 
                          
                          Truncate((SUM(t_dist_desf)/1000)/ count(siniestro) ,1) AS kTeoricoDesfase, 

                          Truncate((SUM(t_tiempo_real)/60)/ count(siniestro) ,1) AS Real1, 

                          Truncate((((SUM(t_tiempo_real)/60) -(SUM(a_dtiempo_traf)/60))/(SUM(a_dtiempo_traf)/60))+1,2) AS FactorRealTeorico ,

                          Truncate(SUM(ST_Distance_Sphere(point(a_dlat, a_dlng),point(t_lat, t_lng)))/ count(siniestro) ,0) as Mdesviacion,

                          Truncate((((SUM(t_tiempo_real)/60) -(SUM(a_dtiempo_traf)/60))),2) AS Tdesviacion ,


                          Truncate((((SUM(t_tiempo_real)/60) -(SUM(t_tiempo_desf_traf)/60))/(SUM(t_tiempo_desf_traf)/60))+1,2) AS FactorRealTeoricoDesfase ,

                          Truncate((((SUM(t_tiempo_real)/60) -(SUM(t_tiempo_desf_traf)/60))),2) AS MFactorRealTeoricoDesfase
 
                         ')
            ->get();



        // $TotalArrastre = $Arrastre[0]->Total;
        $TotalArrastre = isset($Arrastre[0]->Total) ? $Arrastre[0]->Total : '';

        //$TeoricoArrastre = $Arrastre[0]->Teorico;
        $TeoricoArrastre = isset($Arrastre[0]->Teorico) ? $Arrastre[0]->Teorico : '';

        // $kTeoricoArrastre = $Arrastre[0]->kTeorico;
        $kTeoricoArrastre = isset($Arrastre[0]->kTeorico) ? $Arrastre[0]->kTeorico : '0';


        // $TeoricoDesfaseArrastre = $Arrastre[0]->TeoricoDesfase;
        $TeoricoDesfaseArrastre = isset($Arrastre[0]->TeoricoDesfase) ? $Arrastre[0]->TeoricoDesfase : '';


        //$kTeoricoDesfaseArrastre = $Arrastre[0]->kTeoricoDesfase;
        $kTeoricoDesfaseArrastre = isset($Arrastre[0]->kTeoricoDesfase) ? $Arrastre[0]->kTeoricoDesfase : '0';


        // $RealArrastre = $Arrastre[0]->Real1;
        $RealArrastre = isset($Arrastre[0]->Real1) ? $Arrastre[0]->Real1 : '';

        //$FactorRealTeoricoArrastre = $Arrastre[0]->FactorRealTeorico;
        $FactorRealTeoricoArrastre = isset($Arrastre[0]->FactorRealTeorico) ? $Arrastre[0]->FactorRealTeorico : '';

        //$MdesviacionArrastre = $Arrastre[0]->Mdesviacion;
        $MdesviacionArrastre = isset($Arrastre[0]->Mdesviacion) ? $Arrastre[0]->Mdesviacion : '0';

        $TdesviacionArrastre = isset($Arrastre[0]->Tdesviacion) ? $Arrastre[0]->Tdesviacion : '0';


        //$FactorRealTeoricoDesfaseArrastre = $Arrastre[0]->FactorRealTeoricoDesfase;
        $FactorRealTeoricoDesfaseArrastre = isset($Arrastre[0]->FactorRealTeoricoDesfase) ? $Arrastre[0]->FactorRealTeoricoDesfase : '';

        //$MFactorRealTeoricoDesfaseArrastre = $Arrastre[0]->MFactorRealTeoricoDesfase;
        $MFactorRealTeoricoDesfaseArrastre = isset($Arrastre[0]->MFactorRealTeoricoDesfase) ? $Arrastre[0]->MFactorRealTeoricoDesfase : '0';


        $dataArribo  = [
            [
                "iconPrefix" => "fa6-solid:truck-arrow-right",
                "title" => "Tiempo de salida de la grúa",
                "value" => $TiempoSalida,
                "valueH" => ".",
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos"
            ],
            [
                "iconPrefix" => "mdi:tow-truck",
                "title" => "No. de servicios",
                "value" => $Total,
                "valueH" => ".",
                "valueColor" => "#7b1fa2"
            ],
            [
                "iconPrefix" => "gis:map-time",
                "title" => "Recorrido teórico",
                "value" => $Teorico,
                "valueH" => $kTeorico . " kilómetros",
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos"
            ],
            [
                "iconPrefix" => "gis:map-time",
                "title" => "Recorrido teórico con desfase",
                "valueH" =>  $kTeoricoDesfase . " kilómetros",
                "value" =>  $TeoricoDesfase,
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos",
            ],
            [
                "iconPrefix" => "gis:map-route",
                "title" => "Recorrido real",
                "valueH" => "## kilómetros",
                "value" =>  $Real1,
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos",
            ],
            [
                "iconPrefix" => "mdi:timer-star",
                "title" => "Factor Real vs Teórico",
                "valueH" =>  $Mdesviacion . " metros     /   "."  ".$Tdesviacion." minutos de desviación",
                "value" =>  $FactorRealTeorico,
                "valueColor" => "#7b1fa2",
                "suffix" => "",
            ],
            [
                "iconPrefix" => "mdi:timer-marker",
                "title" => "Factor Real vs Teórico desfasado",
                "valueH" =>  $TdesviacionDesfase . " minutos de desviación",
                "value" =>  $FactorRealTeoricoDesfase,
                "valueColor" => "#7b1fa2",
                "suffix" => "",
            ],

            [
                "iconPrefix" => "fa-solid:truck-loading",
                "title" => "Tiempo de la prestación del servicio",
                "valueH" =>  $MTiempoPrestacionServicio . "% con maniobras",
                "value" => $TiempoPrestacionServicio,
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos",
            ],
        ];
        $dataArrastre  = [
            [
                "iconPrefix" => "mdi:tow-truck",
                "title" => "No. de servicios",
                "value" =>   $TotalArrastre,
                "valueH" => ".",
                "valueColor" => "#7b1fa2"
            ],
            [
                "iconPrefix" => "gis:map-time",
                "title" => "Recorrido teórico",
                "value" => $TeoricoArrastre,
                "valueH" => $kTeoricoArrastre . " kilómetros",
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos"
            ],
            [
                "iconPrefix" => "gis:map-time",
                "title" => "Recorrido teórico con desfase",
                "valueH" => $kTeoricoDesfaseArrastre . " kilómetros",
                "value" => $TeoricoDesfaseArrastre,
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos",
            ],
            [
                "iconPrefix" => "gis:map-route",
                "title" => "Recorrido real",
                "valueH" => "## kilómetros",
                "value" =>  $RealArrastre,
                "valueColor" => "#7b1fa2",
                "suffix" => "minutos",
            ],
            [
                "iconPrefix" => "mdi:timer-star",
                "title" => "Factor Real vs Teórico",
                // "valueH" =>  $MdesviacionArrastre . " m de desviación",
                "valueH" =>  $MdesviacionArrastre . " metros     /   "."  ".$TdesviacionArrastre." minutos de desviación",

                "value" =>  $FactorRealTeoricoArrastre,
                "valueColor" => "#7b1fa2",
                "suffix" => "",
            ],
            [
                "iconPrefix" => "mdi:timer-marker",
                "title" => "Factor Real vs Teórico desfasado",
                "valueH" =>  $MFactorRealTeoricoDesfaseArrastre . " minutos de desviación",
                "value" => $FactorRealTeoricoDesfaseArrastre,
                "valueColor" => "#7b1fa2",
                "suffix" => "",
            ],

        ];



        $response = [
            "status" => 200,
            "dataArribo" => $dataArribo,
            "dataArrastre" => $dataArrastre,
            "layout" => $layout,
            "parametros" => $arr,
            "message" => "Info Actualizada",
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response);
    }
}
