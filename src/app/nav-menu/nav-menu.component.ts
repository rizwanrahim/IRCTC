import { Component } from '@angular/core';
import { AppConstants } from '../app-constant';

@Component({
  selector: 'nav-menu',
  imports: [],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  readonly logoPath = AppConstants.LOGO_PATH;
}
