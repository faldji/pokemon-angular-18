import {Component, OnInit} from '@angular/core';
import {AuthService} from "../auth.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  message: string;
  username: string;
  password: string;

  constructor(public authService: AuthService, private router: Router) {
  }

  ngOnInit(): void {
    this.message = 'Test pikachu/pikachu';
  }

  setMessage(): void {
    if (this.authService.isLoggedIn) {
      this.message = 'connexion succès';
    } else {
      this.message = 'erreur de connexion';
    }
  }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(isLoggedIn => {
      this.setMessage();
      if (isLoggedIn) {
        this.router.navigate(['/pokemons']);
      } else {
        this.password = '';
      }
    })
  }
}
