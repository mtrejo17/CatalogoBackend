import * as mongoose from 'mongoose';

const SCHEMA = mongoose.Schema;

export interface IProducto extends mongoose.Document {
    clave: string;
    descripcion: string;
    tipoProducto: string;
    precioPublico: number;
    unidadEntrada: string;
    unidadSalida: string;
    paridad: number;
    proveedores: any[];
}

let ProductoSchema = new SCHEMA({
    clave : {
        type: String,
        unique: true,
        required: [true, 'clave requerido']
    },
    descripcion : {
        type: String,
        required: [true, 'descripcion requerido']
    },
    tipoProducto : {
        type: SCHEMA.Types.ObjectId,
        required: true,
        ref: 'TipoProducto'
    },
    precioPublico: {
        type: Number,
        required: [true, 'precioPublico requerido']
    },
    unidadEntrada : {
        type: SCHEMA.Types.ObjectId,
        required: true,
        ref: 'Unidad'
    },
    unidadSalida : {
        type: SCHEMA.Types.ObjectId,
        required: true,
        ref: 'Unidad'
    },
    paridad: {
        type: Number,
        required: [true, 'paridad requerido']
    },
    proveedores: [
        {
            proveedor: {
                type: SCHEMA.Types.ObjectId,
                required: true,
                ref: 'Proveedor'
            },
            costo: {
                type: Number,
                required: [true, 'costo requerido']
            }
        }
    ]
});