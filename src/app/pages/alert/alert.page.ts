import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.page.html',
  styleUrls: ['./alert.page.scss'],
  standalone:false
})
export class AlertPage implements OnInit {
  onClick: any;

  constructor(private alertCtrl: AlertController) { }

  ngOnInit() {
  }

  async presentAlert() {
    const alert = await this.alertCtrl.create({
      backdropDismiss: false, //debe dar click en una opcion
      header: 'A Short Title Is Best',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: ['Action'],
    });

    await alert.present();
  }

   async presentAlertMultipleButtons() {
    const alert = await this.alertCtrl.create({
      header: 'Alert',
      subHeader: 'A Sub Header Is Optional',
      message: 'A message should be a short, complete sentence.',
      buttons: [
      {
         text: 'OK',
         role: 'confirm',
         handler: () => {
           console.log('Alert confirmed');
      },
      },
      {
        text:'Cancelar',
        role: 'cancel',
        cssClass: 'rojo'
      },
      ],
    });

    await alert.present();
  }

  async presentAlertPrompt(){
    const alert = await this.alertCtrl.create({
    buttons : [
      {
        text: 'OK',
        handler: (data:any)=>{
          console.log(data)
        }
      }
    ],
    inputs : [
     {
       placeholder: 'Name',
     },
     {
       placeholder: 'Nickname (max 8 characters)',
       attributes: {
         maxlength: 8,
       },
     },
     {
       type: 'number',
       placeholder: 'Age',
       min: 1,
       max: 100,
     },
     {
       type: 'textarea',
       placeholder: 'A little about yourself',
     },
    ]
  });
  await alert.present();
  }
}
