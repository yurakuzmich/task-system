import { Component, OnDestroy, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { User } from '../../models';
import { selectCurrentUser } from '../../state/selectors';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-profile',
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent implements OnInit, OnDestroy{

  currentUser!: User | null;
  userSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.userSubscription = this.store.select(selectCurrentUser).subscribe(user => this.currentUser = user);
  }

  ngOnDestroy(): void {
    this.userSubscription.unsubscribe();
  }
}
