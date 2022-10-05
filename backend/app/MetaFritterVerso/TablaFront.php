<?php

namespace App\MetaFritterVerso;

class TablaFront
{
    public static $json = [];

    function __construct()
    {
    }

    public static function getPropsTable($propstable = [])
    {
        return [
            "pagination" =>array_key_exists("pagination", $propstable)? $propstable["pagination"] : false,
            "pageSize" => array_key_exists("pageSize", $propstable) ? $propstable["pageSize"] : 5,
            "simplepage" => array_key_exists("simplepage", $propstable) ? $propstable["simplepage"] : false,
            "positionBottom" =>array_key_exists("positionBottom", $propstable) ? $propstable["positionBottom"] : "bottomRight", // bottomLeft |bottomCenter|bottomRight
            "positionTop" => array_key_exists("positionTop", $propstable) ? $propstable["positionTop"] : 'none', // topLeft |topCenter |topRight|
            "Title" => array_key_exists("Title", $propstable)? $propstable["Title"] : 'Titulo de la tabla',
            "size" => array_key_exists("size", $propstable) ? $propstable["size"] : 'small', //default | middle | small
            "bordered" => array_key_exists("bordered", $propstable) ? $propstable["bordered"] : true,
            "scrollX" => array_key_exists("scrollX", $propstable) ? $propstable["scrollX"] : 1200,
            "scrollY" => array_key_exists("scrollY", $propstable) ? $propstable["scrollY"] :  300,
            "IconAvatar" => array_key_exists("IconAvatar", $propstable) ? $propstable["IconAvatar"] : 'iconoir:system-restart',
            "tableLayout" => array_key_exists("tableLayout", $propstable) ? $propstable["tableLayout"] :  "auto",
        ];
    }

    public static function getColumns($arr)
    {
        for ($i = 0; $i < sizeof($arr); $i++) {
            $objeto = $arr[$i];
            $element_op = "normal";
            switch ($element_op) {
                case "normal":
                    self::createColumn($objeto);
                    break;
                default:
                    break;
            }
        }
        return self::$json;
    }

    static function createColumn($objeto)
    {
        $data = $objeto['data'];
        if (!empty($data['label'])) {
            $values = [
                "title" => $data['label'],
                "dataIndex" => $data['value'],
                "key" => $data['value']
            ];
        } else {
            $values = [
                "key" => $data['value']
            ];
        }

        $values += self::extrasNormal($objeto);
        array_push(self::$json, $values);
    }

    static function extrasNormal($objeto)
    {
        $extra = $objeto['extras'];
        $values = [];
        foreach ($extra as $value) {
            foreach ($value as $key => $subvalue) {
                $values += [$key => $subvalue];
            }
        }
        return $values;
    }
}
