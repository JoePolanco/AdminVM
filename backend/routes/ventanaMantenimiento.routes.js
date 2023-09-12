let express = require('express');
let router = express.Router();
let ventanaMantenimiento = require('../models/ventanaMantenimiento');

router.post('/', (req, res)=> {
    const { id, nombreDataCenter,usuarioIngresoVM, idDataCenter, tipoMantenimiento, fechaInicio, fechaFin, 
        horaInicio, horaFin, justificacionDeActividad, rda, estadoDeSolicitud } = req.body;

    
    if(!nombreDataCenter) return res.status(401).send({message: "Debe de ingresar nombre ."});
    if(!idDataCenter) return res.status(401).send({message: "Debe de ingresar un data center."});
    if(!usuarioIngresoVM) return res.status(401).send({message: "Debe de ingresar un usuario valido."});
    if(!tipoMantenimiento) return res.status(401).send({message: "Debe de ingresar el tipo de mantenimiento "});
    if(!fechaInicio) return res.status(401).send({message: "Debe de ingresar fecha de inicio "});
    if(!fechaFin) return res.status(401).send({message: "Debe de ingresar fecha de fin "});
    if(!horaInicio) return res.status(401).send({message: "Debe de ingresar hora de inicio "});
    if(!horaFin) return res.status(401).send({message: "Debe de ingresar hora de fin "});
    if(!justificacionDeActividad) return res.status(401).send({message: "Debe de ingresar justificacion "});
    if(!rda) return res.status(401).send({message: "Debe de ingresar el flujo "});
    if(!estadoDeSolicitud) return res.status(401).send({message: "Debe de ingresar estado de solicitud "});
    
    ventanaMantenimiento.create({
        nombreDataCenter: nombreDataCenter, 
        idDataCenter: idDataCenter,
        usuarioIngresoVM: usuarioIngresoVM,
        tipoMantenimiento: tipoMantenimiento,
        fechaInicio: fechaInicio,
        fechaFin: fechaFin,
        horaInicio: horaInicio,
        horaFin: horaFin,
        justificacionDeActividad: justificacionDeActividad,
        rda: rda,
        estadoDeSolicitud: estadoDeSolicitud

    })
    .then(()=>{
        res.status(201).send({message: "Se ingreso la Ventana de Mantenimiento exitosamente."})
    })
    .catch(()=> {
        res.status(500).send({message: "No se pudo ingresar la Ventana de Mantenimiento exitosamente."})
    })
});

router.get('/', (req, res)=>{
    ventanaMantenimiento.find({})
    .then(docs=>{
        res.status(201).send(docs)
    })
    .catch(err=>{
        res.status(500).send({error: err, message: "No se pudieron obtener los datos."})
    })
});

router.put('/:id', (req, res)=> {
    const {nombreDataCenter, idDataCenter, usuarioIngresoVM, tipoMantenimiento, fechaInicio, fechaFin, 
        horaInicio, horaFin, justificacionDeActividad, rda, estadoDeSolicitud} = req.body;
    const id = req.params.id;
console.log(id);
    filtro = {
        _id: id
    };

     let update = {
        ...( nombreDataCenter && { nombreDataCenter }),
        ...( idDataCenter && { idDataCenter }),
        ...( usuarioIngresoVM && { usuarioIngresoVM }),
        ...( tipoMantenimiento && { tipoMantenimiento }),
        ...( fechaInicio && { fechaInicio }),
        ...( fechaFin && { fechaFin }),
        ...( horaInicio && { horaInicio }),
        ...( horaFin && { horaFin }),
        ...( justificacionDeActividad && { justificacionDeActividad }),
        ...( rda && { rda }),
        ...( estadoDeSolicitud && { estadoDeSolicitud })
    }

    ventanaMantenimiento.findOneAndUpdate(filtro, update)
    .then(()=>{
        res.status(201).send({message: "Se realizaron los cambios de manera exitosa."})
    })
    .catch(err=>{
        res.status(500).send({error: err, message: "No se pudieron realizar los cambios."})
    })
});


module.exports = router;