export interface IMaterial {
    _id:         string;
    descripcion: string;
    estado:      string;
    ubicacion:   string;
    pcompra:     number;
    iva:         number;
    pvp:         number;
    unidades:    number;
    tipo:        string;
    createdAt:   Date;
    updatedAt:   Date;
    __v:         number;
}