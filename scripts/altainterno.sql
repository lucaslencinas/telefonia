CREATE TABLE `altainterno` (
  `idIBM` varchar(6) DEFAULT NULL,
  `fullName` varchar(40) DEFAULT NULL,
  `ticket` mediumint(9) NOT NULL AUTO_INCREMENT,
  `servicio` varchar(30) DEFAULT NULL,
  `nivelAprobacion` int(11) DEFAULT NULL,
  `tipo` varchar(20) DEFAULT NULL,
  `pais` varchar(20) DEFAULT NULL,
  `departamento` varchar(20) DEFAULT NULL,
  `estado` varchar(30) DEFAULT NULL,
  `idFManager` varchar(6) DEFAULT NULL,
  `fManager` varchar(30) DEFAULT NULL,
  `idSManager` varchar(6) DEFAULT NULL,
  `sManager` varchar(30) DEFAULT NULL,
  `fechaInicio` datetime DEFAULT NULL,
  `fechaFManager` datetime DEFAULT NULL,
  `fechaSManager` datetime DEFAULT NULL,
  `fechaTelefoniaLocal` datetime DEFAULT NULL,
  `fechaTelefoniaAdmin` datetime DEFAULT NULL,
  `fechaCerrado` datetime DEFAULT NULL,
  `edificio` varchar(20) DEFAULT NULL,
  `piso` varchar(20) DEFAULT NULL,
  `intReferencia` varchar(11) DEFAULT NULL,
  `aparato` varchar(2) DEFAULT NULL,
  `voicemail` varchar(2) DEFAULT NULL,
  `discado` varchar(50) DEFAULT NULL,
  `justificacion` varchar(200) DEFAULT NULL,
  `interno` int(11) DEFAULT NULL,
  `macAddress` varchar(20) DEFAULT NULL,
  `marca` varchar(20) DEFAULT NULL,
  `modelo` varchar(30) DEFAULT NULL,
  `serie` varchar(20) DEFAULT NULL,
  `motivoFManager` varchar(100) DEFAULT NULL,
  `motivoSManager` varchar(100) DEFAULT NULL,
  `motivoTelefoniaLocal` varchar(100) DEFAULT NULL,
  `motivoTelefoniaAdmin` varchar(100) DEFAULT NULL,
  CONSTRAINT chk_estado CHECK (`estado` IN ('rechazado', 'pendienteGerente', 'pendienteTelefoniaLocal', 'pendienteTelefoniaAdmin', 'aprobado')),
  PRIMARY KEY (`ticket`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=latin1;
