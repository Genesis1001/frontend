export interface NewsResponse {
    ok:      boolean;
    eventos: Evento[];
}

export interface Evento {
    _id:        string;
    nombre:     string;
    fecha:      string;
    imagen:     string;
    comentario: string;
    __v:        number;
}
