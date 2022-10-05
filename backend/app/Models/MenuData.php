<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class MenuData extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viewcat_menu';
    

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_menu', 'key', 'label', 'icon', 'orden', 'id_keycloak'
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}