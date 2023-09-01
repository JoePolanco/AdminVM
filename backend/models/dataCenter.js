let mongoose = require('mongoose');
let Schema = mongoose.Schema;

let dataCenterSchema = new Schema(
    {
        nombreDataCenter:        { type: String, require: true },
        idDataCenter:            { type: String, require: true},
        departamentoDataCenter:  { type: String, require: true },
        direccion:               { type: String, require: true },       
    }
);

let dataCenter = mongoose.model('dataCenter', dataCenterSchema);

module.exports = dataCenter;