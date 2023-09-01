let mongoose = require('mongoose');
let Schema = mongoose.Schema;
const ObjectId = mongoose.Schema.Types.ObjectId;

let elementosDataCenterSchema = new Schema(
    {
        nombreDataCenter:  { type: String, require: true },
        idDataCenter:      { type: ObjectId, require: true},
        nombreElemento:    { type: String, require: true },
        marcaElemento:     { type: String, require: true },
        modeloElemento:    { type: String, require: true },
        serieElemento:     { type: String, require: true }, 
    }
);

let elementosDataCenter = mongoose.model('elementosDataCenter', elementosDataCenterSchema);

module.exports = elementosDataCenter;