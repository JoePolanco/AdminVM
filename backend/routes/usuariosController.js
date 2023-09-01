var usuariosModel = require('./models/usuarios')

var createUsuariosControllerFn = async (req, res) =>
{
  try{
    const body = req.body
    const usuariosModelData = new login()
    usuariosModelData.usuario = body.usuario
    usuariosModelData.clave = body.clave
    usuariosModelData.rol = body.rol
    usuariosModelData.nombres = body.nombre
    usuariosModelData.apellidos = body.apellidos
    usuariosModelData.departamento = body.departamento
    usuariosModelData.email = body.email
    await usuariosModelData.save()

    res.status(200).send({
      "status": true, "message": "Usuario creado existosamente"
    });
  }
  catch(error){
    res.status(400).send(error)
  }
}

module.exports = createUsuariosControllerFn();