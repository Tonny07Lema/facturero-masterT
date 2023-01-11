export class Usuario {
    username: string=" ";
    password : string=" " ;
    confirmPassword? : string;
}
export class Cliente {
    id!:number;
    tipoIdentificacion: string="";
    identificacionNumero: string="";
    nombre: string="";
    direccion: string="";
    telefono: string="";
    correoElectronico: string="";
}

export class Servicio {
    id!:number;
    descripcion: string="";
    precioUnitario!:number;
    usuarioId!: number;
}

export class Detalle {
    cantidad!: number;
    precioUnitario!: number;
    total!: number;
    servicioId!: number;
    nombreProducto?:string;

}

export class Factura {
    fechaDeEmision!: Date;
    subtotal!: number;
    impuesto!: number;
    total!: number;
    clienteId!: number;
    usuarioId!: number;
    detalles!: Detalle[];
}