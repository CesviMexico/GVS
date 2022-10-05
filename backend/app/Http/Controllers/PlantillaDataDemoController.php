<?php

namespace App\Http\Controllers;

use App\Models\PlantillaDataDemo;
use Illuminate\Http\Request;
use App\MetaFritterVerso\TablaFront;
use App\MetaFritterVerso\ColumnasFront;
use Symfony\Component\Console\Helper\Table;

class PlantillaDataDemoController extends Controller
{

    public function showAll()
    {
        $data = PlantillaDataDemo::where("estatus", "=", "ALTA")->get();

        $columnas = ColumnasFront::columnasTablaDemo();
        $columns = TablaFront::getColumns($columnas);

        $response = [
            "status" => 200,
            "data" => $data,
            "columns" => $columns,
            "message" => "Info Actualizada",
            "props_table" => TablaFront::getPropsTable(
                [
                    "Title" => 'Title example table dance churro',
                    "IconAvatar" => 'ph:users-three-fill',
                ]
            ),
            "type" => "success",
            "tipoComponent" => "notification"
        ];
        return response()->json($response);
    }

    public function showOne($id)
    {
        return response()->json(PlantillaDataDemo::find($id));
    }

    public function create(Request $request)
    {

        $params = $request->all();
        $arr = $params['parametros'];

        PlantillaDataDemo::create($arr);
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
        $data = PlantillaDataDemo::findOrFail($id);
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

    public function delete($id)
    {
        PlantillaDataDemo::findOrFail($id)->delete();
        return response('Deleted Successfully', 200);
    }
}
