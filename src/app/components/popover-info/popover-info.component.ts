import { Component, OnInit } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { IonLabel } from "@ionic/angular/standalone";

@Component({
  selector: 'app-popover-info',
  templateUrl: './popover-info.component.html',
  styleUrls: ['./popover-info.component.scss'],
  standalone: false,
})
export class PopoverInfoComponent  implements OnInit {

  items = Array(40);
  constructor(private popoverCtrl: PopoverController) { }

  ngOnInit() {}

  onClick(valor: number) {
    this.popoverCtrl.dismiss({
      item: valor
    });
  }

}
