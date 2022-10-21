<?php

namespace App\MetaFritterVerso;

use App\Models\FormData;
use App\Models\ColumnData;
use Illuminate\Support\Facades\DB;

class FritterDynamic
{
    //public static $forms = [];

    function __construct()
    {
    }

    static function itemsForm($name_form)
    {
        $formItems = FormData::where("name_form", $name_form)->get();
        $noComponents = FormData::where("name_form", $name_form)->distinct()->get(['component_no']);

        $forms = [];

        foreach ($noComponents as $value) {
            $component_no = $value['component_no'];
            $obj = [];

            foreach ($formItems as $item) {
                if ($item['component_no'] == $component_no) {
                    $obj += [$item['name_attribute'] => $item['value']];
                    $obj['name_element'] = $item['name_element'];
                    $dependency = (int) $item['dependency'];
                }
            }
            if ($dependency > 0) {
                $dependecys = DB::table('sys_dependencys')->where('component_id', $component_no)->get();
                foreach ($dependecys as $dep) {
                    if($dep->name_table == "type_catalog"){
                        $obj['options'] = [['label'=>'system', 'value'=>'system'], ['label'=>'operation', 'value'=>'operation']];
                    } else {
                        if ($dep->where == "" || $dep->where == null) {
                            $obj['options'] = DB::table($dep->name_table)->select($dep->label . ' as label', $dep->value . ' as value')->get();
                        } else {
                            $obj['options'] = DB::table($dep->name_table)->select($dep->label . ' as label', $dep->value . ' as value')->whereRaw($dep->where)->get();
                        }
                    }
                }
            }

            $forms[] = $obj;
        }

        return $forms;
    }

    static function columnsTable($name_table)
    {
        $formItems = ColumnData::where("name_table", $name_table)->get();
        $noComponents = ColumnData::where("name_table", $name_table)->distinct()->get(['component_no']);

        $columns = [];

        foreach ($noComponents as $value) {
            $component_no = $value['component_no'];
            $obj = [];

            foreach ($formItems as $item) {
                if ($item['component_no'] == $component_no) {
                    if ($item['value'] == "true") {
                        $value = boolval("1");
                    } else if ($item['value'] == "false") {
                        $value = boolval("0");
                    } else {
                        $value = $item['value'];
                    }
                    $obj += [$item['name_attribute_column'] => $value];
                }
            }
            $columns[] = $obj;
        }

        // for ($i=0; $i < sizeof($columns) ; $i++) { 
        //     if($columns[$i]['name_element'] == "Select"){
        //         $columns[$i]['options'] = DB::table($columns[$i]['tb'])->select($columns[$i]['stext'].' as text', $columns[$i]['svalue'].' as value')->get();
        //     }
        // }
        return $columns;
    }

    static function propsTable($table_id)
    {
        $props = DB::table('sys_props_table')
            ->join('sys_cat_props_table', 'sys_props_table.cat_props_table_id', '=', 'sys_cat_props_table.cat_props_table_id')
            ->select('sys_props_table.value', 'sys_cat_props_table.name_props_table')
            ->where('table_id', $table_id)
            ->get();

        $props_table = [];
        foreach ($props as $prop) {
            if ($prop->value == "true") {
                $value = boolval("1");
            } else if ($prop->value == "false") {
                $value = boolval("0");
            } else {
                $value = $prop->value;
            }

            //$value = $prop->value == "false" ? boolval("0") : $prop->value;
            $props_table += [$prop->name_props_table => $value];
        }
        return $props_table;
    }
}