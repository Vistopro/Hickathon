const pool = require('../../db');
const queries = require('./queries');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const loginUser = async (req, res) => {
  const { email, password } = req.body;
  try {
    const query = 'SELECT password FROM users WHERE email = $1';
    
   //Validate user exists 
   const result = await pool.query(query, [email]);
       if (result.rows.length === 0) {
      res.status(401).json("Invalid email");
      return;
    }
    const storedPassword = result.rows[0].password;
    //Validate password
    const passwordValid = await bcrypt.compare(password, storedPassword);

    if (passwordValid) {
      // Generar el token
      const token = jwt.sign({ 
        email: email
      }, process.env.SECRET_KEY || 'token not found');

      // Enviar la respuesta con el token
      res.status(200).json({ token: token });
    } else {
      res.status(401).json("Contraseña inválida");
    }
  } catch (error) {
    console.error(error);
    res.status(500).json("Error interno del servidor");
  }

  };


const getUsers = (req, res) => {
    pool.query(queries.getUsers, (error, response) => {
      if (error) {
        console.log(error);
        res.status(500).send("Error getting users");
      } else {
        res.status(200).json(response.rows);
      }
    });
  };

const createAbsence = (req, res) => {
    const id_user = parseInt(req.params.id_user);
    const {start_day, end_day} = req.body; 

    pool.query(queries.createAbsence,[id_user,start_day, end_day], (error, results) => {
      if (error) {
        console.log("Error creating absence");
        res.status(500).send("Error creating absence");
      } else {
        res.status(201).send("Absence Created Succesfully!");
      }
    }
  );
};

const viewAbsenceRequests = (req, res) => {
    const id_user = parseInt(req.params.id_user);
    pool.query(queries.viewAbsenceRequests,[id_user], (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const reviewAbsenceRequestsManager = (req, res) => {
   
    pool.query(queries.reviewAbsenceRequestsManager,  (error, results) => {
        if(error) throw error;
        res.status(200).json(results.rows);
    });
};

const addUsers = async (req, res) => {
  const {name, email,rol, password, absences, department } = req.body;

  const hashedPassword = await bcrypt.hash(password, 10);
  console.log(hashedPassword);

  pool.query(queries.checkEmailExists, [email], (error, response) => {
    if (response.rows.length) {
      res.send("Email already exists.");
    } else {
      pool.query(
        queries.addUsers,
        [name, email, hashedPassword, rol, absences, department],
        (error, response) => {
          if (error) {
            console.log(error);
            res.status(500).send("Error creating user");
          } else {
            res.status(201).json({ message: "User Created Successfully!" });

          }
        }
      );
    }
  });
};

const removeUsers = (req, res) => {
    const id_user = parseInt(req.params.id_user);

    pool.query(queries.getUserById, [id_user], (error, result) => {
      if (error) {
        return res
          .status(500)
          .json({ message: "Error deleting user from database" });
      } else if (result.rows.length === 0) {
        return res.status(404).json({ message: "User not found" });
      } else {
        pool.query(queries.removeUsers, [id_user], (error, response) => {
          res.status(200).json({ message: `User with ID ${id_user} has been delete` });
          console.log("User deleted successfully");
        });
      }
    });
  };

  const editUsers = (req, res) => {
  const id_user = parseInt(req.params.id_user);
  const { name, email, password, rol, absences, department } = req.body;

  pool.query(
    queries.editUsers,
    [name, email, password, rol, absences, department, id_user],
    (error, response) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error editing user");
      } else {
        res.status(200).json(response.rows);
        console.error("User edited succesfully!");
      }
    }
  );
};

const editAbsence = (req, res) => {
  const id = parseInt(req.params.id);
  const id_user = parseInt(req.params.id_user);
  const { start_day, end_day} = req.body;

  pool.query(
    queries.editAbsence,
    [id_user, start_day, end_day, id],
    (error, response) => {
      if (error) {
        console.error("Error editing absence");
        res.status(500).send("Error editing absence");
      } else {
        res.status(200).json(response.rows);
        console.error("Absence edited succesfully!");
      }
    }
  );
}

const deleteAbsence = (req, res) => {
  const id = parseInt(req.params.id);
  const id_user = parseInt(req.params.id_user);

  pool.query(queries.getAbsenceById, [id], (error, result) => {
    if (result.rows.length === 0) {
      console.log("Absence not found");
      return res.status(404).json({ message: "Absence not found" });
    } else {
      pool.query(queries.deleteAbsence, [id, id_user], (error, response) => {
        if (error) {
          console.error("Error deletting absence from database");
          res.status(500).send("Error deletting absence from database");
        } else {
          res
            .status(200)
            .json({ message: `Absence with ID ${id} has been delete` });
          console.log("Absence deletted successfully");
        }
      });
    }
  });
};

const editStatus = (req, res) => {
  const id = parseInt(req.params.id);
  const { status} = req.body;

  pool.query(
    queries.editStatus,
    [id, status],
    (error, response) => {
      if (error) {
        console.error(error);
        res.status(500).send("Error editing status of absence");
      } else {
        res.status(200).json(response.rows);
        console.error("Absence edited succesfully!");
      }
    }
  );
};

module.exports = {
  loginUser,
    createAbsence,
    viewAbsenceRequests,
    editAbsence,
    deleteAbsence,
    reviewAbsenceRequestsManager,
    removeUsers,
    editUsers,
    addUsers,
    editStatus,
    getUsers
};