import { Component, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';
import { IonList } from '@ionic/angular';

@Component({
  selector: 'app-list',
  templateUrl: './list.page.html',
  styleUrls: ['./list.page.scss'],
  standalone:false
})
export class ListPage implements OnInit {

  users!: Observable<any>;
  @ViewChild(IonList) ionList!: IonList;


  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.users = this.dataService.getUsers();
  }

  favorite(user: any) {
    console.log('Favorite user', user);
    this.ionList.closeSlidingItems();
  }

  share(user: any) {
    console.log('Share user', user);
    this.ionList.closeSlidingItems();
  }

  delete(user: any) {
    console.log('Delete user', user.name);
    this.ionList.closeSlidingItems();
  }
}
