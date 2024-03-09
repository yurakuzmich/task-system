import { Component } from '@angular/core';
import { MenuItem } from '../../models';

@Component({
  selector: 'app-main-menu',
  templateUrl: './main-menu.component.html',
  styleUrl: './main-menu.component.scss'
})
export class MainMenuComponent {
  menuItems: MenuItem[] = [
    {
      title: 'Главная страница',
      link: '/',
      icon: '',
      label: null
    },
    {
      title: 'Управление задачами',
      link: '/tasks',
      icon: '',
      label: null
    },
    {
      title: 'Календарь',
      link: '/calendar',
      icon: '',
      label: null
    },
    {
      title: 'Команда',
      link: '/team',
      icon: '',
      label: null
    },
    {
      title: 'Статистика',
      link: '/stats',
      icon: '',
      label: null
    },
    {
      title: 'Профиль',
      link: '/profile',
      icon: '',
      label: null
    },
  ];
}
