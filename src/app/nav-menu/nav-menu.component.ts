import { Component } from '@angular/core';
import { AppConstants } from '../app-constant';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
@Component({
  selector: 'nav-menu',
  imports: [MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  readonly logoPath = AppConstants.LOGO_PATH;
}
