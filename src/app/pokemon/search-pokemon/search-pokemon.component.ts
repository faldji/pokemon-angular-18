import {Component, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {debounceTime, distinctUntilChanged, Observable, Subject, switchMap} from "rxjs";

@Component({
  selector: 'app-search-pokemon',
  templateUrl: './search-pokemon.component.html',
  styles: ``
})
export class SearchPokemonComponent implements OnInit {
  searchTerm = new Subject<string>();
  pokemons: Observable<Pokemon[]>;

  constructor(private _pokemonService: PokemonService, private _router: Router) {
  }

  ngOnInit(): void {
    this.pokemons = this.searchTerm.pipe(
        //{..."a"."ab"...."abz."ab"..."abc"....}
        debounceTime(300),
        //{..."a"."ab"...."abz."ab"..."abc"....}
        distinctUntilChanged(),
        //{....."ab"........."abc".......}
        switchMap((term) => this._pokemonService.searchPokemonList(term))
    );
  }

  search(term: string) {
    this.searchTerm.next(term);
  }

  goToDetailPokemon(pokemon: Pokemon) {
    this._router.navigate(['/pokemon', pokemon.id]);
  }
}
