var soap = require('soap');
var url = 'http://infocarga.net/requestInfocarga.asmx?WSDL';
var args = {latitud: '11.0169521', longitud: '-74.8097702'};
soap.createClient(url, function(err, client) {
    console.log(client);
    /*client.DevuelveUbicacion(args, function(err, result) {
        console.log(result);
    });*/
});