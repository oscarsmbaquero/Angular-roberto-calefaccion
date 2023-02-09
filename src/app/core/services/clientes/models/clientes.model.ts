export interface IClientes {
    _id:         string;
    nombre:      string;
    tipoCliente: string;
    dni:         string;
    telefono:    string;
    caldera:     string;
    email:       string;
    direccion:   string;
    localidad:   string;
    avisos:      Aviso[];
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}

export interface Aviso {
    _id:     string;
    cobrado: string;
}
