<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class LayoutData extends Model
{

    /**
     * The table associated with the model.
     *
     * @var string
     */
    protected $table = 'viewLayout';
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