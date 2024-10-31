import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {AuthService} from "../auth.service";
import {NgIf} from "@angular/common";

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [
    NgIf
  ],
  template: `
    <div><a *ngIf="auth.isLoggedIn" class="waves-effect waves-light btn-large right red" (click)="logout()"><i
        class="material-icons left">logout</i>Se déconnecter</a></div>

  `,
  styles: ``
})
export class LogoutComponent implements OnInit {
  constructor(private _router: Router, public auth: AuthService) {
  }

  ngOnInit(): void {
  }

  logout() {
    this.auth.logout();
    this._router.navigate(['login']);
  }

}
