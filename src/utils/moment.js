import moment from 'moment';

const FormatTime = time => {
  return moment(time).format('DD/MM/YYYY');
};

export { FormatTime };
