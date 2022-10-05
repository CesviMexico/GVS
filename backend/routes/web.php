<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return response()->json(["Meta-fritterverso"=>"Cesvi México","--".date('Y/m/d H:i:s')."__v"=>$router->app->version()],200);
});

$router->group(['prefix' => 'demo/data', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'PlantillaDataDemoController@showAll']);  
    $router->get('/{id}', ['uses' => 'PlantillaDataDemoController@showOne']);
    $router->post('', ['uses' => 'PlantillaDataDemoController@create']);
    $router->delete('/{id}', ['uses' => 'PlantillaDataDemoController@delete']);
    $router->put('/{id}', ['uses' => 'PlantillaDataDemoController@update']);
});

$router->group(['prefix' => 'demo/menu', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'MenuDataController@showAll']);  
    $router->get('/{id}', ['uses' => 'MenuDataController@showOne']); 
});

$router->group(['prefix' => 'demo/user', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'UserDataController@showAll']);  
    $router->get('/{id}', ['uses' => 'UserDataController@showOne']);
    $router->post('', ['uses' => 'UserDataController@create']);
    $router->delete('/{id}', ['uses' => 'UserDataController@delete']);
    $router->put('/{id}', ['uses' => 'UserDataController@update']); 
});

$router->group(['prefix' => 'dashboard', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'DashboardDataController@showAll']);  
    $router->get('/{id}', ['uses' => 'DashboardDataController@showOne']);
    $router->post('', ['uses' => 'DashboardDataController@create']);
    $router->delete('/{id}', ['uses' => 'DashboardDataController@delete']);
    $router->put('/{id}', ['uses' => 'DashboardDataController@update']); 
});

$router->group(['prefix' => 'detalle', 'middleware' => 'jwt'], function () use ($router) {
    $router->post('',  ['uses' => 'DetalleDataController@showAll']);  
    $router->get('/{id}', ['uses' => 'DetalleDataController@showOne']);  
});


$router->group(['prefix' => 'consulta', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'DashoardConsultaDataController@showAll']);  
    $router->post('',  ['uses' => 'DashoardConsultaDataController@layoutData']);  
    $router->get('/{id}', ['uses' => 'DashoardConsultaDataController@showOne']);    
});


