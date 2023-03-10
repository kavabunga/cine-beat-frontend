export function calculateDuration(minutes) {
  if (typeof minutes == 'number') {
    return (
      (minutes >= 60 ? Math.floor(minutes / 60).toString() + 'ч' : '') +
      (minutes % 60 !== 0 ? ' ' + (minutes % 60).toString() + 'м' : '')
    );
  } else return 'Неизвестно';
}
