import { Component } from '@angular/core';
import { UserService } from '../UserService';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  animes: any;
  constructor(public userService: UserService) {}

  ionViewDidEnter() {
    this.userService.getUsers()
        .subscribe(
            (data) => {
              this.animes = data;
              console.log(this.animes);
            },
            (error) => {
              console.error(error);
            }
        );
  }
}
