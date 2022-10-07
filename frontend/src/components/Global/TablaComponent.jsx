import React, { useState, useContext } from 'react'
import ThemeContext from '../../context/ThemContext'

import {
  ConfigProvider,
  Upload, Table, Button, Input, Tooltip, Popconfirm, Select,
  Typography as TypographyAntd, DatePicker, Image, Badge,
} from 'antd';
import { SyncOutlined } from '@ant-design/icons';

import 'antd/dist/antd.css';

import Highlighter from 'react-highlight-words';

//MUI
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';

//iconos 
import { Icon } from '@iconify/react';

//COMPONENTES
import BadgeMUIImg from '../Global/BadgeComponent'
import { ModdalANTD } from '../Global/ModalComponent';
import CardMUI from '../Global/CardComponent';

// FUNCIONES
import separator, { formatDate, formatDateTime, ExportToExcel } from './funciones'


//colores
import { green, red, yellow } from '@mui/material/colors';


import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';


const { Link } = TypographyAntd;
const { Option } = Select;

const TablaANTD = (props) => {

  // Hook y funciones o metodos Globales
  const themeContext = useContext(ThemeContext)
  const { backgroundColor, colorIcon, sizeIconTable, sizeIcon, colorTable, idiomaGral } = themeContext

  const {
    loading,
    loadingAdd,
    datasource,

    pagination,
    pageSize,
    simplepage,
    positionBottom,
    positionTop,

    size,
    bordered,
    scrollX,
    scrollY,
    tableLayout,

    Title,
    IconAvatar,

    columnsTable,
    OnClickAction,
    ActualizaTabla,

    ExportaExcel,
    Agregar,
    AgregarIcon,
    ExportaExcelOtro,

    Sumary,
    tbSimple

  } = props


  // funciones de la tabla ////////////////////////////////
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
  const [searchedColumnT, setSearchedColumnT] = useState('');

  let searchInput

  const getColumnSearchProps = (dataIndex, title) => ({
    filterDropdown: ({ setSelectedKeys, selectedKeys, confirm, clearFilters }) => (
      <div style={{ padding: 8 }}>
        <Input
          ref={node => {
            searchInput = node;
          }}
          placeholder={`Buscar en ${title}`}
          value={selectedKeys[0]}
          onChange={e => setSelectedKeys(e.target.value ? [e.target.value] : [])}
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex, title)}
          style={{ width: 278, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex, title)}
          icon={
            <Icon icon={'line-md:search'} style={{ fontSize: 12 }} />
            // <SearchOutlined />
          }
          size="small"
          style={{ width: 90, marginRight: 8, }}
        >
          Buscar
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90, marginRight: 8, }}>
          Limpiar
        </Button>
        <Button
          //type="link"
          style={{ width: 90 }}
          size="small"
          onClick={() => {
            confirm({
              closeDropdown: false
            });
            setSearchText(selectedKeys[0] && selectedKeys[0].toUpperCase());
            setSearchedColumn(dataIndex);
            setSearchedColumnT(title.toUpperCase());
          }}
        >
          Restaurar
        </Button>
      </div>
    ),
    filterIcon: filtered => <Icon icon={'line-md:search'} style={{ fontSize: 15, color: filtered ? backgroundColor : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex] && record[dataIndex].toString().toLowerCase().includes(value.toLowerCase()),
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
        //setTimeout(() => searchInput.current?.select(), 100);
      }
    },
    render: (text) =>
      searchedColumn === dataIndex ? (
        <>
          <Highlighter
            highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
            searchWords={[searchText]}
            autoEscape
            textToHighlight={text ? text.toString() : ''}
          />
        </>
      ) : (text),
  });
  const handleSearch = (selectedKeys, confirm, dataIndex, title) => {
    confirm();
    setSearchText(selectedKeys[0] && selectedKeys[0].toUpperCase())
    setSearchedColumn(dataIndex)
    setSearchedColumnT(title.toUpperCase());

  };
  const handleReset = clearFilters => {
    // ////consolelog('clearFilters',clearFilters)
    clearFilters();
    setSearchText('')
  };


  //Función para mostrar las acciones de cada fila -> editar o eliminar

  const objNo = () => ({
    render: (text, record, index) => (index + 1),
  })

  const action = (row, key, IconAction, titleMSG) => {
    return (
      <>
        <Tooltip title={key} key={key}>
          {titleMSG ?
            <Popconfirm
              key={key}
              title={titleMSG}
              //icon={<Icon icon={IconAction} style={{color: backgroundColor}} />}
              okText="Si"
              cancelText="No"
              onConfirm={() => OnClickAction(row, key)}
            >
              {/* <Icon icon={swicthIcons[IconAction]} */}
              <Icon icon={IconAction} key={key}
                style={{
                  cursor: "pointer",
                  fontSize: sizeIcon,
                  marginLeft: "5px",
                  color: backgroundColor
                }}
              />
            </Popconfirm>
            :
            <Icon icon={IconAction} key={key}
              style={{
                cursor: "pointer",
                fontSize: sizeIcon,
                marginLeft: "5px",
                color: backgroundColor
              }}
              onClick={() => OnClickAction(row, key)}
            />
          }
        </Tooltip>
      </>
    );
  };

  const objAcciones = (key, IconAction, titleMSG,) => ({
    render: (row, index) => action(row, key, IconAction, titleMSG, index),
  })

  // ver imagen
  const [visibleIMG, setVisibleIMG] = useState(false);
  const [srcIMG, setSrcIMG] = useState('');
  const OnClickVerImg = (row, key, srcIMG) => {
    if (srcIMG) {
      setVisibleIMG(true)
      setSrcIMG(row.src)
    } else {
      OnClickAction(row, key)
    }
  }


  const VerImg = (row, key, IconAction, titleIMG, srcIMG) => {
    return (
      <>
        <Tooltip title={titleIMG}>
          <Icon icon={IconAction}
            style={{
              cursor: "pointer",
              fontSize: sizeIcon,
              marginLeft: "5px",
              color: backgroundColor
            }}
            onClick={() => OnClickVerImg(row, key, srcIMG)}
          />
        </Tooltip>
      </>
    );
  };


  const objImg = (key, IconAction, titleIMG, srcIMG) => ({
    render: (row) => VerImg(row, key, IconAction, titleIMG, srcIMG),
  })

  // upload
  const upload = (row, key, IconUploadC, IconUploadD, titleMSGC, titleMSGD, tipoFile, multipleFile, listType, actionUrl) => {

    return (
      row.path ?
        (<Tooltip title={titleMSGD}>
          <Link href={row.path} target="_blank">
            {/* <Icon icon={swicthIcons[IconUploadD]} */}
            <Icon icon={IconUploadD}
              style={{
                cursor: "pointer",
                fontSize: sizeIcon,
                marginLeft: "5px",
                color: backgroundColor
              }}
            />
          </Link>
        </Tooltip>
        ) :
        (<Upload
          key={key}
          name='file'
          accept={tipoFile}
          multiple={multipleFile}
          action={actionUrl} //"https://www.mocky.io/v2/5cc8019d300000980a055e76"
          onChange={(e) => OnClickAction(row, key, e, 'change')}
          onRemove={(e) => OnClickAction(row, key, e, 'remove')}
          defaultFileList={row.defaultFileList}
          listType={listType}
          onPreview={listType !== 'text' && handlePreview}
        >
          <Tooltip title={titleMSGC}>
            <Icon icon={IconUploadC}
              style={{
                cursor: "pointer",
                fontSize: sizeIcon,
                marginLeft: "5px",
                color: backgroundColor
              }}
            />
          </Tooltip>
        </Upload>)

    );
  };

  const objUploads = (key, IconUploadC, IconUploadD, titleMSGC, titleMSGD, tipoFile, multipleFile, listType, actionUrl) => ({
    render: (row) => upload(row, key, IconUploadC, IconUploadD, titleMSGC, titleMSGD, tipoFile, multipleFile, listType, actionUrl),
  })

  //DatePicker
  const datePicker = (row, key, IconAction, placeholder, format, showTime) => {
    return (
      <>
        <DatePicker
          key={row.id_asignacion}
          placeholder={placeholder}
          //disabledDate={(current) => disabledDateinspeccion(current, moment(row.asignado, "DD/MM/YYYY"))}
          //defaultValue={row.fecha_inspeccion && moment(row.fecha_inspeccion, "DD/MM/YYYY HH:mm:ss")}
          format={showTime ? format + ' ' + showTime : format}
          showTime={showTime}
          //showTime={ {showTime:!showTime, defaultValue: moment(row.fecha_inspeccion, 'HH:mm:ss') }}
          onChange={(value, dateString) => OnClickAction(row, key, value, dateString)}
        />
      </>
    );
  };

  const objDatePicker = (key, IconAction, placeholder, format, showTime) => ({
    render: (row) => datePicker(row, key, IconAction, placeholder, format, showTime),
  })

  //input
  const input = (row, key, IconAction, placeholder,) => {
    return (
      <>
        <Input
          key={row.id_asignacion}
          onBlur={(e) => OnClickAction(row, key, e.target.value)}
          placeholder={placeholder}
          // maxLength={25}
          defaultValue={row.monto_presupuesto}
        />
      </>
    );
  };

  const objInput = (key, IconAction, placeholder,) => ({
    render: (row) => input(row, key, IconAction, placeholder,),
  })

  //textArea
  const textArea = (row, key, IconAction, placeholder, height) => {
    return (
      <>
        <Input.TextArea
          //showCount
          key={row.id_asignacion}
          onBlur={(e) => OnClickAction(row, key, e.target.value)}
          placeholder={placeholder}
          //maxLength={100}
          defaultValue={row.monto_presupuesto}
          style={{
            height: height,
          }}
        />
      </>
    );
  };

  const objTextArea = (key, IconAction, placeholder, height) => ({
    render: (row) => textArea(row, key, IconAction, placeholder, height),
  })

  //Select
  const Combo = (row, key, IconAction, placeholder, arrayOption, index, width) => {
    return (
      <>
        <Select
          style={{
            width: width,
          }}
          key={index}
          allowClear
          showSearch
          placeholder={placeholder}
          optionFilterProp="children"
          onChange={(e) => OnClickAction(row, key, e, index)}
          defaultValue={row.SelectValue}
          filterOption={(input, option) => option.children.toLowerCase().includes(input.toLowerCase())}
        >
          {arrayOption.map((dato_row, index) =>
            <Option key={index} value={dato_row.value} >{dato_row.text}</Option>
          )}

        </Select>
      </>
    );
  };

  const objSelect = (key, IconAction, placeholder, arrayOption, width) => ({
    render: (text, record, index) => Combo(record, key, IconAction, placeholder, arrayOption, index, width),
  })



  //ordenamiento de las columnas
  const objSorterNumber = (dataIndex) => ({
    sorter: (a, b) => a[dataIndex] - b[dataIndex],
  })

  const objSorterString = (dataIndex) => ({
    sorter: (a, b) => a[dataIndex] < b[dataIndex],
  })

  //filtrado de la columna
  const filtersOption = (dataIndex) => ({
    onFilter: (value, record) => record[dataIndex] && record[dataIndex].startsWith(value),
  })

  //Formato de datos de la columna
  const tipoMonedaMiles = (prefi) => ({
    render: (row) => prefi + separator(row + ""),
  })

  const tipoFecha = () => ({
    render: (row) => formatDate(row),
  })

  const tipoFechaTime = () => ({
    render: (row) => formatDateTime(row),
  })

  //ellipsis
  const funcEllipsis = () => ({
    ellipsis: {
      showTitle: false,
    },
    render: (row) => (
      <Tooltip placement="topLeft" title={row}>
        {row}
      </Tooltip>
    ),
  })

  //Badge % 100
  const funcBadge100 = () => ({
    render: (row) => (

      row === 100 ?
        <Badge
          className="site-badge-count-109"
          count={row + ' %'}
          style={{
            backgroundColor: green[500],
          }}
          overflowCount={100}
        />
        : row === 0 ?
          <Badge
            className="site-badge-count-109"
            count={row + ' %'}
            style={{
              backgroundColor: red[500],
            }}
            overflowCount={100}
          />
          :
          <Badge
            className="site-badge-count-109"
            count={row + ' %'}
            style={{
              backgroundColor: yellow[600],
            }}
            overflowCount={100}
          />

    ),
  })



  //CREA COLUMNAS 
  const columns = []
  const columnasTabla = () => {
    while (columns.length > 0) {
      columns.pop();
    }
    columnsTable && columnsTable.forEach(col => {
      let obj = Object.assign(
        {},
        col,
        col.no && objNo(),
        col.actions && objAcciones(col.key, col.icon, col.titleMSG,),

        col.img && objImg(col.key, col.icon, col.titleIMG, col.srcIMG),

        col.datePicker && objDatePicker(col.key, col.icon, col.placeholder, col.format, col.showTime),
        col.Input && objInput(col.key, col.icon, col.placeholder,),
        col.textArea && objTextArea(col.key, col.icon, col.placeholder, col.height),
        col.Select && objSelect(col.key, col.icon, col.placeholder, col.arrayOption, col.width),
        col.upload && objUploads(
          col.key,
          col.iconC,
          col.iconD,
          col.titleMSGC,
          col.titleMSGD,
          col.tipoFile,
          col.multipleFile,
          col.listType,
          col.actionUrl,
        ),

        col.busqueda && getColumnSearchProps(col.key, col.title),
        col.orderNumber && objSorterNumber(col.dataIndex),
        col.orderString && objSorterString(col.dataIndex),
        col.orderDouble && objSorterNumber(col.dataIndex),
        col.orderDate && objSorterString(col.dataIndex),
        col.filters && filtersOption(col.dataIndex),

        col.tipoMoneda && tipoMonedaMiles(col.tipoMoneda),
        col.tipoMiles && tipoMonedaMiles(""),
        col.tipoFecha && tipoFecha(),
        col.tipoFechaTime && tipoFechaTime(),

        col.ellipsis && funcEllipsis(),
        col.badge100 && funcBadge100(),

      )
      columns.push(obj)
    });
  }

  columnasTabla();

  // actualiza el resultado del onchange
  const [noChange, setNoChange] = useState(0);
  const onChange = (pagination, filters, sorter, extra,) => {
    setNoChange(extra.currentDataSource.length)
  };

  //vista cuando son foto
  const [previewVisible, setPreviewVisible] = useState(false);
  const [previewImage, setPreviewImage] = useState('');
  const [previewTitle, setPreviewTitle] = useState('');

  const getBase64 = (file) =>
    new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);

      reader.onload = () => resolve(reader.result);

      reader.onerror = (error) => reject(error);
    });

  const handlePreview = async (file) => {
    if (!file.url && !file.preview) {
      file.preview = await getBase64(file.originFileObj);
    }

    setPreviewImage(file.url || file.preview);
    setPreviewVisible(true);
    setPreviewTitle(file.name || file.url.substring(file.url.lastIndexOf('/') + 1));
  };

  const handleCancel = () => setPreviewVisible(false);


  //EXPORTA A EXCEL
  const ExportToExcelButton = () => {

    ExportaExcelOtro ?
      ExportToExcel({ datasource: ExportaExcelOtro, Title: Title })
      :
      ExportToExcel({ datasource: datasource, Title: Title })
  }


  const TableCP = () => {
    return (
      <Table
        //className={}
        loading={loading}
        dataSource={datasource}
        //onChange={onChange}
        onChange={onChange}
        bordered={bordered}
        size={size}
        tableLayout={tableLayout} //"fixed" //- | auto | fixed

        pagination={
          pagination &&
          {
            responsive: true,
            pageSize: pageSize,
            simple: simplepage,
            position: [positionTop, positionBottom],
            // topLeft |topCenter |topRight| bottomLeft |bottomCenter|bottomRight
          }
        }

        scroll={{ x: scrollX, y: scrollY }}
        columns={columns}

        title={() =>
          noChange > 0 && noChange !== datasource.length ?
            <Typography
              variant="body2"
              style={{ color: colorTable }}
            ><b style={{ fontSize: '17px' }} > {noChange}</b>{' registros de '} <b> {searchText}</b>{' en la columna '}<b>{searchedColumnT}</b>
            </Typography>
            : ""}

        summary={(pageData) => Sumary && Sumary(pageData)}
      />
    )
  }

  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;

  return (
    <>
      <ConfigProvider locale={idiomaGral}>

        {!tbSimple ?
          <CardMUI
            styleCardHeader={{ backgroundColor: colorTable }}
            title={
              <Typography
                variant="h6"
                component="div"
                gutterBottom
                style={{ color: colorIcon }}
              >  {Title}
              </Typography>
            }
            avatarCardHeader={
              <>
                <BadgeMUIImg
                  sizeIcon={sizeIconTable}
                  icon={IconAvatar}
                  badgeContent={datasource && datasource.length}
                  max={9999}
                />
              </>
            }

            actionsCardHeader={
              <>
                {Agregar &&
                  <Tooltip title="Agregar">
                    <IconButton aria-label="settings"
                      onClick={() => Agregar()}
                      disabled={loadingAdd}
                    >

                      {loadingAdd ?
                        <Spin indicator={antIcon} spinning={true} />
                        :
                        <Icon icon={AgregarIcon ? AgregarIcon : "clarity:add-line"} style={{ fontSize: sizeIcon, color: colorIcon }} />
                      }
                    </IconButton>
                  </Tooltip>
                }

                {ExportaExcel &&
                  // < a href={currenturlapi + "ExportaExcel/" + urlexportaExcel} target="_blank" >
                  <IconButton aria-label="settings" onClick={() => ExportToExcelButton()}>
                    <Tooltip title={"Exportar a Excel"} >
                      <Icon icon={"mdi:microsoft-excel"} style={{ fontSize: sizeIcon, color: colorIcon }} />
                    </Tooltip>
                  </IconButton>
                  // </a>
                }


                {ActualizaTabla &&
                  <Tooltip title="Actualizar tabla">
                    <IconButton aria-label="settings"
                      onClick={() => ActualizaTabla()}
                    >
                      {/* <Icon icon={"mdi:table-refresh"} style={{ fontSize: sizeIcon, color: colorIcon }} /> */}
                      <SyncOutlined spin={loading}
                        style={{ fontSize: sizeIcon, color: colorIcon }}
                      />

                    </IconButton>
                  </Tooltip>
                }


              </>
            }
          >
            <div style={{ position: "relative", overflow: "hidden", }}>
              <TableCP />
              {props.children}
            </div>
          </CardMUI>
          : <TableCP />
        }



        <ModdalANTD
          visible={previewVisible}
          centered={true}
          title={previewTitle}
          footer={null}
          onCancel={handleCancel}>
          <img
            alt="example"
            style={{
              width: '100%',
            }}
            src={previewImage}
          />
        </ModdalANTD>


        {/* VER IMAGEN DE TABLA */}
        <Image
          width={200}
          style={{
            display: 'none',
          }}
          preview={{
            visible: visibleIMG,
            src: srcIMG,
            onVisibleChange: (value) => {
              setVisibleIMG(value);
            },
          }}
        />

      </ConfigProvider >
    </>
  );
}

export default TablaANTD;
