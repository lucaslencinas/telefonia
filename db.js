var mysql = require('mysql');

var pool  = mysql.createPool({
  connectionLimit : 10,
  host     : 'us-cdbr-iron-east-03.cleardb.net',
  user     : 'b907d8d6e3ab57',
  password : '06e49fb8',
  database : 'heroku_74c23f2458ff8ba'
});

exports.getConnection = function(callback) {
    pool.getConnection(function(err, connection) {
        callback(err, connection);
    });
};

exports.buildAltaInternoQueryString = function(pedido) {
  var query = "INSERT INTO altainterno (idIBM, fullName, pais, estado, fManager, sManager, idFManager, idSManager, edificio, piso, departamento, intReferencia, aparato, voicemail, justificacion, fechaInicio, nivelAprobacion)";
  query += " VALUES ('" + pedido.idIBM + "','"  + pedido.fullName + "','"  + pedido.pais  + "','"  + 'pendienteGerente' + "','"  +  pedido.gerente1 + "','";
  query += pedido.gerente2 + "','" + pedido.idGerente1 + "','" + pedido.idGerente2 + "','" + pedido.edificio + "','"  + pedido.piso + "','" + pedido.departamento + "',"  + pedido.interno + ",'";
  query += (pedido.requiereAparato? "SI":"NO") + "','"  + (pedido.requiereVoiceMail? "SI":"NO") + "','" + pedido.justificacion + "', '" + pedido.fechaInicio + "', " + 1 + ")";
  console.log(query);
  return query;
};


exports.buildIbmLoginQueryString = function(pedido) {
  var query = "SELECT  idIBM, fullName, pais, idFManager, idSManager, departamento";
  query += " FROM ibm_data ";
  query +=  "WHERE (idIBM = '" + pedido.idIBM + "' AND password = '" + pedido.password + "')";
  console.log(query);
  return query;
};

exports.buildGetServiciosDeUsuarioQueryString = function(tipoDeServicio, idUsuario){
	var typesWhereClause = {
			"aprobados":"AND estado = 'aprobado')",
			"pendientes":"AND (estado = 'pendienteTelefoniaAdmin' OR estado = 'pendienteGerente' OR estado = 'pendienteTelefoniaLocal'))",
			"rechazados":"AND estado = 'rechazado')",
			"todos": ")"
		};

	var query = "SELECT idIBM, fullName, pais, ticket, estado, fechaInicio, fManager, sManager, idFManager, idSManager, edificio, piso, intReferencia, aparato, voicemail, justificacion ";
  query += "FROM  altainterno ";
  query += "WHERE (idIBM = '" + idUsuario + "' ";/*le falta el cierre del parentesis, lo agrega la linea de abajo*/
	query += typesWhereClause[tipoDeServicio];
  console.log(query);
  return query;
};
