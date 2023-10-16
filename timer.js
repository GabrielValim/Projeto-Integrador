function updateTimer() {
    future  = Date.parse("October 30, 2023 11:30:00");
    now     = new Date();
    diff    = future - now;
  
    days  = Math.floor( diff / (1000*60*60*24) );
    hours = Math.floor( diff / (1000*60*60) );
    mins  = Math.floor( diff / (1000*60) );
    secs  = Math.floor( diff / 1000 );
  
    d = days;
    h = hours - days  * 24;
    m = mins  - hours * 60;
    s = secs  - mins  * 60;
  
    document.getElementById("timer")
      .innerHTML =
        '<div class="countdown__item">' + d + '<span class="countdown__span">dias</span></div>' +
        '<div class="countdown__item">' + h + '<span class="countdown__span">horas</span></div>' +
        '<div class="countdown__item">' + m + '<span class="countdown__span">minutos</span></div>' +
        '<div class="countdown__item">' + s + '<span class="countdown__span">segundos</span></div>' ;
  }
  setInterval('updateTimer()', 1000 );
  
