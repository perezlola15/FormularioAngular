import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ModoOscuroService {
  private modoOscuroActivado: boolean = false;

  activarModoOscuro(): void {
    this.modoOscuroActivado = true;
    this.aplicarEstilos();
  }

  desactivarModoOscuro(): void {
    this.modoOscuroActivado = false;
    this.aplicarEstilos();
  }

  toggleModoOscuro(activar: boolean): void {
    this.modoOscuroActivado = activar;
    this.aplicarEstilos();
  }

  private aplicarEstilos(): void {
    const body = document.body;
    const h2Element = document.querySelector('h2');

    if (this.modoOscuroActivado) {
      body.style.backgroundColor = 'black';
      body.style.color = 'white';
      if (h2Element) {
        h2Element.style.color = 'white';
      }
    } else {
      body.style.backgroundColor = '';
      body.style.color = '';
      if (h2Element) {
        h2Element.style.color = '';
      }
    }
  }
}
