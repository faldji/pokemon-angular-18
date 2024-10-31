import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {ActivatedRoute} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-pokemon-edit',
  template: `
    <h2 class="center">
      Modifier {{ pokemon?.name }}
    </h2>
    <p *ngIf="pokemon" class="center">
      <img [src]="pokemon.picture" alt="{{pokemon.name}}"/>
    </p>
    <app-pokemon-form [pokemon]="pokemon"></app-pokemon-form>
  `,
  styles: ``
})
export class PokemonEditComponent implements OnInit {
  pokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.params['id'];
    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(result => {
        this.pokemon = result
      });
    }
  }

}
