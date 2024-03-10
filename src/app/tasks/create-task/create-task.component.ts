import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../layout/button/button.component';
import { CommonModule, DatePipe } from '@angular/common';
import { User } from '../../models';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectUsers } from '../../state/selectors';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent],
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent implements OnInit, OnDestroy {
  creationDate = new Date();

  users: User[] | null = null;
  users$!: Observable<User[] | null>
  usersSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.users$ = this.store.pipe(select(selectUsers));
    this.usersSubscription = this.users$.subscribe(users => this.users = users);
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }
}
