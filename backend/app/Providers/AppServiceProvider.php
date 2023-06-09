<?php

namespace App\Providers;

use Illuminate\Support\ServiceProvider;
use Illuminate\Support\Facades\Http;

class AppServiceProvider extends ServiceProvider
{
    /**
     * Register any application services.
     *
     * @return void
     */
    public function register()
    {
        Http::macro('pokemones', function () {
            return Http::baseUrl('https://pokeapi.co/api/v2');
        });
    }
}
