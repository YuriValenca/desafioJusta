import { abilities } from './abilities';
import { adtInfo } from './adtInfo';
import { gameIndex } from './gameIndex';
import { heldItem } from './heldItem';
import { sprites } from './sprites';
import { stats } from './stats';
import { Types } from './types';

export class pokeInfo {
  abilities: abilities[] = [];
  base_experience: string = '';
  forms: adtInfo[] = [];
  game_indices: gameIndex[] = [];
  height: string = '';
  held_item: heldItem[] = [];
  id: string = '';
  is_default: boolean = false;
  location_area_encounters: string = '';

  name: string = '';
  order: string = '';

  species: adtInfo = new adtInfo();
  sprites: sprites = new sprites();
  stats: stats[] = [];
  types: Types[] = [];
  weight: string = '';
}
