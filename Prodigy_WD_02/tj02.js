 let seconds = 0;
    let timer = null;

    function updateTime() {
      seconds++;
      let hrs = Math.floor(seconds / 3600);
      let mins = Math.floor((seconds % 3600) / 60);
      let secs = seconds % 60;

      let h = String(hrs).padStart(2, '0');
      let m = String(mins).padStart(2, '0');
      let s = String(secs).padStart(2, '0');

      document.getElementById("display").textContent = `${h}:${m}:${s}`;
    }

    function start() {
      if (timer === null) {
        timer = setInterval(updateTime, 1000);
      }
    }

    function pause() {
      clearInterval(timer);
      timer = null;
    }

    function reset() {
      clearInterval(timer);
      timer = null;
      seconds = 0;
      document.getElementById("display").textContent = "00:00:00";
    }