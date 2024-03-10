import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { selectModalComponent, selectModalTask, selectModalTaskId } from '../../state/selectors';
import { closeModal } from '../../state/actions';
import { ModalComponents, ModalTitles, TaskWithUser } from '../../models';

@Component({
  selector: 'app-modal-window',
  templateUrl: './modal-window.component.html',
  styleUrl: './modal-window.component.scss'
})
export class ModalWindowComponent implements OnInit, OnDestroy {
  @Input() modalContent: string = '';

  modalTitle = '';

  componentToShow!: string | null;
  componentToShow$!: Observable<string | null>;
  componentToShowSubscription!: Subscription;

  task!: TaskWithUser | null;
  task$!: Observable<TaskWithUser | null>;
  taskSubscription!: Subscription;

  constructor(private store: Store) {}

  ngOnInit(): void {
    this.componentToShow$ = this.store.pipe(select(selectModalComponent));
    this.componentToShowSubscription = this.componentToShow$.subscribe(component => {
      console.log(component);
      this.modalTitle = component === ModalComponents.ADD_TASK ? ModalTitles.ADD_TASK : ModalTitles.VIEW_TASK;
      this.componentToShow = component;
    });

    this.task$ = this.store.pipe(select(selectModalTask));
    this.taskSubscription = this.task$.subscribe(task => {
      this.task = task;
    });
  }

  ngOnDestroy(): void {
    this.componentToShowSubscription.unsubscribe();
    this.taskSubscription.unsubscribe();
  }

  close(e: any) {
    console.log('Closing modal');
    e.preventDefault();
    this.store.dispatch(closeModal());
  }
}
