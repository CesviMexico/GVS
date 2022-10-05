import React, { useState, useContext} from 'react'
import CrudContext from "../../context/crud/crudContext";

import { Table, Button, Input,  } from 'antd';
import 'antd/dist/antd.css';
import { SearchOutlined,  } from '@ant-design/icons';
import Highlighter from 'react-highlight-words';

import { ConfigProvider } from 'antd';
import es_ES from 'antd/lib/locale/es_ES';

import "moment/locale/es-mx";
import moment from "moment";

const TablaANTD = (props) => {

  const crudContext = useContext(CrudContext)
  const { datasource, guardarDatosAction, editarDatosAction } = crudContext

  const { loading,  size, columnstable, objAcciones} = props
  // funciones de la tabla ////////////////////////////////
  const [searchText, setSearchText] = useState('');
  const [searchedColumn, setSearchedColumn] = useState('');
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
          onPressEnter={() => handleSearch(selectedKeys, confirm, dataIndex)}
          style={{ width: 188, marginBottom: 8, display: 'block' }}
        />
        <Button
          type="primary"
          onClick={() => handleSearch(selectedKeys, confirm, dataIndex)}
          icon={<SearchOutlined />}
          size="small"
          style={{ width: 90, marginRight: 8, }}
        >
          Buscar
        </Button>
        <Button onClick={() => handleReset(clearFilters)} size="small" style={{ width: 90 }}>
          Limpiar
        </Button>
      </div>
    ),
    filterIcon: filtered => <SearchOutlined style={{ color: filtered ? '#1890ff' : undefined }} />,
    onFilter: (value, record) =>
      record[dataIndex]
        ? record[dataIndex].toString().toLowerCase().includes(value.toLowerCase())
        : '',
    onFilterDropdownVisibleChange: visible => {
      if (visible) {
        setTimeout(() => searchInput.select());
      }
    },
    render: text =>
      searchedColumn === dataIndex ? (
        <Highlighter
          highlightStyle={{ backgroundColor: '#ffc069', padding: 0 }}
          searchWords={[searchText]}
          autoEscape
          textToHighlight={text && text.toString()}
        />
      ) : (
        text
      ),
  });
  const handleSearch = (selectedKeys, confirm, dataIndex) => {
    confirm();
    setSearchText(selectedKeys[0])
    setSearchedColumn(dataIndex)

  };
  const handleReset = clearFilters => {
    // ////consolelog('clearFilters',clearFilters)
    clearFilters();
    setSearchText('')
  };

  const [columns] = useState([])
  
  const columnasTabla = () => {
    while (columns.length > 0) {
      columns.pop();
    }
    columnstable.forEach(col => {
      let obj = Object.assign({}, col, getColumnSearchProps(col.key, col.title))
      columns.push(obj)
    });
    columns.push(objAcciones)
  }

   columnasTabla();

  return (
    <>
      <ConfigProvider locale={es_ES}>
        <Table
         columns={columns}
          loading={loading}
          dataSource={datasource}
          size={size}
          tableLayout="auto"  ///auto--fixed                
          //pagination={false}
          //scroll={{ x: 1600 }}
          rowClassName
        />

      </ConfigProvider>
    </>
  );
}

export default TablaANTD;
