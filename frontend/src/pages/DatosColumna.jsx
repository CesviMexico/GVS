const columnsTableBACK = [
  {
    title: "Pesos",
    dataIndex: "double",
    key: "double",  
    orderNumber: "true",
    tipoMoneda: "$",
  },
  {
    title: "Euro",
    dataIndex: "double",
    key: "double",   
    orderNumber: "true",
    tipoMoneda: "€",
  },
  {
    title: "No",
    dataIndex: "id",
    key: "id",  
    orderNumber: "true",
    busqueda: "",
  },
  {
    title: "double",
    dataIndex: "double",
    key: "double",
    orderDouble: "true",
    tipoMiles: true,
  },
  {
    title: "fecha",
    dataIndex: "fecha",
    key: "fecha",
    orderDate: "true",
    tipoFecha: true,
  },
  {
    title: "fechaTime",
    dataIndex: "fecha",
    key: "fecha",
    orderDate: "true",
    tipoFechaTime: true,
    ellipsis: true, 
  },
  {
    title: "Nombre",
    dataIndex: "first_name",
    key: "first_name",
    align: "left", 
    fixed: 'left', 
      orderString: true,

  },
  {
    title: "Apellido",
    dataIndex: "last_name",
    key: "last_name",
    actions: false,
    responsive: ['md'],
    orderNumber: false,
    busqueda: true,
  },

  {
    title: "Corre",
    dataIndex: "email",
    key: "email",
    actions: false,
    orderNumber: false,
    busqueda: true,
    ellipsis: true,

  },
  {
    title: "gender",
    dataIndex: "gender",
    key: "gender",
    actions: false,
    responsive: ['lg'],
    orderNumber: false,
    busqueda: false,
    filterSearch: true,
    filters: [
      {
        text: 'Male',
        value: 'Male',
      },
      {
        text: 'Female',
        value: 'Female',
      },
    ],

  },

  //dinamicas
  {
    width: '50px',
    key: "Borrar",
    actions: true,
    titleMSG: "¿Esta seguro de Borrar?",
    icon: "twemoji:clown-face",

  },
  {
    width: '50px',
    key: "Nuevo",
    actions: true,
    titleMSG: "prueba nuevo?",
    icon: 'line-md:account-add',

  },

  {
    width: '50px',
    key: "Editar",
    actions: true,
    titleMSG: "¿Esta seguro de editar?",
    icon: 'line-md:account-alert',

  },


  {
    width: '50px',
    key: "Archivo",
    upload: true,
    titleMSGC: "Cargar",
    titleMSGD: "Descarga",
    iconC: 'line-md:cloud-upload-outline-loop',
    iconD: 'line-md:cloud-download-outline-loop',
    tipoFile: ".pdf, .jpg, .jpeg, .png",
    multipleFile: true,
    listType: "text", //types: text, picture or picture-card
    actionUrl:"https://www.mocky.io/v2/5cc8019d300000980a055e76",

  },
  {
    //width: '50px',
    key: "DatePicker",
    datePicker: true,
    placeholder: "DatePicker",
    format: "DD/MM/YYYY",  //HH:mm:ss
    //showTime: "HH:mm:ss",  

  },
  {
    //width: '50px',
    key: "Input",
    Input: true,
    placeholder: "Input",
  },
  {
    //width: '50px',
    key: "TextArea",
    textArea: true,
    placeholder: "TextArea",
    height: 38, //38 hacia arriba
  },
  {
    //width: '50px',
    key: "Select",
    Select: true,
    placeholder: "Select",
    arrayOption: [
      {
        text: 'Optio1',
        value: 'Optio1',
      },
      {
        text: 'Optio2',
        value: 'Optio2',
      },
      {
        text: 'Optio3',
        value: 'Optio3',
      },
      {
        text: 'Optio4',
        value: 'Optio4',
      },
      {
        text: 'Optio5',
        value: 'Optio5',
      }
    ],

  },



]
export default columnsTableBACK;