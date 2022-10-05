<?php

namespace App\MetaFritterVerso;
use App\MetaFritterVerso\PropsColumnas;

class UserColumnasFront
{
    public static function columnasTablaDemo()
    {
        $arr = [
            [
                "data" => PropsColumnas::getDataBase("Keycloak", "id_keycloak"),
                "extras" => [
                    PropsColumnas::getEllipsis(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Nombre(s)", "given_name"),
                "extras" => [
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Apellidos", "family_name"),
                "extras" => [
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],             
            [
                "data" => PropsColumnas::getDataBase("Usuarios", "preferred_username"),
                "extras" => [
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Corre", "email"),
                "extras" => [
                    PropsColumnas::getEllipsis(),
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
                    
            [
                "data" => PropsColumnas::getDataBase("", "Editar"),
                "extras" => [
                    PropsColumnas::getActions(
                        "50px",
                        "",
                        "fluent:person-edit-24-filled"
                    ),

                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("", "Eliminar"),
                "extras" => [
                    PropsColumnas::getActions(
                        "50px",
                        "¿Esta seguro de eliminar?",
                        "fluent:person-delete-16-filled"
                    ),

                ]
            ],
            

        ];
        return $arr;
    }
}
