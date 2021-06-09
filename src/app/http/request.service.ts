import { Injectable } from '@angular/core';
import axios from 'axios';
import { pokeInfo } from '../models/pokeInfo';

@Injectable({
  providedIn: 'root'
})
export class RequestService {
  async searchByName(pokeName: string): Promise<pokeInfo> {
    let user: pokeInfo = new pokeInfo();
    try {
      const data = await axios.get(
        `https://pokeapi.co/api/v2/pokemon/${pokeName}`
      );
      console.log(data);
    } catch (error) {
      console.log(error);
    }
    return user;
  }

  constructor() {}
}
