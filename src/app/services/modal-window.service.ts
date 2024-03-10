import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModalWindowService {
  private isModalOpenedSubject: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);
  public isModalOpened: Observable<boolean> = this.isModalOpenedSubject.asObservable();

  constructor() {}

  get isOpened(): Observable<boolean> {
    return this.isModalOpened;
  }

  openModal() {
    console.log('Open Modal');
    this.isModalOpenedSubject.next(true);
  }

  closeModal() {
    console.log('Close Modal');
    this.isModalOpenedSubject.next(false);
  }
}
