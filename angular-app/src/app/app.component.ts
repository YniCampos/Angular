import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Ejemplo 1: Contador que aumenta y disminuye de dos en dos
  contadorPares: number = 0;

  aumentarPar() {
    this.contadorPares += 2;
  }

  disminuirPar() {
    this.contadorPares -= 2;
  }

  // Ejemplo 2: Contador que solo suma pares y se detiene en 20
  contadorHasta20: number = 0;

  aumentarParHasta20() {
    if (this.contadorHasta20 < 20) {
      this.contadorHasta20 += 2;
    }
  }

  // Ejemplo 3: Contador reversible que alterna entre pares positivos y negativos
  contadorAlternante: number = 0;
  esPositivo: boolean = true;


  
}
