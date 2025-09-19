import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.page.html',
  styleUrls: ['./input.page.scss'],
  standalone:false
})
export class InputPage implements OnInit {
  nombre: string='ROCOSO';
  usuario={
    email:'',
    password:''
  }
  //formulario: any;

 /*  customCounterFormatter(inputLength: number, maxLength: number) {
    return `${maxLength - inputLength} characters remaining`;
  }
*/
  constructor() { }

  ngOnInit() {
  }

  onSubmit(formulario:NgForm){ {
    console.log('Formulario enviado', this.usuario);
    console.log(formulario);
  }}
}
