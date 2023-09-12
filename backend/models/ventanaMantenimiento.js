let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

const ventanaMantenimientoSchema = new Schema({
   // id:        {type: Number, required: true, unique: true, default: 1},
    nombreDataCenter:         { type: String, require: true },
    idDataCenter:             { type: String, require: true},
    usuarioIngresoVM:         { type: String, require: true},
    tipoMantenimiento:        { type: String, enum: [ 'Preventivo','Correctivo'] },
    fechaInicio:              { type: String, require: true },
    fechaFin:                 { type: String, require: true },
    horaInicio:               { type: String, require: true }, 
    horaFin:                  { type: String, required: true },
    justificacionDeActividad: { type: String, required: true },
    rda:                      { type: String, require: true },
    estadoDeSolicitud:        { type: String, enum: ['Abierto','Cerrado']}
},{
    timestamps: true
});

// Para tener id incrementales iniciando en 1, 2, 3...
/*
ventanaMantenimientoSchema.pre('save', function(next) {
    const doc = this;
    doc.constructor.countDocuments({}, (err, count) => {
      if (err) return next(err);
      doc._id = count + 1;
      next();
    });
  });
*/
let ventanaMantenimiento =  mongoose.model('ventanaMantenimiento', ventanaMantenimientoSchema);

module.exports = ventanaMantenimiento;