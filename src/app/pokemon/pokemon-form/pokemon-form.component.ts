import {Component, Input, OnInit} from '@angular/core';
import {PokemonService} from "../pokemon.service";
import {Pokemon} from "../pokemon";
import {Router} from "@angular/router";

@Component({
  selector: 'app-pokemon-form',
  templateUrl: './pokemon-form.component.html',
  styleUrls: ['./pokemon-form..component.css']
})
export class PokemonFormComponent implements OnInit {
  @Input() pokemon: Pokemon | any;
  types: string[] = [];
  isAddForm: boolean = false;

  constructor(private _pokemonService: PokemonService, private router: Router) {
  }

  ngOnInit(): void {
    this.types = this._pokemonService.getPokemonTypeList();
    this.isAddForm = this.router.url.includes('add')
  }

  hasType(type: string): boolean {
    return this.pokemon.types.includes(type);
  }

  selectType(event: Event, type: string): void {
    const isChecked = (event.target as HTMLInputElement).checked;
    if (isChecked) {
      this.pokemon.types.push(type);
    } else {
      const index = this.pokemon.types.indexOf(type);
      if (index > -1) {
        this.pokemon.types.splice(index, 1);
      }
    }
  }

  onSubmit(): void {
    console.log('Form submitted');
    if (this.isAddForm) {
      this._pokemonService.addPokemon(this.pokemon).subscribe((pokemon: Pokemon) => this.router.navigate(['pokemon', pokemon.id]));
    } else {
      this._pokemonService.updatePokemon(this.pokemon).subscribe(() => this.router.navigate(['pokemon', this.pokemon.id]));
    }
  }

  isTypesValid(type: string): boolean {
    if (this.pokemon.types.length == 1 && this.hasType(type)) {
      return false;
    }
    return !(this.pokemon.types.length > 2 && !this.hasType(type));
  }
}
