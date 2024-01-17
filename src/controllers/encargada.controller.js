const pool = require("../config/conexion");
const jwt = require('jsonwebtoken');

// Insertamos

exports.create = (req, res) => {
  const sql = "INSERT INTO encargada SET ?";

  pool.query(sql, [req.body], () => {
    res.json({ message: "encargada Saved" });
  });
};

// Consultamos

exports.getById = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM encargada WHERE id = ?";

  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getIdAndRol = (req, res) => {
  const id = req.params.id;

  const sql = "SELECT * FROM encargada WHERE rol = 'administrador' AND id = ?";

  pool.query(sql, [id], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByUsuario = (req, res) => {
  const { usuario } = req.params;

  const sql = "SELECT * FROM encargada WHERE usuario = ?";

  pool.query(sql, [usuario], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getByNombre = (req, res) => {
  const { nombre } = req.params;

  const sql = "SELECT * FROM encargada WHERE nombre = ?";

  pool.query(sql, [nombre], (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};

exports.getUsuarioAndPass = (req, res) => {
  const { usuario, pass } = req.query;

  const sql = "SELECT * FROM encargada WHERE usuario = ? AND pass = ?";

  pool.query(sql, [usuario, pass], (err, result, fields) => {
    if (!err) {
      if (result.length > 0) {
        let data = JSON.stringify(result[0]);
        const token = jwt.sign(data, 'stil');
        res.json({ token });
      } else {
        res.json('Usuario o clave incorrectos');
      }
    } else {
      console.log(err);
    }
  })
}

exports.getEncargadas = (req, res) => {
  const sql = "SELECT * FROM encargada ORDER BY id asc";

  pool.query(sql, (err, result, fields) => {
    if (err) {
      throw err;
    }

    res.status(200).json(result);
  });
};


// Update

exports.updateEncargadas = (req, res) => {
  const id = req.params.id;

  const sql = "UPDATE encargada SET ? WHERE id = ?";
  
  pool.query(sql, [req.body, id], () => {
    res.json({ message: "The encargada was Updated" });
  });
};

// Delete

exports.delete = (req, res) => {
  const id = req.params.id;

  const sql = "DELETE FROM encargada WHERE id=?";
  pool.query(sql, id, (err, result, fields) => {
    res.json({ message: "The encargada was deleted" });
  });
};