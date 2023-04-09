import { DatePicker, Space, ConfigProvider } from 'antd';
import './DatePicker.css';
import dayjs from 'dayjs';
import 'dayjs/locale/ru';
import locale from 'antd/locale/ru_RU';
import {setDate} from '../DateToday';
const date = new Date();
const secondDate = new Date(date - (1000*60*60*24))

const disabledDate = (current) => {
  return current && current < dayjs(secondDate).endOf('day');
};


function DataPicker ({setQueryDate}) {
  const dateFormat = 'DD.MM.YYYY';
  const currentDate = setDate();
    
  function onChange(date, dateString) {
    setQueryDate(dateString);
  };
    
  return (
    <Space direction="vertical">
      <ConfigProvider locale={locale}>
        <DatePicker disabledDate={disabledDate} onChange={onChange} defaultValue={dayjs(currentDate, dateFormat)} format={dateFormat} allowClear={false}/>
      </ConfigProvider>
    </Space>
  )
};

export default DataPicker;
    