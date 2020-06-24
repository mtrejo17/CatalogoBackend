import * as mongoose from 'mongoose';

const SCHEMA = mongoose.Schema;

export interface IUnidad extends mongoose.Document {
    clave: string;
    unidad: string;
}

let UnidadSchema = new SCHEMA({
    clave : {
        type: String,
        required: [true, 'clave requerido']
    },
    unidad : {
        type: String,
        required: [true, 'unidad requerido']
    }
});

const Unidad = mongoose.model<IUnidad>("Unidad", UnidadSchema);
export default Unidad;