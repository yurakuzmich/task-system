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
    this.isModalOpenedSubject.next(true);
  }

  closeModal() {
    this.isModalOpenedSubject.next(false);
  }
}
