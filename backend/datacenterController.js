var datacenterModel = require('./models/dataCenter')

var createDatacenterControllerFn = async (req, res) =>
{
  try{
    const body = req.body
    const datacenterModelData = new dataCenter()
    datacenterModelData.nombreDataCenter = body.nombreDataCenter
    datacenterModelData.idDataCenter = body.idDataCenter
    datacenterModelData.departamentoDataCenter = body.departamentoDataCenter
    datacenterModelData.direccion = body.direccion
    await datacenterModelData.save()

    res.status(200).send({
      "status": true, "message": "Data Center creado existosamente"
    });
  }
  catch(error){
    res.status(400).send(error)
  }
}

module.exports = createDatacenterControllerFn();