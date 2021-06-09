import { Component, OnInit } from '@angular/core';
import { RequestService } from 'src/app/http/request.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  srchopt: string = '';

  searchInput: string = 'ditto';

  constructor(private requestService: RequestService) {}

  ngOnInit() {
    this.searchPoke();
  }

  searchPoke() {
    this.requestService.searchByName(this.searchInput);
  }

  changePlaceholder(nome: string) {
    this.srchopt = nome;
  }
}
