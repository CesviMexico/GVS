<?php

namespace App\MetaFritterVerso;
use App\MetaFritterVerso\PropsColumnas;

class DetalleColumnasFront
{
    public static function columnasTablaDemo()
    {
        $arr = [
            [
                "data" => PropsColumnas::getDataBase("Siniestro", "Siniestro"),
                "extras" => [
                  
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Fecha y hora de solicitud", "Fechayhoradesolicitud"),
                "extras" => [
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Folio del servicio", "Foliodelservicio"),
                "extras" => [
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],             
            [
                "data" => PropsColumnas::getDataBase("Aseguradora", "Aseguradora"),
                "extras" => [
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Permisionario", "Permisionario"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],

            [
                "data" => PropsColumnas::getDataBase("Tipo de grúa", "Tipodegrua"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("No. Económico / Matricula", "NoEconomicoMatricula"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Corre", "Estado"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Municipio", "Municipio"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Zona de servicio", "Zonadeservicio"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Maniobras", "Maniobras"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Tipo de vehículo", "Tipodevehiculo"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],
            [
                "data" => PropsColumnas::getDataBase("Concarga", "Concarga"),
                "extras" => [
                  
                    PropsColumnas::getOrderString(),
                    PropsColumnas::getBusqueda(),
                ]
            ],           

                    
            [
                "data" => PropsColumnas::getDataBase("", "Ver"),
                "extras" => [
                    PropsColumnas::getActions(
                        "50px",
                        "",
                        "gis:map-route"
                    ),
                    PropsColumnas::getFixed("right"),
                ]
            ],          

        ];
        return $arr;
    }
}
