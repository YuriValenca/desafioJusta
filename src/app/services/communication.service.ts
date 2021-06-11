import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CommunicationService {
  private messageSource = new BehaviorSubject('bulbasaur');

  currentMessage = this.messageSource.asObservable();

  constructor() {}

  sendConsulta(message: string) {
    this.messageSource.next(message);
  }
}
