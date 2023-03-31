<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/web', function () use ($router) {
    return response()->json(["MetaFritterVersoWeb" => "Cesvi México"], 200);
});

$router->group(['prefix' => 'ajustador', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('proceso/{id}',  ['uses' => 'AjustadorController@index']); // Mostar todos los registros
    $router->get('porconfirmar/{id}',  ['uses' => 'AjustadorController@porconfirmar']); // Muestra solo un registro
    $router->put('/{id}',  ['uses' => 'AjustadorController@update']); // Actualiza un registro
    $router->get('declinadas/{id}',  ['uses' => 'AjustadorController@declinadas']); // Muestra solo un registro
    $router->get('aceptadas/{id}',  ['uses' => 'AjustadorController@aceptadas']); // Muestra solo un registro
    $router->post('busqueda/{id}',  ['uses' => 'AjustadorController@busqueda']); // Muestra solo un registro
    
    $router->get('pdf/{id}',  ['uses' => 'AjustadorController@pdf']); // Muestra solo un registro


    $router->get('/{id}',  ['uses' => 'AjustadorController@show']); // Muestra solo un registro
    $router->delete('/{id}',  ['uses' => 'AjustadorController@destroy']); // Elimina un registro
});

$router->group(['prefix' => 'Valuacion',  'middleware' => 'jwt'], function () use ($router) {
    $router->get('Espera',  ['uses' => 'ValuacionDataContoller@index']);// Mostar todos registros en espera
    $router->get('Espera/{id}',  ['uses' => 'ValuacionDataContoller@show']);// Mostar imagenes de valuacon
    $router->get('Espera/{id}/monto',  ['uses' => 'ValuacionDataContoller@showMonto']);// Mostar monto de valuacon
    $router->get('PorConfirmar',  ['uses' => 'ValuacionDataContoller@indexConfirm']);// Mostar todos registros por confirmar
    $router->get('Aceptadas',  ['uses' => 'ValuacionDataContoller@indexAcept']);// Mostar todos registros aceptados
    $router->get('Declinadas',  ['uses' => 'ValuacionDataContoller@indexDeclined']);// Mostar todos registros aceptados
    $router->put('Espera/{id}', ['uses' => 'ValuacionDataContoller@update']);//Actualiza
    // $router->post('Espera/file/{id}', ['uses' => 'ValuacionDataContoller@storageValuacion']);//Guarda la imagen del monto de la valuacion 
    $router->delete('Espera/file/{id}', ['uses' => 'ValuacionDataContoller@destroyValuacion']);//Elimina la imagen del monto de la valuacion 
});

$router->group(['prefix' => 'ValuacionFile', ], function () use ($router) {
    $router->post('Espera/file/{id}', ['uses' => 'ValuacionDataContoller@storageValuacion']);//Guarda la imagen del monto de la valuacion 
});

$router->group(['prefix' => 'Insertvaluacion', ], function () use ($router) {
    $router->post('',  ['uses' => 'AjustadorController@store']); // Crea un registro
});

$router->group(['prefix' => 'Indicadores',  'middleware' => 'jwt' ], function () use ($router) {
    $router->get('',  ['uses' => 'IndicadoresController@index']);// Mostar todas las valuaciones
    $router->post('Data',  ['uses' => 'IndicadoresController@show']);// Mostar todas las valuaciones

});

// $router->group(['prefix' => 'service', ], function () use ($router) {
//     $router->get('pokemon',  ['uses' => 'PokemonesController@index']); // Mostar todos los registros
// });





$router->group(['prefix' => 'ExportarPDF' ], function () use ($router) {
    $router->get('',  ['uses' => 'AjustadorController@showPrueba']); // Mostar todos los registros
});