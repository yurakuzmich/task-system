import { Component, Input } from '@angular/core';
import { User } from '../../models';

@Component({
  selector: 'app-header-user-panel',
  templateUrl: './header-user-panel.component.html',
  styleUrl: './header-user-panel.component.scss'
})
export class HeaderUserPanelComponent {
  @Input() currentUser!: User | {};

  get isLoggedIn() {
    return this.currentUser && Object.keys(this.currentUser).length > 0;
  }

  get userAvatar() {
    const avatar = (this.currentUser && Object.keys(this.currentUser).length > 0) ?
      (this.currentUser as User).avatar :
      '';

    return avatar;
  }

  get userName() {
    const name = (this.currentUser && Object.keys(this.currentUser).length > 0) ?
      (this.currentUser as User).displayName :
      '';

    return name;
  }
}
