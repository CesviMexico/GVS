<?php

/** @var \Laravel\Lumen\Routing\Router $router */

$router->get('/', function () use ($router) {
    return response()->json(["Meta-fritterverso" => "Cesvi México", "--" . date('Y/m/d H:i:s') . "__v" => $router->app->version()], 200);
});

$router->group(['prefix' => 'demo/data', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'PlantillaDataDemoController@showAll']);
    $router->get('/{id}', ['uses' => 'PlantillaDataDemoController@showOne']);
    $router->post('', ['uses' => 'PlantillaDataDemoController@create']);
    $router->delete('/{id}', ['uses' => 'PlantillaDataDemoController@delete']);
    $router->put('/{id}', ['uses' => 'PlantillaDataDemoController@update']);
});

$router->group(['prefix' => 'menu', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'MenuDataController@showAll']);
    $router->get('/{id}', ['uses' => 'MenuDataController@showOne']);
});

$router->group(['prefix' => 'user', 'middleware' => 'jwt'], function () use ($router) {
    $router->get('',  ['uses' => 'UserDataController@showAll']);
    $router->get('/{id}', ['uses' => 'UserDataController@showOne']);
    $router->post('', ['uses' => 'UserDataController@create']);
    $router->delete('/{id}', ['uses' => 'UserDataController@delete']);
    $router->put('/{id}', ['uses' => 'UserDataController@update']);
});

$router->group(['prefix' => 'configuracion'], function () use ($router) {
    $router->get('forms',  ['uses' => 'ConfiguracionController@showAll']);
    $router->get('forms/elements/{id}',  ['uses' => 'ConfiguracionController@showComponetizar']);
    $router->get('forms/elements/attributes/{id}',  ['uses' => 'ConfiguracionController@showAttributes']);
    $router->post('forms',  ['uses' => 'ConfiguracionController@create']);
    $router->put('forms/{id}', ['uses' => 'ConfiguracionController@update']);
});
