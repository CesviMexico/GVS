<?php

namespace App\Http\Controllers\Services;

use App\Http\Controllers\Controller;
use Illuminate\Http\Request;
use App\MetaFritterVerso\FritterDynamic;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Http;

class ServiceController extends Controller
{

    public function getPokemones()
    {
        $data = Http::get('https://pokeapi.co/api/v2/pokemon');
        $response = [
            "pokemon" => $data['results'],
        ];
        return response()->json($response, 200);
    }
}
