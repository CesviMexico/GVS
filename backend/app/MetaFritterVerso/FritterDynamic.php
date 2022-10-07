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
                }
            }
            $forms[] = $obj;
        }

        // for ($i=0; $i < sizeof($forms) ; $i++) { 
        //     if($forms[$i]['name_element'] == "Select"){
        //         $forms[$i]['options'] = DB::table($forms[$i]['tb'])->select($forms[$i]['stext'].' as text', $forms[$i]['svalue'].' as value')->get();
        //     }
        // }
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
                    $value = $item['value'] == "true" || $item['value'] == "false" ? boolval($item['value']) : $item['value'];
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
            $value = $prop->value == "true" || $prop->value == "false" ? boolval($prop->value) : $prop->value;
            $props_table += [$prop->name_props_table => $value];
        }
        return $props_table;
    }
}
