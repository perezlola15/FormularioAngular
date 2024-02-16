import { Component } from '@angular/core';
import { ValidacionService } from '../servicios/validacion.service';
import { ModoOscuroService } from '../servicios/modo-oscuro.service';
import { Registro } from '../models/Registro';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent {
  nombre: string = '';
  apellido1: string = '';
  apellido2: string = '';
  telefono: string = '';
  fecha_nac: string = '';
  email: string = '';
  contrasena: string = '';
  contrasena_rep: string = '';

  modoOscuroActivado: boolean = false;

  constructor(private validacionService: ValidacionService, private modoOscuroService: ModoOscuroService) {}

  validarCampoVacio(valor: string): boolean {
    return this.validacionService.validarCampoVacio(valor);
  }

  validarEmail(email: string): boolean {
    return this.validacionService.validarEmail(email);
  }

  validarContrasena(): boolean {
    return this.validacionService.validarContrasena(this.contrasena, this.contrasena_rep);
  }

  generarContrasena(): void {
    let longitud: number = 16;
    let caracteres: string = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    let contrasenaGenerada: string = '';

    for (let i = 0; i < longitud; i++) {
        let indiceCaracter: number = Math.floor(Math.random() * caracteres.length);
        contrasenaGenerada += caracteres.charAt(indiceCaracter);
    }

    // Formato de 4 bloques de digitos alfanumericos divididos por guiones medios
    let bloque1: string = contrasenaGenerada.substring(0, 4);
    let bloque2: string = contrasenaGenerada.substring(4, 8);
    let bloque3: string = contrasenaGenerada.substring(8, 12);
    let bloque4: string = contrasenaGenerada.substring(12, 16);

    var contrasenaFormateada: string = bloque1 + "-" + bloque2 + "-" + bloque3 + "-" + bloque4;

    // Autorellenamos los campos de contraseña y repetir contraseña
    let contrasenaInput: HTMLInputElement = document.getElementById('contrasena') as HTMLInputElement;
    let repetirContrasenaInput: HTMLInputElement = document.getElementById('contrasena_rep') as HTMLInputElement;
    contrasenaInput.value = contrasenaFormateada;
    repetirContrasenaInput.value = contrasenaFormateada;
  }

  mostrarContrasena(): void {
    let contrasenaInput: HTMLInputElement | null = document.getElementById("contrasena") as HTMLInputElement;
    if (contrasenaInput) {
        if (contrasenaInput.type === "password") {
            // Si el tipo es password, se cambia a text para mostrar el texto
            contrasenaInput.type = "text";
        } else {
            // Si el tipo no es password, se cambia a password para ocultar el texto
            contrasenaInput.type = "password";
        }
    }
  }

  toggleModoOscuro(): void {
    this.modoOscuroService.toggleModoOscuro(this.modoOscuroActivado);
  }

  registraFormulario(): void {
    // Obtenemos los valores de los campos del formulario
    let nombre: string = (document.getElementById('nombre') as HTMLInputElement).value.trim();
    let apellido1: string = (document.getElementById('apellido1') as HTMLInputElement).value.trim();
    let apellido2: string = (document.getElementById('apellido2') as HTMLInputElement).value.trim();
    let telefono: string = (document.getElementById('telefono') as HTMLInputElement).value.trim();
    let fecha_nacInput: string = (document.getElementById('fecha_nac') as HTMLInputElement).value.trim();
    let fecha_nac: Date = new Date(fecha_nacInput);
    let email: string = (document.getElementById('email') as HTMLInputElement).value.trim();
    let contrasena: string = (document.getElementById('contrasena') as HTMLInputElement).value.trim();
    let contrasena_rep: string = (document.getElementById('contrasena_rep') as HTMLInputElement).value.trim();

    const nuevoRegistro: Registro = new Registro(
      nombre,
      apellido1,
      apellido2,
      telefono,
      fecha_nac,
      email,
      contrasena,
      contrasena_rep
    );

    console.log(nuevoRegistro.toString());
    alert(nuevoRegistro.toString());
  }
}

