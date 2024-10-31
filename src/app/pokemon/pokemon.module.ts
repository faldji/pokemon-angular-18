import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ListPokemonComponent} from "./list-pokemon/list-pokemon.component";
import {DetailPokemonComponent} from "./detail-pokemon/detail-pokemon.component";
import {BorderCardDirective} from "./border-card.directive";
import {PokemonTypeColorPipe} from "./pokemon-type-color.pipe";
import {RouterModule, Routes} from "@angular/router";
import {PokemonService} from "./pokemon.service";
import {PokemonFormComponent} from "./pokemon-form/pokemon-form.component";
import {FormsModule} from "@angular/forms";
import {PokemonEditComponent} from "./pokemon-edit/pokemon-edit.component";
import {InMemoryDataService} from "../in-memory-data.service";
import {PokemonAddComponent} from "./pokemon-add/pokemon-add.component";
import {SearchPokemonComponent} from "./search-pokemon/search-pokemon.component";
import {LoaderComponent} from "../loader/loader.component";
import {AuthGuard} from "../auth.guard";
import {LoginComponent} from "../login/login.component";
import {LogoutComponent} from "../logout/logout.component";

export const pokemonRoutes: Routes = [
  {path: 'add/pokemon', component: PokemonAddComponent, canActivate: [AuthGuard]},
  {path: 'pokemons', component: ListPokemonComponent, canActivate: [AuthGuard]},
  {path: 'pokemon/:id', component: DetailPokemonComponent, canActivate: [AuthGuard]},
  {path: 'edit/pokemon/:id', component: PokemonEditComponent, canActivate: [AuthGuard]},
];

@NgModule({
  declarations: [
    LoginComponent,
    ListPokemonComponent,
    DetailPokemonComponent,
    PokemonFormComponent,
    PokemonEditComponent,
    PokemonAddComponent,
    SearchPokemonComponent,
    LoaderComponent,
    PokemonTypeColorPipe,
    BorderCardDirective,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(pokemonRoutes),
    FormsModule,
    LogoutComponent,
  ],
  providers: [PokemonService, InMemoryDataService],
  exports: [RouterModule]
})
export class PokemonModule {
}
