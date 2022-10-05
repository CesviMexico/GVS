const formItems = [
    {
        label: "Nombre",
        name: "Nombre",
        tipo: 'Input',
        placeholder: "Nombre",
        rules: [
            {
                required: true,
                message: 'Please input your Nombre!',
            },
        ],
    },
    {
        label: "email",
        name: "email",
        tipo: 'Input',
        placeholder: "email",
        rules: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!',
            },
            {
                required: true,
                message: 'Please input your E-mail!',
            },
        ],
    },
    {
        label: "PW",
        name: "PW",
        tipo: 'InputPassword',
        tooltip: "Aqui va el mensaje del campos -tooltip-",
        rules: [
            {
                required: true,
                message: 'Please input your username!',
            },
        ],
        hasFeedback: true,
    },
    {
        label: "donation",
        name: "Donation",
        tipo: 'InputNumber',
        min: 1,
        max: 10,
        tooltip: "Solo numeros",
        rules: [
            {
                required: false,
                message: 'Please input donation amount!',
            },
        ],
    },
    {
        label: "intro",
        name: "Intro",
        tipo: 'InputTextArea',
        maxLength: 300,
        showCount: true,
        extra: "We must make sure that your are a human.",
        rules: [
            {
                required: false,
                message: 'Please input Intro',
            },
        ],
    },
    {
        label: "DatePicker",
        name: "DatePicker",
        tipo: 'DatePicker',
        format: "DD-MM-YYYY",

        rules: [
            {
                type: 'object',
                required: false,
                message: 'Please select DatePicker!',
            },
        ],
    },
    {
        label: "dateTimepicker",
        name: "DateTimepicker",
        tipo: 'DatePicker',
        showTime: true,
        format: "DD-MM-YYYY HH:mm:ss",

        rules: [
            {
                type: 'object',
                required: false,
                message: 'Please select DateTimepicker!',
            },
        ],
    },
    {
        label: "RangePicker",
        name: "RangePicker",
        tipo: 'RangePicker',
        format: "DD-MM-YYYY",

        rules: [
            {
                type: 'array',
                required: false,
                message: 'Please select RangePicker!',
            },
        ],
    },
    {
        label: "RangePickerTime",
        name: "RangePickerTime",
        tipo: 'RangePicker',
        showTime: true,
        format: "DD-MM-YYYY HH:mm:ss",
        rules: [
            {
                type: 'array',
                required: false,
                message: 'Please select RangePickerTime!',
            },
        ],
    },
    {
        label: "TimePicker",
        name: "TimePicker",
        tipo: 'TimePicker',
        format: "HH:mm:ss",

        rules: [
            {
                type: 'object',
                required: false,
                message: 'Please select TimePicker!',
            },
        ],
    },
    {
        label: "Select",
        name: "Select",
        tipo: 'Select',

        rules: [
            {
                required: false,
                message: 'Please select your country!',
            },
        ],

        arrayOption: [
            {
                text: 'China',
                value: 'China',
            },
            {
                text: 'U.S.A',
                value: 'U.S.A',
            },
            {
                text: 'MEXICO',
                value: 'MEXICO',
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
    {
        label: "SelectMultiple",
        name: "SelectMultiple",
        tipo: 'Select',
        mode: "multiple",
        rules: [
            {
                required: false,
                message: 'Please select your country!',
                type: 'array',
            },
        ],

        arrayOption: [
            {
                text: 'China',
                value: 'China',
            },
            {
                text: 'U.S.A',
                value: 'U.S.A',
            },
            {
                text: 'MEXICO',
                value: 'MEXICO',
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
    {
        label: "Switch",
        name: "Switch",
        tipo: 'Switch',
        valuePropName: "checked",
    },
    {
        label: "Slider",
        name: "Slider",
        tipo: 'Slider',
        marksSlider: {
            0: 'A',
            20: 'B',
            40: 'C',
            60: 'D',
            80: 'E',
            100: 'F',
        }
    },
    {
        label: "RadioGroup",
        name: "RadioGroup",
        tipo: 'RadioGroup',
        arrayRadio: [
            {
                text: 'item 1',
                value: 'Radio1',
            },
            {
                text: 'item 2',
                value: 'Radio2',
            },
            {
                text: 'item 3',
                value: 'Radio3',
            }
        ],
    },
    {
        label: "RadioButton",
        name: "RadioButton",
        tipo: 'RadioGroup',
        groupButton: true,
        rules: [
            {
                required: false,
                message: 'Please pick an item!',
            },
        ],
        arrayRadio: [
            {
                text: 'Butto 1',
                value: 'RadioButto1',
            },
            {
                text: 'Butto 2',
                value: 'RadioButto2',
            },
            {
                text: 'Butto 3',
                value: 'RadioButto3',
            }
        ],
    },

    {
        label: "CheckboxGroup",
        name: "CheckboxGroup",
        tipo: 'CheckboxGroup',
        arrayCheckbox: [
            {
                text: 'item 1',
                value: 'Checkbox1',
            },
            {
                text: 'item 2',
                value: 'Checkbox2',
            },
            {
                text: 'item 3',
                value: 'Checkbox3',
            }
        ],
    },

    {
        label: "Rate",
        name: "Rate",
        tipo: 'Rate',
    },

    {
        label: "Upload",
        name: "Upload",
        tipo: 'Upload',

        namefile: "Upload",
        actionUrl: "/upload.do",
        listType: "text", //types: text, picture or picture-card 
        tipoFile: ".pdf, .jpg, .jpeg, .png",
        multipleFile: true,
        textButton: "Click to upload",
        valuePropName: "fileList",
        getValueFromEvent: true,
        extra: "longgggggggggggggggggggggggggggggggggg",
    },

    {
        label: "UploadDragger",
        name: "UploadDragger",
        tipo: 'Upload',
        dragger: true,

        namefile: "Upload",
        actionUrl: "/upload.do",
        listType: "text", //types: text, picture or picture-card 
        tipoFile: ".pdf, .jpg, .jpeg, .png",
        multipleFile: true,
        textButton: "Click to upload",
        valuePropName: "fileList",
        getValueFromEvent: true,
        antuploadtext: 'Click or drag file to this area to upload',
        antuploadhint: 'Support for a single or bulk upload.',


    },



]
export default formItems;