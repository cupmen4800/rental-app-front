import dayjs from 'dayjs';
import utc from 'dayjs/plugin/utc';
import timezone from 'dayjs/plugin/timezone';

const Date = (props: string) => {
  dayjs.extend(utc);
  dayjs.extend(timezone);

  return dayjs.utc(props).tz('Asia/Tokyo').format('YYYY-MM-DD');
};

export default Date;
