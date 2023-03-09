import NotificationMessageANTD from './notification'
import clienteAxios from './axios'
import "moment/locale/es-mx";
import moment from "moment";
import exportFromJSON from 'export-from-json'
import uniqid from 'uniqid';

//Claves unicas
export function Uid(extra=0) {
  return (new Date()).getTime()+Math.random().toString(16).slice(2)+uniqid()+extra   
   
}

//EXPORTA A EXCEL
export const ExportToExcel = (propX) => {
  const { datasource, Title, } = propX;
  exportFromJSON({ data: datasource, fileName: Title, exportType: 'xls' })
}

export const getAxiosLumen = async (propX) => {
  const { uri, setloading, msErrorApi, keycloak, notification, parametros, request, logoutOptions } = propX;
  setloading && setloading(true)

  try {

    let response

    switch (request) {
      case 'get':
      case 'delete':
      case 'head':
        response = await clienteAxios[request](
          uri,
          { headers: { 'Authorization': `${keycloak.tokenParsed.typ} ${keycloak.token}`, }, },
        );
        break;
      case 'post':
      case 'put':
      case 'patch':
        response = await clienteAxios[request](
          uri,
          { parametros },
          { headers: { 'Authorization': `${keycloak.tokenParsed.typ} ${keycloak.token}`, }, },
        );
        break;
      default:
        break;
    }

    notification && NotificationMessageANTD({
      type: response.data.type,
      texto: response.data.message,
      tipoComponent: response.data.tipoComponent,
    })

    setloading && setloading(false)

    switch (response.status) {
      case 200:
      case 201:
        return response.data
        break;
      case 401:
        keycloak.logout(logoutOptions)

        break;

      default:
        break;
    }


  } catch (error) {

    NotificationMessageANTD({
      type: 'error',
      texto: msErrorApi,
      tipoComponent: 'notification',
    })

    setloading && setloading(false)
    return []

  }
}
// formato de con comas para numeros
function separator(numb) {
  var str = numb.toString().split(".");
  str[0] = str[0].replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  return str.join(".");
}

//Formaro fecha usuario
export const formatDate = (dateOriginal) => {
  let formatted_date = moment(dateOriginal).format("DD/MM/YYYY ")
  return formatted_date;
}

//Formaro fecha hora usuario 
export const formatDateTime = (dateOriginal) => {
  let formatted_date = moment(dateOriginal).format("DD/MM/YYYY HH:mm:ss")
  return formatted_date;
}


export const formatDateTimeBD = (dateOriginal) => {
  let formatted_date = moment(dateOriginal).format("YYYY-MM-DD HH:mm:ss")
  return formatted_date;
}

export const formatDateBD = (dateOriginal) => {
  let formatted_date = moment(dateOriginal).format("YYYY-MM-DD")
  return formatted_date;
}

export const formatTimeBD = (dateOriginal) => {
  let formatted_date = moment(dateOriginal).format("HH:mm:ss")
  return formatted_date;
}




/* resize imagen antes de subir  JVICENCIO*/
export const beforeUpload = file => {
  console.log(" beforeUpload === ", file)

  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);

    reader.onload = () => {
      const img = document.createElement('img');
      img.src = reader.result;

      img.onload = () => {
        var maxW = 650;
        var maxH = 650;
        var iw = img.naturalWidth;
        var ih = img.naturalHeight;
        var scale = Math.min((maxW / iw), (maxH / ih));
        const canvas = document.createElement('canvas');
        var iwScaled = iw * scale;
        var ihScaled = ih * scale;
        canvas.width = iwScaled;
        canvas.height = ihScaled;

        const ctx = canvas.getContext('2d');
        ctx.drawImage(img, 0, 0, iwScaled, ihScaled);
        //ctx.drawImage(img, 0, 0);
        // ctx.fillStyle = 'red';
        // ctx.textBaseline = 'middle';
        // ctx.font = '33px Arial';
        // ctx.fillText('Cesvi México', 20, 20);
        canvas.toBlob((result) => resolve(result));
      };
    };
  });
}

//formato de tiempo transcurrido JVICENCIO
export const secondToTiempoTracurrido = (seconds) => {
  var days = Math.floor(seconds / (3600 * 24));
  seconds -= days * 3600 * 24;
  var hrs = Math.floor(seconds / 3600);
  seconds -= hrs * 3600;
  var mnts = Math.floor(seconds / 60);
  seconds -= mnts * 60;
  let res = days + "d, " + hrs + "h, " + mnts + "m";
  return res;
}

//RANFO DE FECHAS A DESABILITAR JVICENCIO
export const disableDateRangesDatepiker = (range = { startDate: false, endDate: false }) => {
  const { startDate, endDate } = range;
  return function disabledDate(current) {
    let startCheck = true;
    let endCheck = true;
    if (startDate) {
      startCheck = current && current < moment(startDate, 'YYYY-MM-DD HH:mm:ss');
    }
    if (endDate) {
      endCheck = current && current > moment(endDate, 'YYYY-MM-DD HH:mm:ss');
    }
    return (startDate && startCheck) || (endDate && endCheck);
  };
}

export default separator;



//referencias de MOMENT (https://momentjs.com/)

/// tipos de formato
// moment().format('MMMM Do YYYY, h:mm:ss a'); // junio 29º 2022, 1:59:42 pm
// moment().format('dddd');                    // miércoles
// moment().format("MMM Do YY");               // jun. 29º 22
// moment().format('YYYY [escaped] YYYY');

//Relative Time
// moment("20111031", "YYYYMMDD").fromNow(); // hace 11 años
// moment("20120620", "YYYYMMDD").fromNow(); // hace 10 años
// moment().startOf('day').fromNow();        // hace 14 horas
// moment().endOf('day').fromNow();          // en 10 horas
// moment().startOf('hour').fromNow();

//Calendar Time
// moment().subtract(10, 'days').calendar(); // 19/06/2022
// moment().subtract(6, 'days').calendar();  // el jueves pasado a las 14:00
// moment().subtract(3, 'days').calendar();  // el domingo pasado a las 14:00
// moment().subtract(1, 'days').calendar();  // ayer a las 14:00
// moment().calendar();                      // hoy a las 14:00
// moment().add(1, 'days').calendar();       // mañana a las 14:00
// moment().add(3, 'days').calendar();       // sábado a las 14:00
// moment().add(10, 'days').calendar();      // 09/07/2022

// Multiple Locale Support
// moment.locale();         // es-mx
// moment().format('LT');   // 14:01
// moment().format('LTS');  // 14:01:08
// moment().format('L');    // 29/06/2022
// moment().format('l');    // 29/6/2022
// moment().format('LL');   // 29 de junio de 2022
// moment().format('ll');   // 29 de jun. de 2022
// moment().format('LLL');  // 29 de junio de 2022 14:01
// moment().format('lll');  // 29 de jun. de 2022 14:01
// moment().format('LLLL'); // miércoles, 29 de junio de 2022 14:01
// moment().format('llll');
