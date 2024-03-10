import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { User } from '../../models';
import { UsersService } from '../../services/users.service';
import { ModalWindowService } from '../../services/modal-window.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit {
  @Input() currentUser!: User | null;
  @Output() openCreateTaskModal = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {}

  addTaskButtonHandler() {
    this.openCreateTaskModal.emit();
  }
}
