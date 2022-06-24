import { Component } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Almoxarifado';

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    // this.usersService.findAll()
    // .subscribe({
    //   next: (users) => {
    //     console.log(users);
    //   }
    // })
  }
}
