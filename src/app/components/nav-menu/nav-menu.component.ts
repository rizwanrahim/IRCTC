import { Component, ViewChild } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { SideNavComponent as SideNavComponent } from '../side-nav/side-nav.component';
@Component({
  selector: 'nav-menu',
  imports: [MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatMenuModule, SideNavComponent],
  templateUrl: './nav-menu.component.html',
  styleUrl: './nav-menu.component.css'
})
export class NavMenuComponent {
  @ViewChild(SideNavComponent) sidenavComponent!: SideNavComponent;

  toggleSidenav() {
    this.sidenavComponent.toggle();
  }

}
