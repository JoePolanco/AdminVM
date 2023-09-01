
let {Router} = require('express');
let dataCenter = require('../models/dataCenter');

const app = Router();

app.post('/', (req, res)=> {
    const { nombreDataCenter, idDataCenter, departamentoDataCenter, direccion } = req.body;

    if(!nombreDataCenter) return res.status(401).send({message: "El nombre de data center es requerido."});
    if(!idDataCenter) return res.status(401).send({message: "Debe de ingresar un ID de Data Center."});
    if(!departamentoDataCenter) return res.status(401).send({message: "Debe de ingresar un ID de Data Center."});
    if(!direccion) return res.status(401).send({message: "Debe de ingresar ciudad."});
    if(!dataCenter) return res.status(401).send({message: "Debe de ingresar el Id del Data Center"});
    dataCenter.create({
        nombreDataCenter: nombreDataCenter, 
        idDataCenter: idDataCenter,
        departamentoDataCenter: departamentoDataCenter,
        direccion: direccion, 
         
        dataCenter: dataCenter
    })
    .then(()=>{
        res.status(201).send({message: "Se creo el Data Center exitosamente."})
    })
    .catch(()=> {
        res.status(500).send({message: "No se pudo agregar el Data Center."})
    })
});

app.get('/', (req, res)=>{
    dataCenter.find({})
    .then(docs=>{
        res.status(201).send(docs)
    })
    .catch(err=>{
        res.status(500).send({error: err, message: "No se pudieron obtener los Data Center."})
    })
});

app.put('/:id', (req, res)=> {
    const {nombreDataCenter,idDataCenter, departamentoDataCenter, direccion,} = req.body;
    const id = req.params.id;

    filtro = {
        _id: id
    };
         let update = {
        ...( nombreDataCenter && { nombreDataCenter }),
        ...( idDataCenter && { idDataCenter }),
        ...( departamentoDataCenter && { departamentoDataCenter }),
        ...( direccion && { direccion }),
        ...( dataCenter && { dataCenter })
    }

    dataCenter.findOneAndUpdate(filtro, update)
    .then(()=>{
        res.status(201).send({message: "Se realizaron los cambios de manera exitosa."})
    })
    .catch(err=>{
        res.status(500).send({error: err, message: "No se pudieron realizar los cambios."})
    })
});

module.exports = app;