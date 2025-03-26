import { Component } from '@angular/core';
import { UsuarioComponent } from './user/usuario/usuario.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [UsuarioComponent], // Importamos el componente directamente
  template: `
    <h1>Bienvenido a mi aplicación Angular 🎉</h1>
    <app-usuario></app-usuario>
  `
})
export class AppComponent { }