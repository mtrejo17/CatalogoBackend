import * as mongoose from 'mongoose';

const SCHEMA = mongoose.Schema;

export interface ITipoProducto extends mongoose.Document {
    clave: string;
    tipoProducto: string;
}

let TipoProductoSchema = new SCHEMA({
    clave : {
        type: String,
        unique: true,
        required: [true, 'clave requerido']
    },
    tipoProducto : {
        type: String,
        required: [true, 'tipoProducto requerido']
    }
});

const TipoProducto = mongoose.model<ITipoProducto>("TipoProducto", TipoProductoSchema);
export default TipoProducto;