// validacion.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})

export class ValidacionService {
  validarCampoVacio(valor: string): boolean {
    return valor.trim() !== '';
  }

  validarEmail(email: string): boolean {
    return /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(email);
  }

  validarContrasena(contrasena: string, repetirContrasena: string): boolean {
    return contrasena === repetirContrasena;
  }
}
