const timer = document.getElementById('timer')

var snDate = new Date('Nov 14, 2019 08:40:00')

function repeatOften() {
    var now = Date.now()

    var distance = snDate - now

    var days = Math.floor(distance / (1000 * 60 * 60 * 24))
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60))
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60))
    var seconds = Math.floor((distance % (1000 * 60)) / 1000)

    var result = days + ':' + hours + ':' + minutes + ':' + seconds

    if(distance < 0) {
        clearInterval(countDown)
        timer.innerHTML = '수능이 안다해를 두려워 한다'
    }

    timer.innerHTML = result
    requestAnimationFrame(repeatOften)
  }

  requestAnimationFrame(repeatOften)