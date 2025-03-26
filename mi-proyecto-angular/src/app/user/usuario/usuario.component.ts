import { Component } from '@angular/core';

@Component({
  selector: 'app-usuario',
  standalone: true, // Importante para standalone
  template: `<p>Hola, soy un usuario de Angular 🚀</p>`,
  styles: [`p { font-size: 20px; color: blue; }`]
})
export class UsuarioComponent { }
