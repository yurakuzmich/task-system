import { Component, Input } from '@angular/core';
import { MenuItem } from '../../models';

@Component({
  selector: 'app-main-menu-item',
  templateUrl: './main-menu-item.component.html',
  styleUrl: './main-menu-item.component.scss'
})
export class MainMenuItemComponent {
  @Input() props!: MenuItem;
}
