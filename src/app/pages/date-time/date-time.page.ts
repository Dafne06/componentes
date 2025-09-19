import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.page.html',
  styleUrls: ['./date-time.page.scss'],
  standalone: false
})
export class DateTimePage implements OnInit {
  fechanaci = new Date();

  customYearValues = ['2020', '2021', '2022', '2023', '2024'];
  customPickerOptions={
    buttons:[
      {
        text:'Hoy',
        handler: (event:any)=>{
          console.log(event);
        }
      },
      {
        text:'Ayer',
        handler: (event:any)=>{
          console.log(event);
        }
      },
    ]
  }
  constructor() { }

  ngOnInit() {
  }
  cambioFecha(event:any){
    console.log(event);
    console.log(new Date (event.detail.value));
   // this.fechanaci=new Date(event.detail.value);
  }
}
