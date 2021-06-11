import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { RequestService } from 'src/app/http/request.service';
import { abilities } from 'src/app/models/abilities';
import { adtInfo } from 'src/app/models/adtInfo';
import { gameIndex } from 'src/app/models/gameIndex';
import { stats } from 'src/app/models/stats';
import { Types } from 'src/app/models/types';
import { CommunicationService } from 'src/app/services/communication.service';

@Component({
  selector: 'app-pokemonDetails',
  templateUrl: './pokemonDetails.component.html',
  styleUrls: ['./pokemonDetails.component.scss']
})
export class PokemonDetailsComponent implements OnInit, OnDestroy {
  message: string = '';
  subscription: Subscription = new Subscription();
  pokeImg: string = '';
  pokeName: string = '';
  pokeNumber: string = '';
  pokeTypes: Types[] = [];
  pokeHeight: string = '';
  numPokeHeight: number = 0;
  pokeWeight: string = '';
  numPokeWeight: number = 0;
  pokeAbility: abilities[] = [];
  pokeStats: stats[] = [];

  constructor(
    private communication: CommunicationService,
    private requestService: RequestService
  ) {}

  ngOnInit() {
    this.subscription = this.communication.currentMessage.subscribe((message) =>
      this.searchPoke(message)
    );
  }

  async searchPoke(pokeName: string) {
    const response = await this.requestService.searchByName(pokeName);

    this.pokeImg = response.sprites.other['official-artwork'].front_default;
    this.pokeName = response.name;
    this.pokeNumber = response.id;
    this.pokeTypes = response.types;
    this.pokeHeight = response.height;
    this.pokeWeight = response.weight;
    this.pokeAbility = response.abilities;
    this.pokeStats = response.stats;
    this.numPokeHeight = Number(this.pokeHeight);
    this.numPokeWeight = Number(this.pokeWeight);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
