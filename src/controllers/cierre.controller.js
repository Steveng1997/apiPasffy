const pool = require("../config/conexion");

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO cierre SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "cierre Saved" });
  });
};

// Consultamos

exports.getAllCierre = (req, res) => {
  const sql = "SELECT * FROM cierre ORDER BY currentDate desc";

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdCierre = (req, res) => {
  const { idCierre } = req.params

  const sql = "SELECT * FROM cierre WHERE idCierre = ?";
  pool.query(sql, [idCierre], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

