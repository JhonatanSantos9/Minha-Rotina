




function time(){
    var hora = window.document.querySelector('p#time')
    var newdate = new Date()
    hora.innerHTML = new Intl.DateTimeFormat('pt-BR', {
        timeStyle:"medium",
    }).format(newdate)
    setTimeout('time()', 500)
}

function periododia(){
    var periododia = window.document.querySelector('p#dayPeriod')
    var newdate = new Date()
    periododia.innerHTML = new Intl.DateTimeFormat('pt-BR', {
        dayPeriod:"long",
    }).format(newdate)
    setTimeout('periododia()', 500)
}


var filmeseseries = document.getElementsByClassName('filmes-series-item')
    filmeseseries.addEventListener('mouseenter', hoverfilmeseseries)

function hoverfilmeseseries(){
    filmeseseries.style.
}