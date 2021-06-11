import { OnDestroy, Output } from '@angular/core';
import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit, OnDestroy {
  srchopt: string = 'name';
  namePoke: string = '';
  peso: string = '';
  searchInput: string = '';

  message: string = '';
  subscription: Subscription = new Subscription();

  constructor(private communication: CommunicationService) {}

  ngOnInit() {
    this.subscription = this.communication.currentMessage.subscribe(
      (message) => (this.message = message)
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  sendConsulta() {
    this.communication.sendConsulta(this.searchInput);
  }

  changePlaceholder(nome: string) {
    this.srchopt = nome;
  }
}
