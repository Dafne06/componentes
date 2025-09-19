import { Component, OnInit } from '@angular/core';
import { ModalController } from '@ionic/angular';
import { ModalInfoPage } from '../modal-info/modal-info.page';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.page.html',
  styleUrls: ['./modal.page.scss'],
  standalone: false
})
export class ModalPage implements OnInit {

  //message = 'This modal example uses the modalController to present and dismiss modals.';

  constructor( private modalCtrl: ModalController) { }

  ngOnInit() {
  }

  async abrirModal() {
    const modal = await this.modalCtrl.create({
      component: ModalInfoPage,
      componentProps: {
        nombre: 'Dafne',
        pais: 'España'
      }
    });
    await modal.present();

    const {data} = await modal.onDidDismiss();
    console.log('Retorno del modal', data);

  }
}
/*
    const { data, role } = await modal.onWillDismiss();

    if (role === 'confirm') {
      this.message = `Hello, ${data}!`;
    }*/
