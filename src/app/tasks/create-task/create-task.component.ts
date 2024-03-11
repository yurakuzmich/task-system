import { Component, OnDestroy, OnInit } from '@angular/core';
import { ButtonComponent } from '../../layout/button/button.component';
import { CommonModule, DatePipe } from '@angular/common';
import { User } from '../../models';
import { Observable, Subscription } from 'rxjs';
import { Store, select } from '@ngrx/store';
import { selectUsers } from '../../state/selectors';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { closeModal, createTask, showState } from '../../state/actions';

@Component({
  standalone: true,
  imports: [CommonModule, ButtonComponent, ReactiveFormsModule],
  selector: 'app-create-task',
  templateUrl: './create-task.component.html',
  styleUrl: './create-task.component.scss'
})
export class CreateTaskComponent implements OnInit, OnDestroy {
  creationDate = new Date();

  users: User[] | null = null;
  users$!: Observable<User[] | null>
  usersSubscription!: Subscription;

  createTaskForm!: FormGroup;

  titleControl = new FormControl('', Validators.required);
  descriptionControl = new FormControl('');
  priorityControl = new FormControl('', Validators.required);
  userControl = new FormControl('', Validators.required);

  constructor(private store: Store, private fb: FormBuilder,) {

    // this.createTaskForm = this.fb.group({
    //   title: this.titleControl,
    //   description: this.descriptionControl,
    //   priority: this.priorityControl,
    //   user: this.userControl,
    // });
  }

  ngOnInit(): void {

    this.createTaskForm = this.fb.group({
      title: this.titleControl,
      description: this.descriptionControl,
      priority: this.priorityControl,
      userId: this.userControl,
    });
    this.users$ = this.store.pipe(select(selectUsers));
    this.usersSubscription = this.users$.subscribe(users => this.users = users);
  }

  ngOnDestroy(): void {
    this.usersSubscription.unsubscribe();
  }

  get formValid() {
    return this.createTaskForm.valid;
  }

  submitTask() {
    this.validateForm();

    if (this.formValid) {
      const newTask = {
        ...this.createTaskForm.value,
        userId: Number(this.createTaskForm.controls['userId'].value),
        date: Date.now(),
        id: Math.round(Math.random()*10000),
      };
      this.store.dispatch(createTask({task: newTask}));
      this.store.dispatch(showState());
      this.store.dispatch(closeModal());
    };
  }

  validateForm() {
    Object.values(this.createTaskForm.controls).forEach(control => control.markAsTouched());
  }
}
