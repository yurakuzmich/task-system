import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SidebarComponent } from './layout/sidebar/sidebar.component';
import { LoginComponent } from './layout/login/login.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainMenuComponent } from './layout/main-menu/main-menu.component';
import { MainMenuItemComponent } from './layout/main-menu-item/main-menu-item.component';
import { MainLogoComponent } from './layout/main-logo/main-logo.component';
import { MainPageComponent } from './layout/main-page/main-page.component';
import { HeaderUserPanelComponent } from './layout/header-user-panel/header-user-panel.component';
import { ModalWindowComponent } from './layout/modal-window/modal-window.component';
import { TaskComponent } from './tasks/task/task.component';

import { StoreModule } from '@ngrx/store';
import { appReducer } from './state/reducer';
import { CreateTaskComponent } from './tasks/create-task/create-task.component';
import { ButtonComponent } from './layout/button/button.component';

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    LoginComponent,
    HeaderComponent,
    MainMenuComponent,
    MainMenuItemComponent,
    MainLogoComponent,
    MainPageComponent,
    HeaderUserPanelComponent,
    ModalWindowComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StoreModule.forRoot({ app: appReducer }),
    TaskComponent,
    CreateTaskComponent,
    ButtonComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
