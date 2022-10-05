<?php

namespace App\Http\Controllers;

use App\Models\DetalleData;
// use Illuminate\Http\Request;
use App\MetaFritterVerso\TablaFront;
use App\MetaFritterVerso\DetalleColumnasFront;

use Illuminate\Support\Facades\DB;
// use Symfony\Component\Console\Helper\Table;
use Illuminate\Http\Request;

class DetalleDataController extends Controller
{

    public function showAll(Request $request)
    {
        //   $data = DetalleData::all();

        $params = $request->all();
        $arr = $params['parametros'];

        $tipo_grua = isset($arr["id_tipo_grua"]) ? $arr["id_tipo_grua"] : '';
        $condicion = isset($arr["id_condicion"]) ? $arr["id_condicion"] : '';
        $permisionario = isset($arr["id_sucursal"]) ? $arr["id_sucursal"] : '';
        $zona = isset($arr["id_zona"]) ? $arr["id_zona"] : '';        
        // $TipoVie='i_lat'; 
        $TipoVie = isset($arr["TipoVie"]) ? $arr["TipoVie"] : '';

        $maniobras = isset($arr["id_maniobra"]) ? $arr["id_maniobra"] : '';

        $data = DB::table('ord_servicio_asignacion_extras')
            // ->join('ord_servicio_asignacion_maniobras', 'ord_servicio_asignacion_extras.id_asignacion', '=', 'ord_servicio_asignacion_maniobras.id_asignacion')
            ->selectRaw("
                        ord_servicio_asignacion_extras.siniestro AS Siniestro,
                        ord_servicio_asignacion_extras.fecha_solicitud AS Fechayhoradesolicitud,
                        ord_servicio_asignacion_extras.folio_servicio AS Foliodelservicio,
                        ord_servicio_asignacion_extras.aseguradora AS Aseguradora,
                        ord_servicio_asignacion_extras.permisionario AS Permisionario,
                        ord_servicio_asignacion_extras.tipo_grua AS Tipodegrua,
                        ord_servicio_asignacion_extras.identificador_grua AS NoEconomicoMatricula,
                        'Estado'  AS Estado,
                        'Municipio'  AS Municipio,
                        'Zona de servicio'  AS Zonadeservicio,
                        ord_servicio_asignacion_extras.con_maniobras AS Maniobras,
                        ord_servicio_asignacion_extras.tipo_vehiculo AS Tipodevehiculo,
                        ord_servicio_asignacion_extras.arrastre_carga AS Concarga,
                        if (isnull(ord_servicio_asignacion_extras.i_lat), '', 'Arribo') AS Arribo,
                        if (isnull(ord_servicio_asignacion_extras.a_ilat), '', 'Arrastre') AS Arrastre,

                        ord_servicio_asignacion_extras.i_lat AS ArriboOrigen_lat,
                        ord_servicio_asignacion_extras.i_lng AS ArriboOrigen_lng,
                        ord_servicio_asignacion_extras.i_dlat AS ArriboDestino_lat,
                        ord_servicio_asignacion_extras.i_dlng AS ArriboDestino_lng,                        
                        ord_servicio_asignacion_extras.i_druta_poly AS coordenadasArribo,

                        ord_servicio_asignacion_extras.a_ruta_desf_poly AS coordenadasArriboReal,

                        ord_servicio_asignacion_extras.a_lat AS ArrastreOrigen_lat,
                        ord_servicio_asignacion_extras.a_lng AS ArrastreOrigen_lng,
                        ord_servicio_asignacion_extras.a_dlat AS ArrastreDestino_lat,
                        ord_servicio_asignacion_extras.a_dlng AS ArrastreDestino_lng,

                        ord_servicio_asignacion_extras.a_druta_poly AS coordenadasArrastre,
                        ord_servicio_asignacion_extras.t_ruta_desf_poly AS coordenadasArrastreReal,
                        ord_servicio_asignacion_extras.t_tiempo_real AS t_tiempo_real
            ")
            ->where($TipoVie, '<>', null)
            ->Where('permisionario', 'like', $permisionario . "%")
            ->Where('tipo_grua', 'like', $tipo_grua . "%")
            ->Where('zona', 'like', $zona . "%")
            ->Where('arrastre_carga', 'like', "%" . $condicion . "%")
            ->Where('con_maniobras', 'like', "%" . $maniobras . "%")
            ->groupBy('ord_servicio_asignacion_extras.id_asignacion')
            ->get();


        $exporta = DB::table('ord_servicio_asignacion_extras')
            //->join('ord_servicio_asignacion_maniobras', 'ord_servicio_asignacion_extras.id_asignacion', '=', 'ord_servicio_asignacion_maniobras.id_asignacion')
            ->selectRaw("
                        ord_servicio_asignacion_extras.siniestro AS Siniestro,
                        ord_servicio_asignacion_extras.fecha_solicitud AS 'Fecha yh orade solicitud',
                        ord_servicio_asignacion_extras.folio_servicio AS 'Folio del servicio',
                        ord_servicio_asignacion_extras.aseguradora AS Aseguradora,
                        ord_servicio_asignacion_extras.permisionario AS Permisionario,
                        ord_servicio_asignacion_extras.tipo_grua AS 'Tipo de grúa',
                        ord_servicio_asignacion_extras.identificador_grua AS 'No Economico/Matricula',
                        ord_servicio_asignacion_extras.i_edo  AS Estado,
                        ord_servicio_asignacion_extras.i_mun  AS Municipio,
                        ord_servicio_asignacion_extras.zona AS 'Zona de servicio',
                        ord_servicio_asignacion_extras.con_maniobras as Maniobras,
                        ord_servicio_asignacion_extras.tipo_vehiculo AS 'Tipo de vehiculo',
                        ord_servicio_asignacion_extras.arrastre_carga AS Concarga,
                        
                        ord_servicio_asignacion_extras.i_registro AS 'Fecha y hora de inicio de traslado',
                        ord_servicio_asignacion_extras.a_registro AS 'Fecha y hora de arribo',
                        ord_servicio_asignacion_extras.a_dregistro AS 'Fecha y hora de inicio de arrastre',
                        ord_servicio_asignacion_extras.t_registro AS 'Fecha y hora de termino',
                        ord_servicio_asignacion_extras.f_registro AS 'Fecha y hora de finalización',

                        Truncate(((i_dtiempo_traf)/60) ,1) AS 'Tiempo teórico', 
                        Truncate(((i_ddist)/1000) ,1) AS 'Kilometraje teórico', 

                        Truncate(((a_tiempo_desf_traf)/60) ,1) AS 'Tiempo teórico con desfase', 
                        Truncate(((a_dist_desf)/1000),1) AS 'Kilometraje teórico con desfase', 

                       'xxx' AS 'Kilometraje real' ,

                       Truncate((ST_Distance_Sphere(point(i_dlat, i_dlng),point(a_lat, a_lng))) ,0) as 'Real vs Teórico Desviación de distancia',
                       Truncate(((TIMESTAMPDIFF(SECOND, a_registro  , a_dregistro  ))/60) ,0) AS 'Tiempo prestación del servicio',


                       Truncate(((a_dtiempo_traf)/60) ,1) AS 'Tiempo teórico', 
                       Truncate((SUM(a_ddist)/1000) ,1) AS 'Kilometraje teórico', 

                       Truncate(((t_tiempo_desf_traf)/60) ,1) AS 'Tiempo teórico con desfase', 
                       Truncate(((t_dist_desf)/1000) ,1) AS 'Kilometraje teórico con desfase', 

                       'xxx' AS 'Kilometraje real' ,

                       Truncate((ST_Distance_Sphere(point(a_dlat, a_dlng),point(t_lat, t_lng))) ,0) as 'Real vs Teórico Desviación de distancia'



            ")
            ->where($TipoVie, '<>', null)
            ->Where('permisionario', 'like', $permisionario . "%")
            ->Where('tipo_grua', 'like', $tipo_grua . "%")
            ->Where('zona', 'like', $zona . "%")
            ->Where('arrastre_carga', 'like', "%" . $condicion . "%")
            ->Where('con_maniobras', 'like', "%" . $maniobras . "%")
            ->groupBy('ord_servicio_asignacion_extras.id_asignacion')
            ->get();

        $columnas = DetalleColumnasFront::columnasTablaDemo();
        $columns = TablaFront::getColumns($columnas);

        $response = [
            "status" => 200,
            "data" => $data,
            "exporta" => $exporta,
            "columns" => $columns,
            "message" => "Info Actualizada",
            "props_table" => TablaFront::getPropsTable(
                [
                    "Title" => 'Detalle',
                    "IconAvatar" => 'mdi:tow-truck',
                    "scrollX" => 1500,
                    "scrollY" => 400,
                    "tableLayout" => 'fixed',
                ]
            ),
            "type" => "success"
        ];
        return response()->json($response);
    }

    public function showOne($id)
    {
        return response()->json(DetalleData::find($id));
    }
}
