import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Pokemon} from "../pokemon";
import {Location} from "@angular/common";
import {PokemonService} from "../pokemon.service";

@Component({
  selector: 'app-detail-pokemon',
  templateUrl: './detail-pokemon.component.html',
  styles: ``
})
export class DetailPokemonComponent implements OnInit {
  public currentPokemon: Pokemon | undefined;

  constructor(private route: ActivatedRoute, private location: Location, private router: Router, private pokemonService: PokemonService) {
  }

  ngOnInit(): void {
    const pokemonId: string | null = this.route.snapshot.params['id'];
    if (pokemonId) {
      this.pokemonService.getPokemonById(pokemonId).subscribe(result => {
        this.currentPokemon = result
      });
    }
  }

  goBack(): void {
    this.location.back();
  }

  goToEditPokemon(pokemon: Pokemon) {
    this.router.navigate(['edit/pokemon', pokemon.id]);
  }

  deletePokemon(currentPokemon: Pokemon) {
    this.pokemonService.deletePokemon(currentPokemon.id).subscribe(() => this.router.navigate(['pokemons']));
  }
}
