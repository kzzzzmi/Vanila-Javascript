const time = document.querySelector("#time");

function untilChristmas() {
  const today = new Date();
  const christmas = new Date("2021-12-25 00:00");

  const times = christmas.getTime() - today.getTime();

  const untilTime = new Date(times);
  console.log();

  const days = times / 86400000;
  const hours = String(untilTime.getHours()).padStart(2, "0");
  const minutes = String(untilTime.getMinutes()).padStart(2, "0");
  const seconds = String(untilTime.getSeconds()).padStart(2, "0");

  time.innerText = `${parseInt(days)}d ${
    hours < 10 ? `0${parseInt(hours)}` : parseInt(hours)
  }h ${minutes < 10 ? `0${parseInt(minutes)}` : parseInt(minutes)}m ${
    seconds < 10 ? `0${parseInt(seconds)}` : parseInt(seconds)
  }s`;
}

untilChristmas();
setInterval(untilChristmas, 1000);
