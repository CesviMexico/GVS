<?php

/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ViewValuacionData extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'view_valuacion';
      /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_valuacion';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'id_user',   'id_keycloak', 'preferred_username', 'email', 'given_name', 'family_name', 'name', 'status', 'id_company', 'id_rol', 'created_at', 'updated_at'
    // ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
    protected $guarded = [];  
}
