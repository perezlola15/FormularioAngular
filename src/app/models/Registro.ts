export class Registro {
  nombre: string;
  apellido1: string;
  apellido2: string;
  telefono: string;
  fecha_nac: Date;
  email: string;
  contrasena: string;
  contrasena_rep: string;

  constructor(
    nombre: string,
    apellido1: string,
    apellido2: string,
    telefono: string,
    fecha_nac: Date,
    email: string,
    contrasena: string,
    contrasena_rep: string
  ) {
    this.nombre = nombre;
    this.apellido1 = apellido1;
    this.apellido2 = apellido2;
    this.telefono = telefono;
    this.fecha_nac = fecha_nac;
    this.email = email;
    this.contrasena = contrasena;
    this.contrasena_rep = contrasena_rep;
  }

  toString(): string {
    return "Nombre: " + this.nombre + "\nApellidos: " + this.apellido1
        + " " + this.apellido2 + "\nTeléfono: " + this.telefono + "\nFecha de Nacimiento: "
        + this.fecha_nac.getDate() + "-" + (this.fecha_nac.getMonth() + 1) + "-" +
        this.fecha_nac.getFullYear() + "\nEmail: " + this.email + "\nContraseña: " + this.contrasena
        + "\nContraseña repetida: " + this.contrasena_rep;
}
}
