const contador = document.getElementById('count');

var date = new Date('Apr 10 2025 22:00:00 GMT-0300').getTime();
// console.log(date);



setInterval (function() {
    
    var now = new Date().getTime();
    // console.log(now);

    var distance = date - now;
    // console.log(distance);

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(distance % (1000 * 60 * 60 * 24) / (1000  *  60 * 60));

    contador.innerHTML = days +  ' ' + 'Dias'+ ' ' + hours + ' ' + 'Horas';
}, 1000);

