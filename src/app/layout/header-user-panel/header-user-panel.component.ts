import { Component, Input } from '@angular/core';
import { User } from '../../models';
import { LoginService } from '../../services/login.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header-user-panel',
  templateUrl: './header-user-panel.component.html',
  styleUrl: './header-user-panel.component.scss'
})
export class HeaderUserPanelComponent {
  @Input() currentUser!: User | null;

  constructor(
    // private loginService: LoginService,
    private authService: AuthService)  {}

  get isLoggedIn() {
    return this.authService.isLoggedIn();
  }

  get userAvatar() {
    const avatar = (this.currentUser) ?
      (this.currentUser as User).avatar :
      '';

    return avatar;
  }

  get userName() {
    const name = (this.currentUser) ?
      (this.currentUser as User).displayName :
      '';

    return name;
  }

  // logIn(e: any) {
  //   e.preventDefault();
  //   this.loginService.login();
  // }
}
