import { Component, OnInit, OnChanges, SimpleChanges, DoCheck, AfterContentInit, 
  AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, Input } from '@angular/core';

@Component({
selector: 'app-root',
templateUrl: './app.component.html',
styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, 
                              AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

@Input() contadorPares: number = 0;
@Input() contadorHasta20: number = 0;

constructor() {
console.log('Constructor: El componente ha sido creado.');
}

// 1. Detecta cambios en propiedades de entrada
ngOnChanges(changes: SimpleChanges) {
console.log('ngOnChanges: Cambios detectados en las propiedades:', changes);
}

// 2. Inicialización después de que las propiedades @Input hayan sido configuradas
ngOnInit() {
console.log('ngOnInit: El componente ha sido inicializado.');
}

// 3. Detecta cambios personalizados (puede ejecutarse con cada cambio de detección)
ngDoCheck() {
console.log('ngDoCheck: Detección de cambios manual.');
}

// 4. Se llama después de insertar contenido proyectado en el componente
ngAfterContentInit() {
console.log('ngAfterContentInit: El contenido proyectado ha sido inicializado.');
}

// 5. Después de verificar el contenido proyectado
ngAfterContentChecked() {
console.log('ngAfterContentChecked: El contenido proyectado ha sido verificado.');
}

// 6. Después de inicializar la vista y las vistas de los hijos del componente
ngAfterViewInit() {
console.log('ngAfterViewInit: La vista y las vistas hijas han sido inicializadas.');
}

// 7. Después de verificar las vistas del componente y sus hijos
ngAfterViewChecked() {
console.log('ngAfterViewChecked: La vista y las vistas hijas han sido verificadas.');
}

// 8. Antes de destruir el componente
ngOnDestroy() {
console.log('ngOnDestroy: El componente está a punto de ser destruido.');
}

// Métodos personalizados que interactúan con los contadores
aumentarPar() {
this.contadorPares += 2;
console.log(`Contador de pares aumentado: ${this.contadorPares}`);
}

disminuirPar() {
this.contadorPares -= 2;
console.log(`Contador de pares disminuyendo: ${this.contadorPares}`);
}

aumentarParHasta20() {
if (this.contadorHasta20 < 20) {
this.contadorHasta20 += 2;
console.log(`Contador de pares hasta 20 aumentado: ${this.contadorHasta20}`);
}
}
}
