// export default function (yearOrDate, month = -1) {
const getLastDate = (yearOrDate, month = -1) => {
  const isReceiveDate = typeof yearOrDate === 'object';
  const dt = isReceiveDate ? yearOrDate : new Date();
  if (!isReceiveDate) dt.setFullYear(yearOrDate);
  if (month > 0 && month <= 12) dt.setMonth(month - 1);

  dt.setDate(1);
  dt.setMonth(dt.getMonth() + 1);
  dt.setDate(0);
  return dt.getDate();
};

export { getLastDate };
