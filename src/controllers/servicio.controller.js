const pool = require("../config/conexion");

// Insert

exports.create = (req, res) => {
  const sql = "INSERT INTO servicio SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "servicio Saved" });
  });
};

// Get

exports.getByCurrentDesc = (req, res) => {
  const sql = 'SELECT * FROM servicio WHERE cierre = "1" ORDER BY id desc';
  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByTerapeutaAndEncargada = (req, res) => {
  const { terapeuta, encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0"';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByTerapeutaAndLiquidatedZero = (req, res) => {
  const { terapeuta } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND liquidadoTerapeuta = "0" ORDER BY id desc';

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByEncargada = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByCierre = (req, res) => {
  const { encargada } = req.params;

  const sql = 'SELECT * FROM servicio WHERE encargada = ? AND cierre = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getServicio = (req, res) => {
  const sql = "SELECT * FROM servicio ORDER BY currentDate desc";

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getManagerOrderCurrenDate = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ? ORDER BY currentDate desc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByLiquidTerapFalse = (req, res) => {
  const sql =
    'SELECT * FROM servicio WHERE liquidadoTerapeuta = "0" ORDER BY currentDate desc';

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByLiquidaManagerFalse = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE liquidadoEncargada = "0" ORDER BY currentDate desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByIdTerap = (req, res) => {
  const { idTerapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE idTerapeuta = ?";

  pool.query(sql, [idTerapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByIdCierreDistinct = (req, res) => {
  const { idCierre } = req.params;

  const sql = "SELECT DISTINCT terapeuta FROM servicio WHERE idCierre = ?";

  pool.query(sql, [idCierre], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByIdCierre = (req, res) => {
  const { idCierre } = req.params;

  const sql = "SELECT * FROM servicio WHERE idCierre = ?";

  pool.query(sql, [idCierre], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByIdEncarg = (req, res) => {
  const { idEncargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE idEncargada = ?";

  pool.query(sql, [idEncargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.geyByCierreFalse = (req, res) => {
  const sql =
    'SELECT * FROM servicio WHERE cierre = "0" ORDER BY currentDate desc';

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getById = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM servicio WHERE id = ?";

  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByEditar = (req, res) => {
  const id = req.params.id;

  const sql = 'SELECT * FROM servicio WHERE id = ? AND editar = "1"';

  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaByAsc = (req, res) => {
  const { terapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE terapeuta = ? ORDER BY id asc";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaByDesc = (req, res) => {
  const { terapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE terapeuta = ? ORDER BY id desc";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeuta = (req, res) => {
  const { terapeuta } = req.params;

  const sql = "SELECT * FROM servicio WHERE terapeuta = ?";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargada = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ?";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaEncargada = (req, res) => {
  const { terapeuta, encargada } = req.query;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0"';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaAndLiquidacion = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidadaTerap = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoTerapeuta = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidada = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidadaByFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0" ORDER BY fechaHoyInicio desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapNoLiquidadaByFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoTerapeuta = "0" ORDER BY fechaHoyInicio desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoLiquidadaByFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0" ORDER BY fechaHoyInicio asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapNoLiquidadaByFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoTerapeuta = "0" ORDER BY fechaHoyInicio asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaNoCierre = (req, res) => {
  const { encargada } = req.params;

  const sql = 'SELECT * FROM servicio WHERE encargada = ? AND cierre = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaAsc = (req, res) => {
  const { terapeuta, encargada } = req.query;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0" ORDER BY currentDate asc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaAscByLiqTrue = (req, res) => {
  const { terapeuta, encargada } = req.query;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "1" ORDER BY currentDate asc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaAscByLiqTrue = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "1" ORDER BY currentDate asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByManagerAndLiquidatedZero = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0" ORDER BY id desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "0" ORDER BY currentDate asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaDesc = (req, res) => {
  const { terapeuta, encargada } = req.query;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "0" ORDER BY currentDate desc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaFechaDescByLiqTrue = (req, res) => {
  const { terapeuta, encargada } = req.query;

  const sql =
    'SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND liquidadoTerapeuta = "1" ORDER BY currentDate desc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaDescByLiqTrue = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = "1" ORDER BY currentDate desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTerapeutaWithCurrentDate = (req, res) => {
  const { terapeuta } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE terapeuta = ? ORDER BY currentDate desc";

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE encargada = ? AND liquidadoEncargada = '0' ORDER BY currentDate desc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaAsc = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ? ORDER BY id asc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaDesc = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ? ORDER BY id desc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getFechaHoy = (req, res) => {
  const { fechaHoyInicio, company } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE fechaHoyInicio = ? and company = ? ORDER BY currentDate desc";

  pool.query(sql, [fechaHoyInicio, company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdDesc = (req, res) => {
  const { idUnico } = req.params;

  const sql = "SELECT * FROM servicio WHERE idUnico = ? ORDER BY id desc";

  pool.query(sql, [idUnico], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getServicioByEncargadaAndIdUnico = (req, res) => {
  const { encargada } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE encargada = ? AND cierre = '0' ORDER BY currentDate asc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaAscByCierreTrue = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND cierre = "1" ORDER BY currentDate asc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getEncargadaFechaDescByCierreFalse = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND cierre = "1" ORDER BY currentDate desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByTerapeutaEncargadaFechaHoraInicioFechaHoraFin = (req, res) => {
  const { terapeuta, encargada, horaStart, horaEnd, fecha, fechaFin, company } = req.query;

  const sql = `	SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') <= ?
    AND liquidadoTerapeuta = "0" AND company = ? ORDER BY id desc`;

  pool.query(
    sql,
    [terapeuta, encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`, company],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getByEncargadaFechaHoraInicioFechaHoraFin = (req, res) => {
  const { encargada, horaStart, horaEnd, fecha, fechaFin, company } = req.query;

  const sql = `	SELECT * FROM servicio WHERE encargada = ?
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') <= ?
    AND liquidadoEncargada = "0" AND company = ? ORDER BY id desc`;

  pool.query(
    sql,
    [encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`, company],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getFechaHoyAndManager = (req, res) => {
  const { fechaHoyInicio, encargada, company } = req.query;

  const sql =
    "SELECT * FROM servicio WHERE fechaHoyInicio = ? AND encargada = ? AND company = ? ORDER BY currentDate desc";

  pool.query(sql, [fechaHoyInicio, encargada, company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getPaymentForm = (req, res) => {
  const { formaPago } = req.params;

  const sql = `SELECT * FROM servicio WHERE formaPago LIKE \'%${formaPago}%\'`;

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTherapistAndDates = (req, res) => {
  const { terapeuta, fechaHoyInicio, company } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE terapeuta = ? AND fechaHoyInicio = ? AND company = ?";

  pool.query(sql, [terapeuta, fechaHoyInicio, company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);  
  });
};

exports.getManagerAndDates = (req, res) => {
  const { encargada, fechaHoyInicio, company } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ? AND fechaHoyInicio = ? AND company = ?";

  pool.query(sql, [encargada, fechaHoyInicio, company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTherapistConsultingManagerAndDate = (req, res) => {
  const { encargada, fechaHoyInicio, company } = req.params;

  const sql = "SELECT DISTINCT terapeuta FROM servicio WHERE encargada = ? AND fechaHoyInicio = ? AND company = ?";

  pool.query(sql, [encargada, fechaHoyInicio, company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getTherapistAndManagerAndDates = (req, res) => {
  const { terapeuta, encargada, fechaHoyInicio, company } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? AND fechaHoyInicio = ? AND company = ?";

  pool.query(sql, [terapeuta, encargada, fechaHoyInicio, company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByEncargadaClosing = (req, res) => {
  const { encargada } = req.params;

  const sql =
    'SELECT * FROM servicio WHERE encargada = ? AND cierre = "0"';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByClosingFalse = (req, res) => {
  const sql =
    'SELECT * FROM servicio WHERE cierre = "0" ORDER BY currentDate desc';

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getWithDistinctByManagerFechaHoraInicioFechaHoraFinClosing = (req, res) => {
  const { encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `SELECT DISTINCT terapeuta FROM servicio WHERE encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "0" ORDER BY id desc`;

  pool.query(
    sql,
    [encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getByManagerFechaHoraInicioFechaHoraFinClosing = (req, res) => {
  const { encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `SELECT * FROM servicio WHERE encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "0" ORDER BY id desc`;

  pool.query(
    sql,
    [encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getServicesByNumberTerap = (req, res) => {
  const { encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `SELECT * FROM servicio WHERE encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "0" AND numberTerap != "0" ORDER BY id desc`;

  pool.query(
    sql,
    [encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getWithDistinctServicesByNumberTerap = (req, res) => {
  const { encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `SELECT DISTINCT terapeuta FROM servicio WHERE encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "0" AND numberTerap != "0" ORDER BY id desc`;

  pool.query(
    sql,
    [encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getByTherapistAndManagerFechaHoraInicioFechaHoraFinClosing = (req, res) => {
  const { terapeuta, encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `	SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "0" ORDER BY id desc`;

  pool.query(
    sql,
    [terapeuta, encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getByTherapistAndManagerFechaHoraInicioFechaHoraFinClosingTrue = (req, res) => {
  const { terapeuta, encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `	SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "1" ORDER BY id desc`;

  pool.query(
    sql,
    [terapeuta, encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getByTherapistAndManagerNumberterapFechaHoraInicioFechaHoraFinClosing = (req, res) => {
  const { terapeuta, encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `	SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "0" AND numberTerap != "0" ORDER BY id desc`;

  pool.query(
    sql,
    [terapeuta, encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getByTherapistAndManagerNumberterapFechaHoraInicioFechaHoraFinClosingTrue = (req, res) => {
  const { terapeuta, encargada, horaStart, horaEnd, fecha, fechaFin } = req.query;

  const sql = `	SELECT * FROM servicio WHERE terapeuta = ? AND encargada = ? 
    AND STR_TO_DATE(CONCAT(fecha,' ',horaStart),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(fechaFin,' ',horaEnd),'%e-%m-%y %H:%i') <= ?
    AND cierre = "1" AND numberTerap != "0" ORDER BY id desc`;

  pool.query(
    sql,
    [terapeuta, encargada, `${fecha} ${horaStart}`, `${fechaFin} ${horaEnd}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

exports.getByCompany = (req, res) => {
  const { company } = req.params;

  const sql =
    "SELECT * FROM servicio WHERE company = ? ORDER BY currentDate desc";

  pool.query(sql, [company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getManagerOrderCurrenDate = (req, res) => {
  const { encargada, company } = req.params;

  const sql = "SELECT * FROM servicio WHERE encargada = ? AND company = ? ORDER BY currentDate desc";

  pool.query(sql, [encargada, company], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

// Update

exports.updateServicio = (req, res) => {
  const id = req.params.id;

  const sql = "UPDATE servicio SET ? WHERE id = ?";

  pool.query(sql, [req.body, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateAllServicio = (req, res) => {
  const id = req.params.id;
  const {
    numberPiso1 = 0,
    numberTerap = 0,
    propina = 0,
    servicio,
    totalServicio = 0,
    minuto = 0,
  } = req.body;

  const sql =
    "UPDATE servicio SET numberPiso1 = ?, numberTerap = ?, propina = ?, servicio = ?, totalServicio = ?, minuto = ?  WHERE id = ?";

  pool.query(
    sql,
    [numberPiso1, numberTerap, propina, servicio, totalServicio, minuto, id],
    () => {
      res.json({ message: "The servicio was Updated" });
    }
  );
};

exports.updateNumberPiso1 = (req, res) => {
  const { idUnico } = req.params;

  const sql = "UPDATE servicio SET numberPiso1 = '0' WHERE idUnico = ?";

  pool.query(sql, [idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateValuePisos = (req, res) => {
  const id = req.params.id;
  const { idUnico } = req.params;

  const sql =
    "UPDATE servicio SET valuePiso1Efectivo = '0', valuePiso1Bizum = '0', valuePiso1Tarjeta = '0', valuePiso1Transaccion = '0', valuePiso2Efectivo = '0', valuePiso2Bizum = '0', valuePiso2Tarjeta = '0', valuePiso2Transaccion = '0' WHERE id = ? AND idUnico = ?";

  pool.query(sql, [id, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberPiso1 = (req, res) => {
  const id = req.params.id;
  const { idUnico } = req.params;
  const { numberPiso1 } = req.body;

  const sql =
    "UPDATE servicio SET numberPiso1 = ? WHERE id = ? AND idUnico = ?";

  pool.query(sql, [numberPiso1, id, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberPiso2 = (req, res) => {
  const { idUnico } = req.params;

  const sql = "UPDATE servicio SET numberPiso2 = '0' WHERE idUnico = ?";

  pool.query(sql, [idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberPiso2 = (req, res) => {
  const id = req.params.id;
  const { idUnico } = req.params;
  const { numberPiso2 } = req.body;

  const sql =
    "UPDATE servicio SET numberPiso2 = ? WHERE id = ? AND idUnico = ?";

  pool.query(sql, [numberPiso2, id, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberEncargada = (req, res) => {
  const { idUnico } = req.params;

  const sql = "UPDATE servicio SET numberEncarg = '0' WHERE idUnico = ?";

  pool.query(sql, [idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberEncargada = (req, res) => {
  const id = req.params.id;
  const { idUnico } = req.params;
  const { numberEncarg } = req.body;

  const sql =
    "UPDATE servicio SET numberEncarg = ? WHERE id = ? AND idUnico = ?";

  pool.query(sql, [numberEncarg, id, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberTerap = (req, res) => {
  const { idUnico } = req.params;

  const sql = "UPDATE servicio SET numberTerap = '0' WHERE idUnico = ?";

  pool.query(sql, [idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberTerap = (req, res) => {
  const id = req.params.id;
  const { idUnico } = req.params;
  const { numberTerap } = req.body;

  const sql =
    "UPDATE servicio SET numberTerap = ? WHERE id = ? AND idUnico = ?";

  pool.query(sql, [numberTerap, id, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNumberTaxi = (req, res) => {
  const { idUnico } = req.params;

  const sql = "UPDATE servicio SET numberTaxi = '0' WHERE idUnico = ?";

  pool.query(sql, [idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateWithValueNumberTaxi = (req, res) => {
  const id = req.params.id;
  const { idUnico } = req.params;
  const { numberTaxi } = req.body;

  const sql = "UPDATE servicio SET numberTaxi = ? WHERE id = ? AND idUnico = ?";

  pool.query(sql, [numberTaxi, id, idUnico], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateLiquidacionTerap = (req, res) => {
  const id = req.params.id;
  const { liquidadoTerapeuta = 1, idTerapeuta } = req.body;

  const sql =
    "UPDATE servicio SET liquidadoTerapeuta = ?, idTerapeuta = ? WHERE id = ?";

  pool.query(sql, [liquidadoTerapeuta, idTerapeuta, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateLiquidacionEncarg = (req, res) => {
  const id = req.params.id;
  const { liquidadoEncargada = 1, idEncargada } = req.body;

  const sql =
    "UPDATE servicio SET liquidadoEncargada = ?, idEncargada = ? WHERE id = ?";

  pool.query(sql, [liquidadoEncargada, idEncargada, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateCierre = (req, res) => {
  const id = req.params.id;
  const { cierre = 1, idCierre } = req.body;

  const sql = "UPDATE servicio SET cierre = ?, idCierre = ? WHERE id = ?";

  pool.query(sql, [cierre, idCierre, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateTherapistSettlementTherapistIdByTherapistId = (req, res) => {
  const { idTerapeuta } = req.params;

  const sql = "UPDATE servicio SET liquidadoTerapeuta = '0', idTerapeuta = '' WHERE idTerapeuta = ?";

  pool.query(sql, [idTerapeuta], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateManagerSettlementManagerIdByManagerId = (req, res) => {
  const { idEncargada } = req.params;

  const sql = "UPDATE servicio SET liquidadoEncargada = '0', idEncargada = '' WHERE idEncargada = ?";

  pool.query(sql, [idEncargada], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateClosingByIdClosing = (req, res) => {
  const { idCierre } = req.params;

  const sql = "UPDATE servicio SET cierre = '0', idCierre = '' WHERE idCierre = ?";

  pool.query(sql, [idCierre], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateValuePisos = (req, res) => {
  const id = req.params.id;
  const { pantalla } = req.params;

  const sql = "UPDATE servicio SET pantalla = ?, WHERE id = ?";

  pool.query(sql, [id, pantalla], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateScreenByIds = (req, res) => {
  const id = req.params.id;
  const { pantalla } = req.body;

  const sql = "UPDATE servicio SET pantalla = ? WHERE id = ?";

  pool.query(sql, [pantalla, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

exports.updateNote = (req, res) => {
  const id = req.params.id;
  const { nota } = req.body;

  const sql = "UPDATE servicio SET nota = ? WHERE id = ?";

  pool.query(sql, [nota, id], () => {
    res.json({ message: "The servicio was Updated" });
  });
};

// Delete

exports.deleteServicio = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM servicio WHERE id = ?";

  pool.query(sql, ID, (err, result, fields) => {
    res.json({ message: "The Servicio was deleted" });
  });
};