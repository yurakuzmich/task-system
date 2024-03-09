import { Component } from '@angular/core';
import { MenuItem } from '../../models';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss'
})
export class SidebarComponent {
  logoutLink: MenuItem = {
    title: 'Logout',
    link: 'logout',
    icon: 'logout',
    label: null,
  };
}
