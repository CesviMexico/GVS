<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class PermisosData extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'cat_permisos';
       /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    protected $fillable = [
        'id_permimso', 'id_keycloak', 'id_menu', 'id_user',
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}