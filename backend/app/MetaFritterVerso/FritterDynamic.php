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
                    $dependency_combo = DB::table('sys_dependencys_combos')->where('dependency_combo_id', $dep->dependency_combo_id)->get();
                    foreach ($dependency_combo as $dep_combo) {
                        if ($dep_combo->name_table == "type_catalog") {
                            $obj['options'] = [['label' => 'system', 'value' => 'system'], ['label' => 'operation', 'value' => 'operation']];
                        } else {
                            $combos = [];
                            $combos = DB::table($dep_combo->name_table)->select($dep_combo->label . ' as label', $dep_combo->value . ' as value')->orderBy('label');

                            if ($dep->parent > 0) {

                                $name_combo_parent = DB::table("sys_dependencys_combos")->where('dependency_combo_id', $dep->parent)->value("name_table");
                                $id_combo_parent = DB::table("sys_dependencys_combos")->where('dependency_combo_id', $dep->parent)->value("value");
                                $combo_parent = DB::table($name_combo_parent)->get([$id_combo_parent]);

                                if ($dep_combo->where == "" || $dep_combo->where == null) {
                                    $combos = $combos->select($dep_combo->label . ' as label', $dep_combo->value . ' as value', $id_combo_parent)->orderBy('label')->get();
                                } else {
                                    $combos = $combos->select($dep_combo->label . ' as label', $dep_combo->value . ' as value', $id_combo_parent)->whereRaw($dep_combo->where)->orderBy('label')->get();
                                }

                                foreach ($combo_parent as  $combop) {
                                    $id_relacional = $combop->$id_combo_parent;
                                    foreach ($combos as $combo) {
                                        if ($id_relacional == $combo->$id_combo_parent) {
                                            $combo->value_parent = $id_relacional;
                                        }
                                    }
                                }
                            } else {
                                if ($dep_combo->where == "" || $dep_combo->where == null) {
                                    $combos = $combos->get();
                                } else {
                                    $combos = $combos->whereRaw($dep_combo->where)->get();
                                }
                            }
                            $array = json_decode(json_encode($combos), true);
                            $obj['options'] = array_map(function ($a) {
                                if (array_key_exists('value_parent', $a)) {
                                    return ['label' => $a['label'], 'value' => $a['value'], 'value_parent' => $a['value_parent']];
                                }
                                return ['label' => $a['label'], 'value' => $a['value']];
                            }, $array);
                        }
                    }
                    $obj['parent'] = DB::table("sys_dependencys_combos")->where('dependency_combo_id', $dep->parent)->value("value");;
                    $obj['children'] = DB::table("sys_dependencys_combos")->where('dependency_combo_id', $dep->children)->value("value");
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

    static function propsTable($name_table)
    {
        $table_id = DB::table('sys_tables')->where('name_table', $name_table)->value('table_id');
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
