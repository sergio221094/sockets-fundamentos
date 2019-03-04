var socket = io();

socket.on('connect', function() {
    console.log('Conectado al servidor.');
});

socket.on('disconnect', function() {
    console.log('Perdimos conexión con el servidor.');
});

socket.emit('enviarMensaje', {
    usuario: 'Sergio',
    mensaje: 'Hola mundo'
}, function(resp) {
    console.log(resp);
});

socket.on('enviarMensaje', function(mensaje) {
    console.log('Servidor:', mensaje);
})