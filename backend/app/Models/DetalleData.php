<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class DetalleData extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viewDetalle';
      /**
     * The primary key associated with the table.
     *
     * @var string
     */
    //protected $primaryKey = 'id_user';

    /**
     * The attributes that are mass assignable.
     *
     * @var array
     */
    // protected $fillable = [
    //     'Siniestro',   'Aseguradora', 'Permisionario', 'Estado', 
    // ];
    protected $guarded = [];

    /**
     * The attributes excluded from the model's JSON form.
     *
     * @var array
     */
    protected $hidden = [];
}