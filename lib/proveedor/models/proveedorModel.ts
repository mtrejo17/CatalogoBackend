import * as mongoose from 'mongoose';

const SCHEMA = mongoose.Schema;

export interface IProveedor extends mongoose.Document {
    clave: string;
    proveedor: string;
    atencion: string;
    direccion: string;
    telefono: string;
    telefonoMovil: string;
    correoElectronico: string;
}

let ProveedorSchema = new SCHEMA(
    {
        clave: {
            type: String,
            unique: true,
            required: [true, 'clave requerido']            
        },
        proveedor: {
            type: String,
            required: [true, 'proveedor requerido']
            
        },
        atencion: {
            type: String,
            required: [true, 'atencion requerido']
            
        },
        direccion: {
            type: String,
            required: [true, 'direccion requerido']
            
        },
        telefono: {
            type: String,
            required: [true, 'telefono requerido']
            
        },
        telefonoMovil: {
            type: String,
            required: [true, 'telefonoMovil requerido']
            
        },
        correoElectronico: {
            type: String,
            required: [true, 'correoElectronico requerido']            
        }
    }
);

const Proveedor = mongoose.model<IProveedor>("Proveedor", ProveedorSchema);
export default Proveedor;