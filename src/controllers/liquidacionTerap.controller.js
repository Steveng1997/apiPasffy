const pool = require("../config/conexion");

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO liquidacionesTerapeuta SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "Liquidacion terapeuta Saved" });
  });
};

// Consultamos

exports.getLiquidacionesTerapeuta = (req, res) => {
  const sql = "SELECT * FROM liquidacionesTerapeuta ORDER BY id desc";

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdTerap = (req, res) => {
  const { idTerapeuta } = req.params;

  const sql = "SELECT * FROM liquidacionesTerapeuta WHERE idTerapeuta = ?";

  pool.query(sql, [idTerapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByTerapeutaAndEncargada = (req, res) => {
  const { terapeuta, encargada } = req.query;

  const sql =
    'SELECT * FROM liquidacionesTerapeuta WHERE terapeuta = ? AND encargada = ? ORDER BY id desc';

  pool.query(sql, [terapeuta, encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByEncargada = (req, res) => {
  const { encargada } = req.params;

  const sql = 'SELECT * FROM liquidacionesTerapeuta WHERE encargada = ? ORDER BY id desc';

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByTherapist = (req, res) => {
  const { terapeuta } = req.params;

  const sql = 'SELECT * FROM liquidacionesTerapeuta WHERE terapeuta = ? ORDER BY id desc';

  pool.query(sql, [terapeuta], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByManagerFechaHoraInicioFechaHoraFinLiquidationTherapist = (req, res) => {
  const { encargada, desdeHoraLiquidado, hastaHoraLiquidado, desdeFechaLiquidado, hastaFechaLiquidado } = req.query;

  const sql = `	SELECT * FROM liquidacionesTerapeuta WHERE encargada = ?
    AND STR_TO_DATE(CONCAT(desdeFechaLiquidado,' ',desdeHoraLiquidado),'%e-%m-%y %H:%i') >= ?
    AND STR_TO_DATE(CONCAT(hastaFechaLiquidado,' ',hastaHoraLiquidado),'%e-%m-%y %H:%i') <= ?
    ORDER BY id desc`;

  pool.query(
    sql,
    [encargada, `${desdeFechaLiquidado} ${desdeHoraLiquidado}`, `${hastaFechaLiquidado} ${hastaHoraLiquidado}`],
    (err, result, fields) => {
      if (err) {
        throw err;
      }

      res.status(200).json(result);
    }
  );
};

// Actualizamos

exports.update = (req, res) => {
  const { terapeuta } = req.params;
  const { idTerapeuta } = req.body;

  const sql = "UPDATE liquidacionesTerapeuta SET idTerapeuta = ? WHERE terapeuta = ?";

  pool.query(sql, [idTerapeuta, terapeuta], () => {
    res.json({ message: "The liquidacion terapeuta was Updated" });
  });
};

exports.updateByIdImporte = (req, res) => {
  const { idTerapeuta } = req.params;
  const { importe } = req.body;

  const sql =
    "UPDATE liquidacionesTerapeuta SET importe = ? WHERE idTerapeuta = ?";

  pool.query(sql, [importe, idTerapeuta], () => {
    res.json({ message: "The liquidacion terapeuta was Updated" });
  });
};

exports.updateTerapeutaImporteById = (req, res) => {
  const id = req.params.id;
  const { importe } = req.body;

  const sql = "UPDATE liquidacionesTerapeuta SET importe = ? WHERE id = ?";

  pool.query(sql, [importe, id], () => {
    res.json({ message: "The liquidacion terapeuta was Updated" });
  });
};

// Delete

exports.deleteLiquidationTherapist = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM liquidacionesTerapeuta WHERE id = ?";

  pool.query(sql, ID, (err, result, fields) => {
    res.json({ message: "The terapeuta was deleted" });
  });
};