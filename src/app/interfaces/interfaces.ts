export interface Pista {
    id: number;
    deporte: string;
    imagen: string;
    descripcion: string;
    precio: number
}

export interface Reserva {
    reserva_usuario: string;
    fecha: string;
    hora: string;
    nombre_cliente: string;
    apellido_cliente: string;
    email_cliente: string;
    dni_cliente: string;
    precio_final: number;
}