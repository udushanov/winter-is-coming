const inner = document.querySelector('.inner')

function timeFormat(time) {
  return time < 10 ? `0${time}` : time
}

let timerID = setInterval(function() {
  const winter = new Date('1 Dec 2022');
  const now = new Date();
  const differenceDate = winter - now;
  const totalSeconds = differenceDate / 1000;
  const days = Math.floor(totalSeconds / (3600 *24));
  const hours = Math.floor((totalSeconds/3600) % 24);
  const minutes = Math.floor((totalSeconds/60) % 60);
  const seconds = Math.floor(totalSeconds % 60);

  const day = document.querySelector('.day');
  const hour = document.querySelector('.hour');
  const minute = document.querySelector('.minute');
  const second = document.querySelector('.second');

  day.innerHTML = days;
  hour.innerHTML = timeFormat(hours);
  minute.innerHTML = timeFormat(minutes);
  second.innerHTML = timeFormat(seconds);

  if (differenceDate < 0) {
    clearInterval(timerID);
    inner.innerHTML = 'Expired'
  }
}, 1000);










