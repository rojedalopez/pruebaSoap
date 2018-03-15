var soap = require('soap');
var endpoint = 'http://10.172.52.136:50000/XISOAPAdapter/MessageServlet?senderParty=&senderService=SAP_PIQAS_300&receiverParty=&receiverService=&interface=Material_Despachado_Out&interfaceNamespace=urn%3Auniban%3Atropico%3Aerpdev';
var url = 'prueba.wsdl';
var args = {InPedCompras:'4500014523', InCodProveedor:'108001',	InCodMaterial:'805712', InCodPosicion:'1', 
InCodLote:'B001', InCodItem:'PRECINTO', InValor:'1A123456', InCantidad:'1'};
soap.createClient(url, function(err, client) {
    client.setEndpoint(endpoint);
    client.setSecurity(new soap.BasicAuthSecurity('usrkitsegweb', 'Dllo2014'));
    //console.log(client);
    client.Ingresar(args, function(err, result) {
        if(err){
            console.log(err);
        }
        console.log(result);
    });
});