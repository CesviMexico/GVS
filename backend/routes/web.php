<?php

/** @var \Laravel\Lumen\Routing\Router $router */

// $router->get('/', function () use ($router) {
//     return response()->json(["Meta-fritterverso" => "Cesvi México", "--" . date('Y/m/d H:i:s') . "__v" => $router->app->version()], 200);
// });

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
    $router->get('forms',  ['uses' => 'Configuracion\FormsController@showAll']);
    $router->post('forms',  ['uses' => 'Configuracion\FormsController@create']);
    $router->put('forms/{id}', ['uses' => 'Configuracion\FormsController@update']);
    
    $router->get('forms/elements/{id}',  ['uses' => 'Configuracion\FormsController@showElement']);
    $router->delete('forms/elements/{id}',  ['uses' => 'Configuracion\FormsController@deleteElement']);

    $router->get('forms/elements/attributes/{id}',  ['uses' => 'Configuracion\FormsController@showAttributes']);
    $router->post('forms/elements/attributes',  ['uses' => 'Configuracion\FormsController@createAttributes']);
    $router->put('forms/elements/attributes',  ['uses' => 'Configuracion\FormsController@updateAttributes']);   
    
    $router->get('tables',  ['uses' => 'Configuracion\TablesController@showAll']);
    $router->post('tables',  ['uses' => 'Configuracion\TablesController@create']);
    $router->put('tables/{id}', ['uses' => 'Configuracion\TablesController@update']);
    
    $router->get('tables/columns/{id}',  ['uses' => 'Configuracion\TablesController@showColumn']);
    $router->delete('tables/columns/{id}',  ['uses' => 'Configuracion\TablesController@deleteElement']);

    $router->get('tables/columns/attributes/{id}',  ['uses' => 'Configuracion\TablesController@showAttributes']);
    $router->post('tables/columns/attributes',  ['uses' => 'Configuracion\TablesController@createAttributes']);
    $router->put('tables/columns/attributes',  ['uses' => 'Configuracion\TablesController@updateAttributes']); 
    
    $router->get('catalogs',  ['uses' => 'Configuracion\CatalogsController@showAll']);
    $router->get('catalogs/{id}',  ['uses' => 'Configuracion\CatalogsController@showCatalog']);
    $router->post('catalogs/{id}',  ['uses' => 'Configuracion\CatalogsController@create']);
    $router->put('catalogs/{idcatalog}/{idcolumn}', ['uses' => 'Configuracion\CatalogsController@update']);
    $router->delete('catalogs/{idcatalog}/{idcolumn}', ['uses' => 'Configuracion\CatalogsController@delete']);
    
});


