"# template_dinamic" 

#JVicencio 
#Levantar el ambiente
1.-  Crear bd, y despues ejecutar el script del archvio bd/cesviV2.sql (quitando comando para crear bd), cambiar de usuario en vistas de la bd dependiendo los datos de conexion

2.-  Para levantar el backend es necesario posicionarnos en la carpeta desde consola de comando y ejecutar "composer update" 

3.-  Para levantar el frontend es necesario posicionarse en la carpeta desde consola de comando y ejecutar 
    1) "ncu"
    2) "ncu update" 
    3) "npm install", 

Quitar error de group by en query de mysql vendor->illuminate->database->Connectors->MySqlConnector.php    quitar el mode ONLY_FULL_GROUP_BY de la funtion strictMode()

    
