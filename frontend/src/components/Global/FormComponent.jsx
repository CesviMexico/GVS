import React, { useState, useContext, useEffect } from 'react';
import ThemeContext from '../../context/ThemContext'
import Grid from "@mui/material/Grid";
//antd
import 'antd/dist/antd.css';
import {
  ConfigProvider,
  Button, Form,
  Input, InputNumber,
  DatePicker, TimePicker,
  Select, Upload,
  Checkbox, Switch, Slider, Radio, Rate, Spin
} from 'antd';

import { Icon } from '@iconify/react';
import { InboxOutlined, UploadOutlined } from '@ant-design/icons';
import { SearchOutlined } from '@ant-design/icons';

const { RangePicker } = DatePicker;
const { Option } = Select;

const FormAntd = (props) => {
  // Hook y funciones o metodos Globales
  const themeContext = useContext(ThemeContext)
  const { idiomaGral, sizeIcon, backgroundColor, loading } = themeContext

  const {
    formItems, onFinish, titleSubmit = 'Submit', iconButton = 'line-md:search',
    iconButtonSec = 'mdi:microsoft-excel', titleSubmitSec = '', ButtonSec,
    onClickSec
  } = props
  const [formItem] = useState([])

  ///Upload
  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e.fileList;
  };
  const swicthTipo = {
    "Input": ({ placeholder }) => <Input placeholder={placeholder} />,
    "InputPassword": () => <Input.Password />,
    "InputNumber": ({ min, max }) => <InputNumber min={min} max={max} />,
    "InputTextArea": ({ maxLength, showCount }) => <Input.TextArea showCount={showCount} maxLength={maxLength} />,

    "DatePicker": ({ showTime, format }) => <DatePicker showTime={showTime} format={format} />,
    "RangePicker": ({ showTime, format }) => <RangePicker showTime={showTime} format={format} />,
    "TimePicker": ({ format }) => <TimePicker format={format} />,

    "Select": ({ placeholder, arrayOption, mode, key }) =>
      <Select
        key={key}
        mode={mode}
        placeholder={placeholder}
        showSearch
        allowClear
        optionFilterProp="children"
        dropdownStyle={{ zIndex: 2000 }}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
      >
        {arrayOption.map((dato_row, index) =>
          <Option key={index} value={dato_row.value} >{dato_row.text}</Option>
        )}
      </Select>,


    "Switch": () => <Switch />,
    "Slider": ({ marksSlider }) => <Slider marks={marksSlider} />,
    "RadioGroup": ({ arrayRadio, groupButton }) =>
      <Radio.Group>
        {arrayRadio.map((dato_row, index) =>
          !groupButton ?
            <Radio key={index} value={dato_row.value} >{dato_row.text}</Radio>
            :
            <Radio.Button key={index} value={dato_row.value} >{dato_row.text}</Radio.Button>
        )}
      </Radio.Group>,
    "CheckboxGroup": ({ arrayCheckbox }) =>
      <Checkbox.Group>
        {arrayCheckbox.map((dato_row, index) =>
          <Checkbox key={index} value={dato_row.value} >{dato_row.text}</Checkbox>
        )}
      </Checkbox.Group>,
    "Rate": () => <Rate />,
    "Upload": ({ namefile, actionUrl, listType, tipoFile, multipleFile, textButton, dragger, antuploadtext, antuploadhint }) => (
      <>
        {
          !dragger ?
            < Upload name={namefile} action={actionUrl} listType={listType} >
              <Button icon={<UploadOutlined />}>{textButton}</Button>
            </Upload >
            :
            <Upload.Dragger name={namefile} action={actionUrl}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">{antuploadtext}</p>
              <p className="ant-upload-hint">{antuploadhint}</p>
            </Upload.Dragger>
        }
      </>),

    "": () => { "Erro en tipo" },
  }
  const ItemsForm = () => {
    formItems && formItems.forEach(Item => {
      let obj =
      {
        ...Item,
        tipo: swicthTipo[Item.tipo] && swicthTipo[Item.tipo](
          {
            key: Item.name,
            placeholder: Item.placeholder,
            min: Item.min,
            max: Item.max,
            maxLength: Item.maxLength,
            showCount: Item.showCount,
            showTime: Item.showTime == 1 ? true : false,
            format: Item.format,
            arrayOption: Item.arrayOption,
            mode: Item.mode,
            valuePropName: Item.valuePropName,
            marksSlider: Item.marksSlider,
            arrayRadio: Item.arrayRadio,
            groupButton: Item.groupButton,
            arrayCheckbox: Item.arrayCheckbox,

            dragger: Item.dragger,
            namefile: Item.namefile,
            actionUrl: Item.actionUrl,
            listType: Item.listType,
            tipoFile: Item.tipoFile,
            multipleFile: Item.multipleFile,
            textButton: Item.textButton,
            antuploadtext: Item.antuploadtext,
            antuploadhint: Item.antuploadhint,

          }
        )
      }
      formItem.push(obj)
    });

    // console.log('formItem', formItem)
    // console.log('formItem', formItem.length)
  }

  formItem.length == 0 && ItemsForm();

  return (
    <ConfigProvider locale={idiomaGral}>
      <Form name="basic" onFinish={onFinish} >
        <Grid container spacing={1}>
          {formItem.map((row, index) =>
            <Grid item xs={12} sm={6} md={3} key={index}>
              <Form.Item
                key={index}
                label={row.label}
                name={row.name}
                rules={row.rules}
                hasFeedback={row.hasFeedback == 1 ? true : false}
                tooltip={row.tooltip}
                extra={row.extra}
                valuePropName={row.valuePropName}
              //getValueFromEvent={(e) => normFile(e)}
              >
                {row.tipo}
              </Form.Item>
            </Grid>
          )}
          <Grid item xs={12} sm={6} md={3} >
            <Form.Item >
              <Button
                loading={loading}
                //block={true}
                style={{ backgroundColor: backgroundColor, color: 'white' }}
                htmlType="submit"
                shape="round"
                icon={<Icon icon={iconButton} style={{ fontSize: 20, verticalAlign: '-0.125em' }} />}
                // icon={<SearchOutlined />}
                size={"large"}
              >
                <span style={{ marginLeft: '8px' }}  >{titleSubmit}</span>
              </Button>

              {
                ButtonSec &&
                <Button
                  loading={loading}
                  style={{ backgroundColor: backgroundColor, color: 'white', }}
                  icon={<Icon icon={iconButtonSec} style={{ fontSize: 20, verticalAlign: '-0.125em' }} />}
                  shape="round"
                  size={"large"}
                  onClick={() => onClickSec()}
                >
                  <span style={{ marginLeft: '8px' }}  >{titleSubmitSec}</span>
                </Button>
              }


            </Form.Item>
          </Grid>
        </Grid>
      </Form>
    </ConfigProvider>
  );
};

export const FormAntdCrud = (props) => {

  // Hook y funciones o metodos Globales
  const themeContext = useContext(ThemeContext)
  const { idiomaGral } = themeContext
  const { formItems, onChangeSelect , loading= false} = props
  const [formItem] = useState([])

  ///Upload
  const normFile = (e) => {
    console.log('Upload event:', e);

    if (Array.isArray(e)) {
      return e;
    }

    return e.fileList;
  };
  const swicthTipo = {
    "Input": ({ placeholder }) => <Input placeholder={placeholder} />,
    "InputPassword": () => <Input.Password />,
    "InputNumber": ({ min, max }) => <InputNumber min={min} max={max} />,
    "InputTextArea": ({ maxLength, showCount }) => <Input.TextArea showCount={showCount} maxLength={maxLength} />,

    "DatePicker": ({ showTime, format }) => <DatePicker showTime={showTime} format={format} />,
    "RangePicker": ({ showTime, format }) => <RangePicker showTime={showTime} format={format} />,
    "TimePicker": ({ format }) => <TimePicker format={format} />,

    "Select": ({ placeholder, arrayOption, mode, key }) =>
      <Select
        key={key}
        mode={mode}
        placeholder={placeholder}
        showSearch
        optionFilterProp="children"
        onChange={(value, event) => onChangeSelect && onChangeSelect(value, event, key)}
        filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        dropdownStyle={{ zIndex: 2000 }}
      >
        {arrayOption.map((dato_row, index) =>
          <Option key={index} value={dato_row.value} >{dato_row.label}</Option>
        )}
      </Select>,


    "Switch": () => <Switch />,
    "Slider": ({ marksSlider }) => <Slider marks={marksSlider} />,
    "RadioGroup": ({ arrayRadio, groupButton }) =>
      <Radio.Group>
        {arrayRadio.map((dato_row, index) =>
          !groupButton ?
            <Radio key={index} value={dato_row.value} >{dato_row.text}</Radio>
            :
            <Radio.Button key={index} value={dato_row.value} >{dato_row.text}</Radio.Button>
        )}
      </Radio.Group>,
    "CheckboxGroup": ({ arrayCheckbox }) =>
      <Checkbox.Group>
        {arrayCheckbox.map((dato_row, index) =>
          <Checkbox key={index} value={dato_row.value} >{dato_row.text}</Checkbox>
        )}
      </Checkbox.Group>,
    "Rate": () => <Rate />,
    "Upload": ({ namefile, actionUrl, listType, tipoFile, multipleFile, textButton, dragger, antuploadtext, antuploadhint }) => (
      <>
        {
          !dragger ?
            < Upload name={namefile} action={actionUrl} listType={listType} >
              <Button icon={<UploadOutlined />}>{textButton}</Button>
            </Upload >
            :
            <Upload.Dragger name={namefile} action={actionUrl}>
              <p className="ant-upload-drag-icon">
                <InboxOutlined />
              </p>
              <p className="ant-upload-text">{antuploadtext}</p>
              <p className="ant-upload-hint">{antuploadhint}</p>
            </Upload.Dragger>
        }
      </>),

    "": () => { "Erro en tipo" },
  }
  const ItemsForm = () => {
    formItems.length && formItems.forEach(Item => {
      let obj =
      {
        ...Item,
        rules: [
          {
            required: Item.rulesRequired == '1' && Item.rulesRequired,
            message: Item.rulesMessage && Item.rulesMessage,
          },

          {
            type: Item.rulestype && Item.rulestype,
            message: Item.rulestypemessage && Item.rulestypemessage,
          },

        ],
        name_element: swicthTipo[Item.name_element] && swicthTipo[Item.name_element](
          {
            key: Item.name,
            placeholder: Item.placeholder && Item.placeholder,
            min: Item.min && Item.min,
            max: Item.max && Item.max,
            maxLength: Item.maxLength && Item.maxLength,
            showCount: Item.showCount && Item.showCountItem.showCount,
            showTime: Item.showTime && Item.showTime,
            format: Item.format && Item.format,
            arrayOption: Item.options && Item.options,
            mode: Item.mode && Item.mode,
            valuePropName: Item.valuePropName && Item.valuePropName,
            marksSlider: Item.marksSlider && Item.marksSlider,
            arrayRadio: Item.arrayRadio && Item.arrayRadio,
            groupButton: Item.groupButton && Item.groupButton,
            arrayCheckbox: Item.arrayCheckbox && Item.arrayCheckbox,

            dragger: Item.dragger && Item.dragger,
            namefile: Item.namefile && Item.namefile,
            actionUrl: Item.actionUrl && Item.actionUrl,
            listType: Item.listType && Item.listType,
            tipoFile: Item.tipoFile && Item.tipoFile,
            multipleFile: Item.multipleFile && Item.multipleFile,
            textButton: Item.textButton && Item.textButton,
            antuploadtext: Item.antuploadtext && Item.antuploadtext,
            antuploadhint: Item.antuploadhint && Item.antuploadhint,
          }

        )
      }
      formItem.push(obj)
    });

    // console.log('formItem', formItem)
    // console.log('formItem', formItem.length)
  }

  formItem.length === 0 && ItemsForm();

  return (
    <ConfigProvider locale={idiomaGral}>
      <Spin tip="Loading..." spinning={loading}>
        <Grid container spacing={1}>
          {formItem.map((row, index) =>
            <Grid item xs={12} sm={12} md={12} key={index}>
              <Form.Item
                key={index}
                label={row.label}
                name={row.name}
                rules={row.rules}
                hasFeedback={row.hasFeedback}
                tooltip={row.tooltip}
                extra={row.extra}
                valuePropName={row.valuePropName}
                initialValue={row.initialValue}
              //getValueFromEvent={(e) => normFile(e)}
              >
                {row.name_element}
              </Form.Item>
            </Grid>
          )}
        </Grid>
      </Spin>
    </ConfigProvider>
  );
};

export default FormAntd;