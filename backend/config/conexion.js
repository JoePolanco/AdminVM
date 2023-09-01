let mongoose = require('mongoose');
mongoose.set("strictQuery", false);

exports.connect = () => {
    try{
        mongoose.connect(
            'mongodb://0.0.0.0:27017/AdminVM',
             { useNewUrlParser: true }
        );
        console.log("Base de datos conectada exitosamente.");
    } catch {
        console.log("No se pudo conectar la base de datos!");
        process.exit(1);
    }
    
}
