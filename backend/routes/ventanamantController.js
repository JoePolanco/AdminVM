var ventanaMantenimientoModel = require('./models/ventanaMantenimiento')

var createVentanaMantControllerFn = async (req, res) =>
{
  try{
    const body = req.body
    const ventanaMantenimientoModelData = new ventanaMantenimiento()
    ventanaMantenimientoModelData.nombreDataCenter = body.nombreDataCenter
    ventanaMantenimientoModelData.idDataCenter = body.idDataCenter
    ventanaMantenimientoModelData.usuarioIngresoVMDataCenter.usuarioIngresoVMDataCenter
    ventanaMantenimientoModelData.fechaInicio = body.fechaInicio
    ventanaMantenimientoModelData.fechaFin = body.fechaFin
    ventanaMantenimientoModelData.horaInicio = body.horaInicio
    ventanaMantenimientoModelData.horaFin = body.horaFin
    ventanaMantenimientoModelData.justificacionDeActividad = body.justificacionDeActividad
    ventanaMantenimientoModelData.rda = body.rda
    ventanaMantenimientoModelData.estadoDeSolicitud = body.estadoDeSolicitud

    await ventanaMantenimientoModelData.save()

    res.status(200).send({
      "status": true, "message": "Ventana de Mant creada existosamente"
    });
  }
  catch(error){
    res.status(400).send(error)
  }
}

module.exports = createVentanaMantControllerFn();