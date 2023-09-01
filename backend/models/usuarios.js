let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let usuarioSchema = new Schema(
    {
        usuario:        { type: String, require: true },
        clave:          { type: String, require: true },
        rol:            { type: String, enum: ['admin', 'user'], require: true},
        nombres:        { type: String, require: true },
        apellidos:      { type: String, require: true },
        departamento:   { type: String, require: true },
        email:          { type: String, default: null }
    }
);

let usuario = mongoose.model('usuarios', usuarioSchema);
module.exports = usuario;