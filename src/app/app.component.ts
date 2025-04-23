import { Component } from '@angular/core';
import { NavMenuComponent } from './components/nav-menu/nav-menu.component';
import { AppContainerComponent } from "./app-container/app-container.component";

@Component({
  selector: 'app-root',
  imports: [AppContainerComponent, AppContainerComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'IRCTC';
}
