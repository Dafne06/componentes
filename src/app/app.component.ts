import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { Componente } from './interfaces/interfaces';
import { DataService } from './services/data.service';
import { Platform } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: false,
})
export class AppComponent {
  componentes!: Observable<Componente[]>;


 /*   ngOnInit() {
      this.componentes = this.dataService.getMenuOpts();
    }*/
  constructor(private dataService: DataService, private platform: Platform) {
    this.initializeApp();
  }
  initializeApp() {
    this.platform.ready().then(() => {
      //this.statusBar.styleDefault();
      //this.splashScreen.hide();
      this.componentes = this.dataService.getMenuOpts();
    });
  }
}
