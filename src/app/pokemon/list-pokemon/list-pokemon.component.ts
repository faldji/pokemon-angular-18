import {Component, OnInit} from '@angular/core';
import {Pokemon} from "../pokemon";
import {ActivatedRoute, Router} from "@angular/router";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-list-pokemon',
  templateUrl: './list-pokemon.component.html',
  styles: ``
})
export class ListPokemonComponent implements OnInit {
  title = 'Liste de pokemons';
  public pokemons: Pokemon[];

  constructor(private route: ActivatedRoute, private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    this.pokemonService.getPokemonList().subscribe(pokemons => this.pokemons = pokemons);
  }

  selectPokemon(pokemon: Pokemon) {
    this.router.navigate(['pokemon', pokemon.id])
  }
}
