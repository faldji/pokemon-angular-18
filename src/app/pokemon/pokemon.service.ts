import {Injectable} from '@angular/core';
import {Pokemon} from "./pokemon";
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable()
export class PokemonService {
  constructor(private http: HttpClient) {
  }

  getPokemonList(): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>('api/pokemons').pipe(
        tap(pokemonList => this.log(pokemonList)),
        catchError((error) => {
          return this.handleError(error, [])
        })
    );
  }

  getPokemonById(pokemonId: string): Observable<Pokemon | undefined> {
    return this.http.get<Pokemon | undefined>(`api/pokemons/${pokemonId}`).pipe(
        tap(pokemon => this.log(pokemon)),
        catchError((error) => {
          return this.handleError(error, [undefined])
        })
    );
  }

  addPokemon(pokemon: Pokemon): Observable<Pokemon> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.post<Pokemon>(`api/pokemons`, pokemon, httpOptions).pipe(
        tap(res => this.log(res)),
        catchError((error) => this.handleError(error, [undefined]))
    );
  }

  updatePokemon(pokemon: Pokemon): Observable<Pokemon | undefined> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.put(`api/pokemons`, pokemon, httpOptions).pipe(
        tap(res => this.log(res)),
        catchError((error) => {
          return this.handleError(error, [undefined])
        })
    );
  }

  deletePokemon(pokemonId: number): Observable<Pokemon | undefined> {
    const httpOptions = {headers: new HttpHeaders({'Content-Type': 'application/json'})};
    return this.http.delete(`api/pokemons/${pokemonId}`, httpOptions).pipe(
        tap(res => this.log(res)),
        catchError((error) => {
          return this.handleError(error, [undefined])
        })
    );
  }

  searchPokemonList(term: string): Observable<Pokemon[]> {
    return this.http.get<Pokemon[]>(`api/pokemons/?name=${term}`).pipe(
        tap((response) => this.log(response)),
        catchError((error) => this.handleError(error, []))
    );
  }

  private log(res: any) {
    console.table(res);
  }

  private handleError(err: Error, errorValue: any) {
    console.error(err);
    return of(errorValue);
  }

  getPokemonTypeList() {
    return [
      'Feu',
      'Eau',
      'Plante',
      'Insecte',
      'Normal',
      'Vol',
      'Poison',
      'Fée',
      'Psy',
      'Electric',
      'Combat'
    ];
  }
}
