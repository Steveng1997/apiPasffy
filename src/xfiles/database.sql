CREATE DATABASE pasffy;

USE pasffy;

-- Encargada o Usuarios
CREATE TABLE encargada(
    activo BOOLEAN,
    bebida INT(4),
    bebidaTerap INT(50),
    fijoDia INT(4),
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    nombre VARCHAR(80),
    otros INT(4),
    pass VARCHAR(30),
    propina INT(4),
    rol VARCHAR(30),
    servicio INT(4),
    tabaco INT(4),
    usuario VARCHAR(80),
    vitamina INT(4)
);

DESCRIBE encargada;

-- Terapeutas
CREATE TABLE terapeuta(
    activo BOOLEAN,
    bebida INT(4),
    bebidaTerap INT(50),
    fechaEnd VARCHAR(30),
    horaEnd VARCHAR(30),
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    minuto INT(50),
    nombre VARCHAR(30),
    otros VARCHAR(30),
    propina VARCHAR(30),
    salida VARCHAR(30),
    servicio INT(4),
    tabaco VARCHAR(30),
    vitamina VARCHAR(30)
);

DESCRIBE terapeuta;

-- Servicios
    CREATE TABLE servicio(
        bebidas INT(50),
        bebidaTerap INT(50),
        bizuEncarg BOOLEAN,
        bizuDriverTaxi BOOLEAN,
        bizuPiso1 BOOLEAN,
        bizuPiso2 BOOLEAN,
        bizuTerap BOOLEAN,
        cierre BOOLEAN,
        cliente VARCHAR(30),
        currentDate VARCHAR(100),
        editar BOOLEAN,
        efectEncarg BOOLEAN,
        efectDriverTaxi BOOLEAN,
        efectPiso1 BOOLEAN,
        efectPiso2 BOOLEAN,
        efectTerap BOOLEAN,
        encargada VARCHAR(30),
        fecha VARCHAR(30),
        fechaFin VARCHAR(30),
        fechaHoyInicio VARCHAR(30),
        formaPago VARCHAR(500),
        horaEnd VARCHAR(30),
        horaStart VARCHAR(30),
        id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
        idCierre INT(11),
        idEncargada VARCHAR(100),
        idTerapeuta VARCHAR(100),
        idUnico VARCHAR(500),
        liquidadoEncargada BOOLEAN,
        liquidadoTerapeuta BOOLEAN,
        minuto INT(50),
        nota VARCHAR(100),
        numberEncarg INT(50),
        numberTaxi INT(50),
        numberPiso1 INT(50),
        numberPiso2 INT(50),
        numberTerap INT(50),
        taxista INT(50),
        taxi INT (50),
        propina INT(50),
        salida VARCHAR(50),
        servicio INT(50),
        tabaco INT(50),
        tarjEncarg BOOLEAN,
        tarjDriverTaxi BOOLEAN,
        tarjPiso1 BOOLEAN,
        tarjPiso2 BOOLEAN,
        tarjTerap BOOLEAN,
        terapeuta VARCHAR(30),
        totalServicio INT(50),
        transEncarg BOOLEAN,
        transDriverTaxi BOOLEAN,
        transPiso1 BOOLEAN,
        transPiso2 BOOLEAN,
        transTerap BOOLEAN,
        valueBizuEncargada INT(50),
        valueBizuTerapeuta INT(50),
        valueBizum INT(50),
        valueEfectEncargada INT(50),
        valueEfectTerapeuta INT(50),
        valueEfectivo INT(50),
        valuePiso1Bizum INT(50),
        valuePiso1Efectivo INT(50),
        valuePiso1Tarjeta INT(50),
        valuePiso1Transaccion INT(50),
        valuePiso2Bizum INT(50),
        valuePiso2Efectivo INT(50),
        valuePiso2Tarjeta INT(50),
        valuePiso2Transaccion INT(50),
        valueTarjeEncargada INT(50),
        valueTarjeTerapeuta INT(50),
        valueTarjeta INT(50),
        valueTrans INT(50),
        valueTransEncargada INT(50),
        valueTransTerapeuta INT(50),
        vitaminas INT(50)
    );

DESCRIBE servicio;

-- Cierre
CREATE TABLE cierre(
    bizum INT(50),
    currentDate VARCHAR(100),
    efectivo INT(50),
    encargada VARCHAR(30),
    fechaDesde VARCHAR(30),
    fechaHasta VARCHAR(30),
    horaDesde VARCHAR(30),
    horaHasta VARCHAR(30),
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idCierre INT(11),
    tarjeta INT(50),
    total INT(50),
    transaccion INT(50),
    tratamiento INT(50)
);

DESCRIBE cierre;

-- Liquidacion Terapeuta
CREATE TABLE liquidacionesTerapeuta(
    createdDate VARCHAR(40),
    currentDate VARCHAR(100),    
    desdeFechaLiquidado VARCHAR(30),
    desdeHoraLiquidado VARCHAR(30),
    encargada VARCHAR(30),
    hastaFechaLiquidado VARCHAR(30),
    hastaHoraLiquidado VARCHAR(30),    
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idUnico VARCHAR(100),
    idTerapeuta VARCHAR(100),
    importe INT(50),
    regularizacion varchar(250),
    terapeuta VARCHAR(30),
    tratamiento INT(50)
    valueRegularizacion INT(10),
);

DESCRIBE liquidacionesTerapeuta;

-- Liquidacion Encargada
CREATE TABLE liquidacionesEncargada(
    currentDate VARCHAR(100),
    desdeFechaLiquidado VARCHAR(30),
    desdeHoraLiquidado VARCHAR(30),
    encargada VARCHAR(30),
    hastaFechaLiquidado VARCHAR(30),
    hastaHoraLiquidado VARCHAR(30),
    createdDate VARCHAR(40),
    id INT(11) NOT NULL AUTO_INCREMENT PRIMARY KEY,
    idUnico VARCHAR(100),
    idEncargada VARCHAR(100),
    importe INT(50),
    regularizacion varchar(250),
    tratamiento INT(50)
);

DESCRIBE liquidacionesEncargada;