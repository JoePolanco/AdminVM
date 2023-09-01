let express = require('express');
let router = express.Router();
let Login = require('../models/usuarios');


router.post('/login', (req, res)=> {
  const { usuario, clave } = req.body;
  if(!usuario) return res.status(401).send("Debe de ingresar un usuario.");
  if(!clave) return res.status(401).send("Debe de ingresar una clave.");
  filtro = {
    usuario: usuario, 
    clave: clave
  }
 
  Login.findOne(filtro, (err, user)=> {
  if(err) return res.status(401).send("Hubo un error, no se pudo realizar el login.")
  if(user){
    res.status(201).send(user);
  } else {
    res.status(401).send("El usuario o la contraseña son incorrectos.");
  }
  });
});

router.post('/register', (req, res)=> {
  const { usuario, clave, rol, nombres, apellidos, departamento, email  } = req.body;
  if(!usuario) return res.status(401).send("Debe de ingresar un usuario.");
  if(!clave) return res.status(401).send("Debe de ingresar una clave.");
  if(!rol) return res.status(401).send("Debe de ingresar el rol.");
  if(!nombres) return res.status(401).send("Debe de ingresar sus nombres.");
  if(!apellidos) return res.status(401).send("Debe de ingresar sus apellidos.");
  if(!departamento) return res.status(401).send("Debe de ingresar sus apellidos.");
  if(!email) return res.status(401).send("Debe de ingresar la identidad.");


  Login.create({
    usuario, 
    clave,
    rol,
    nombres,
    apellidos,
    departamento,
    email,
   
  }).then(()=> {
    res.status(201).send("Se creo el usuario exitosamente.")
  }).catch((err) => {
    res.status(401).send(err);
  });
});

router.get('/usuarios', (req, res)=> {
  filtro = {}

  Login.find({})

    .then(docs=>{
        res.status(201).send(docs)
    })
    .catch(err=>{
        res.status(500).send({error: err, message: "No se pudieron obtener los usuarios."})
    })
});


router.put('/password/:id', (req, res) => {
  const idUsuario = req.params.id;
  const clave = req.body.clave;

  if(!idUsuario) return res.status(401).send("Debe de incluir el id del usuario.");
  if(!clave) return res.status(401).send("Debe de incluir la clave nueva.");

  filtro = {
    _id: idUsuario
  }

  registro = {
    clave: clave
  }

  Login.findOneAndUpdate(filtro, registro, (err, response)=>{
    if(err) return res.status(401).send("Hubo un error, no se pudo cambiar la contraseña.");
    res.status(401).send("Se cambio la contraseña exitosamente.");
    console.log(response);
  });
});

module.exports = router;