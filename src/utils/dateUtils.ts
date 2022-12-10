import dayjs from 'dayjs';

export const getAge = (): number => {
  const birthday = dayjs('12/05/1993');
  const today = dayjs();
  return today.diff(birthday, 'year');
};

export const getYear = (): number => {
  const today = dayjs();
  return today.get('year');
};
