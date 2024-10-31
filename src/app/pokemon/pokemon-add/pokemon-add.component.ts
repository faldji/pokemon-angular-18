import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";

@Component({
  selector: 'app-pokemon-add',
  template: `
    <h2 class="center">
      Ajouter un nouveau pokemon
    </h2>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class PokemonAddComponent implements OnInit {
  pokemon: Pokemon | undefined;

  ngOnInit(): void {
    this.pokemon = new Pokemon();
  }
}
