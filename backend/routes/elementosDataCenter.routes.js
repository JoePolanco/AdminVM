let express = require('express');
let router = express.Router();
let elementosDataCenter = require('../models/elementosDataCenter');

router.post('/', (req, res)=> {
    const { nombreDataCenter, idDataCenter, nombreElemento, marcaElemento, modeloElemento, serieElemento } = req.body;

    if(!nombreDataCenter) return res.status(401).send({message: "El nombre de data center es requerido."});
    if(!idDataCenter) return res.status(401).send({message: "Debe de ingresar un ID de Data Center."});
    if(!nombreElemento) return res.status(401).send({message: "Debe de ingresar un nombre de elemento."});
    if(!marcaElemento) return res.status(401).send({message: "Debe de ingresar una marca de elemento."});
    if(!modeloElemento) return res.status(401).send({message: "Debe de ingresar un modelo de elemento.."});
    if(!serieElemento) return res.status(401).send({message: "Debe de ingresar una serie de elemento.."});
    
    //La variable Data Center.
    if(!elementosDataCenter) return res.status(401).send({message: "Debe de ingresar el Id del elemento del Data Center"});
    elementosDataCenter.create({
        nombreDataCenter: nombreDataCenter, 
        idDataCenter: idDataCenter,
        nombreElemento: nombreElemento,
        marcaElemento: marcaElemento,
        modeloElemento: modeloElemento,
        serieElemento: serieElemento,

      
    })
    .then(()=>{
        res.status(201).send({message: "Se creo el elemento exitosamente."})
    })
    .catch((err)=> {
        console.log(err);
        res.status(500).send({message: "No se pudo agregar el elemento."})
    })
});

router.get('/', (req, res)=>{
    elementosDataCenter.find({})

    .then(docs=>{
        res.status(201).send(docs)
    })
    .catch(err=>{
        res.status(500).send({error: err, message: "No se pudieron obtener los elemenrtos."})
    })
});

router.put('/:id', (req, res)=> {
    const {nombreDataCenter,idDataCenter, nombreElemento, marcaElemento, modeloElemento, serieElemento} = req.body;
    const id = req.params.id;

    filtro = {
        _id: id
    };

         let update = {
        ...( nombreDataCenter && { nombreDataCenter }),
        ...( idDataCenter && { idDataCenter }),
        ...( nombreElemento && { nombreElemento }),
        ...( marcaElemento && { marcaElemento }),
        ...( modeloElemento && { modeloElemento }),
        ...( serieElemento && { serieElemento })
    }

    elementosDataCenter.findOneAndUpdate(filtro, update)
    .then(()=>{
        res.status(201).send({message: "Se realizaron los cambios de manera exitosa."})
    })
    .catch(err=>{
        res.status(500).send({error: err, message: "No se pudieron realizar los cambios."})
    })
});

module.exports = router;