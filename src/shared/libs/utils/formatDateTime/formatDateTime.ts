export function formatDateTime(dateTimeString: string) {
  const currentDate = new Date();
  const targetDate = new Date(dateTimeString);

  const timeDiff = Math.abs(targetDate.getTime() - currentDate.getTime());
  const hoursDiff = Math.floor(timeDiff / (1000 * 60 * 60));

  const formattedDay =
    targetDate.getDate() < 10
      ? `0${targetDate.getDate()}`
      : targetDate.getDate();
  const formattedMonth =
    targetDate.getMonth() + 1 < 10
      ? `0${targetDate.getMonth() + 1}`
      : targetDate.getMonth() + 1;

  const formattedDate = `${formattedDay}.${formattedMonth}.${targetDate.getFullYear()} ${targetDate.getHours()}:${
    targetDate.getMinutes() < 10 ? '0' : ''
  }${targetDate.getMinutes()}`;

  if (hoursDiff >= 24) {
    return formattedDate;
  } else {
    const remainingHours = 24 - hoursDiff;
    return `${remainingHours} hours left`;
  }
}
