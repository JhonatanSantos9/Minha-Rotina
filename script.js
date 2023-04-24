




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


function imagemdosgatinhosaleatórias(idImagem) {
    const catImage = document.querySelector('#' + idImagem);
    fetch('https://api.thecatapi.com/v1/images/search')
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            const imageUrl = data[0].url;
            catImage.src = imageUrl;
        })
        .catch(function (error) {
            console.log(error);
        });
}

imagemdosgatinhosaleatórias('catimage1')
imagemdosgatinhosaleatórias('catimage2')
imagemdosgatinhosaleatórias('catimage3')
