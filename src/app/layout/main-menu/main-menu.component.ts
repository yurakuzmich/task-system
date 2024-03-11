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
      class: 'home',
      label: null
    },
    {
      title: 'Управление задачами',
      link: '/tasks',
      class: 'tasks',
      label: null
    },
    {
      title: 'Календарь',
      link: '/calendar',
      class: 'calendar',
      label: null
    },
    {
      title: 'Команда',
      link: '/team',
      class: 'team',
      label: null
    },
    {
      title: 'Статистика',
      link: '/stats',
      class: 'stats',
      label: null
    },
    {
      title: 'Профиль',
      link: '/profile',
      class: 'profile',
      label: null
    },
    {
      title: 'Настройки',
      link: '/settings',
      class: 'settings',
      label: null
    },
  ];
}
