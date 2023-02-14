import dayjs from 'dayjs';

/**
 * 判空
 * @param val
 * @returns
 */
export const isEmpty = (val: any): boolean =>
  val === undefined || val === null || (typeof val === 'string' && val.trim().length === 0);

/**
 * 非空
 * @param val
 * @returns
 */
export const isNotEmpty = (val: any): boolean => !isEmpty(val);

/**
 * 格式化时间
 * @param date
 * @param formatStr
 * @returns
 */
export const formateDate = (date: any, formatStr?: string) => {
  try {
    return dayjs(date).format(formatStr ?? 'YYYY-MM-DD');
  } catch (error) {}
  return '';
};
