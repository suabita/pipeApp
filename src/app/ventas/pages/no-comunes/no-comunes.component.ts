import { Component } from '@angular/core';
import { interval } from 'rxjs';

@Component({
  selector: 'app-no-comunes',
  templateUrl: './no-comunes.component.html',
  styles: [
  ]
})
export class NoComunesComponent  {
  //i18nSelect
  nombre: string = 'Susana';
  genero: string = 'femenino';

  invitacionMapa = {
    'masculino': 'invitarlo',
    'femenino': 'invitarla'
  }

   //i18nPural
   clientes: string[] = ['Maria', 'Juan', 'Pedro', 'Eduardo', 'Fernando'];
   clientesMapa = {
     '=0': 'no tenemos ningún cliente esperando.',
     '=1': 'tenemos un cliente esperando.',
     '=2': 'tenemos dos clientes esperando.',
     'other': 'tenemos # clientes esperando.'
   }

   cambiarNombre() {
    this.nombre = "Fernando",
    this.genero = "masculino"
   }

   borrarCliente() {
     this.clientes.pop();

   }

   // keyValue Pipe
   persona = {
     nombre: "Fernando",
     edad: 35,
     direccion: 'Ottawa, Canadá'
   }

   //JsonPipe
   heroes = [
   {
     nombre: "superman",
     vuela: true
   },
   {
    nombre: "robin",
    vuela: false
  },
  {
    nombre: "aquaman",
    vuela: false
  },
  ]


  //Async Pipe
  miObservable = interval(2000); //0,1,2,3,4,5,6,


  valorPromesa = new Promise((resolve, reject) =>{
  setTimeout(() => {
    resolve('tenemos data de promesa');
  }, 3500)

  });
}
