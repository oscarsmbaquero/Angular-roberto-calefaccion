export interface IAvisos {
    _id:                  string;
    averia:               string;
    prioridad:            string;
    estado:               string;
    totalHoras:           number[];
    intervencion:         string[];
    cobrado:              string;
    fecha_inicio:         string[];
    fecha_fin:            string[];
    km:                   number[];
    viaje:                number[];
    cliente:              Cliente;
    materialIntervencion: MaterialIntervencion[];
    createdAt:            Date;
    updatedAt:            Date;
    __v:                  number;
    motivo:               string;
    importeReparacion:    number;
}

export interface Cliente {
    _id:         string;
    nombre:      string;
    tipoCliente: string;
    dni:         string;
    telefono:    string;
    caldera:     string;
    email:       string;
    direccion:   string;
    localidad:   string;
    avisos:      string[];
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}

export interface MaterialIntervencion {
    _id:         string;
    descripcion: string;
}
