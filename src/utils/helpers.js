export function calculateDuration(minutes) {
  if (typeof minutes == 'number') {
    return (
      (minutes >= 60 ? Math.floor(minutes / 60).toString() + 'ч' : '') +
      (minutes % 60 !== 0 ? ' ' + (minutes % 60).toString() + 'м' : '')
    );
  } else return 'Неизвестно';
}

export function filterOnRequest(request, data) {
  const val = request.toLowerCase();
  const result = data.filter(
    (movie) =>
      movie.country.toLowerCase().includes(val) ||
      movie.description.toLowerCase().includes(val) ||
      movie.director.toLowerCase().includes(val) ||
      movie.nameEN.toLowerCase().includes(val) ||
      movie.nameRU.toLowerCase().includes(val) ||
      movie.year.toLowerCase().includes(val)
  );
  return result;
}

export function filterOnDuration(flag, data) {
  const result = data.filter((movie) => flag || movie.duration > 40);
  return result;
}
