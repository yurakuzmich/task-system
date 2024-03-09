import { Component, OnInit } from '@angular/core';
import { User } from '../../models';
import { UsersService } from '../../services/users.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {

  currentUser: User | {} = {};

  constructor(private usersService: UsersService) { }

  ngOnInit() {
    this.usersService.getCurrentUser().subscribe((data) => {
      this.currentUser = data;
      console.log(this.currentUser);
    });
  }
}
