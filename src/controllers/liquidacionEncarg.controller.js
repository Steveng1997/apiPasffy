const pool = require("../config/conexion");

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO liquidacionesEncargada SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "Liquidacion encargada Saved" });
  });
};

// Consultamos

exports.getLiquidacionesEncargada = (req, res) => {

  const sql = "SELECT * FROM liquidacionesEncargada ORDER BY id desc";
  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdEncarg = (req, res) => {
  const { idEncargada } = req.params;

  const sql = "SELECT * FROM liquidacionesEncargada WHERE idEncargada = ?";

  pool.query(sql, [idEncargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByEncargada = (req, res) => {
  const { encargada } = req.params;

  const sql = "SELECT * FROM liquidacionesEncargada WHERE encargada = ? ORDER BY id desc";

  pool.query(sql, [encargada], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

// Actualizamos

exports.update = (req, res) => {
  const { encargada } = req.params;
  const { idEncargada } = req.body;

  const sql = "UPDATE liquidacionesEncargada SET idEncargada = ? WHERE encargada = ?";

  pool.query(sql, [idEncargada, encargada], () => {
    res.json({ message: "The terapeuta was Updated" });
  });
};

exports.updateByIdImporte = (req, res) => {
  const { idEncargada } = req.params;
  const { importe } = req.body;

  const sql =
    "UPDATE liquidacionesEncargada SET importe = ? WHERE idEncargada = ?";

  pool.query(sql, [importe, idEncargada], () => {
    res.json({ message: "The encargada was Updated" });
  });
};

exports.updateEncargadaImporteById = (req, res) => {
  const id = req.params.id;
  const { importe } = req.body;

  const sql = "UPDATE liquidacionesEncargada SET importe = ? WHERE id = ?";

  pool.query(sql, [importe, id], () => {
    res.json({ message: "The encargada was Updated" });
  });
};

// Delete

exports.deleteLiquidationManager = (req, res) => {
  const ID = req.params.id;

  const sql = "DELETE FROM liquidacionesEncargada WHERE id = ?";

  pool.query(sql, ID, (err, result, fields) => {
    res.json({ message: "The terapeuta was deleted" });
  });
};