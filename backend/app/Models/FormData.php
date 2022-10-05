<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class FormData extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viewformdata';
    //protected $table = 'cat_formcomponentes';
      /**
     * The primary key associated with the table.
     *
     * @var string
     */
    protected $primaryKey = 'id_componente_props';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'id',   'label', 'name', 'tipo', 'placeholder', 'required', 'message', 
    // ];

    protected $fillable = [
        'id_componente_props',   'tipo', 'propiedad', 'value', 'orden', 
    ];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}