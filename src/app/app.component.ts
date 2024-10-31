import {Component} from '@angular/core';
import {RouterLink, RouterOutlet} from '@angular/router';
import {CommonModule} from "@angular/common";
import {LogoutComponent} from "./logout/logout.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, CommonModule, LogoutComponent, RouterLink],
  templateUrl: './app.component.html'
})
export class AppComponent {
}

