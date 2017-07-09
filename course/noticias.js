// importando lib http
var http = require('http');  

/* criar um servidor
 * @param  requisicao = realiza uma requisicao
 * @param  resposta = resposta do serviidor
 */

var server = http.createServer(function (requisicao,resposta){
	resposta.end("<html><body>Portal de noticias</body></html>");
});

// setar porta do servidor
server.listen(3000);