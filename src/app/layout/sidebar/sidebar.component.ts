import { Component, Input } from '@angular/core';
import { MenuItem, User } from '../../models';
import { LoginComponent } from '../login/login.component';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  logoutLink: MenuItem = {
    title: 'Logout',
    link: 'logout',
    class: 'logout',
    label: null,
  };

  constructor(private loginService: LoginService) {}

  logOut() {
    this.loginService.logOut();
  }
}
