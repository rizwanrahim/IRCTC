import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { NavMenuComponent } from '../components/nav-menu/nav-menu.component';


@Component({
  selector: 'app-container',
  imports: [SideNavComponent, NavMenuComponent],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css'
})
export class AppContainerComponent {
  @ViewChild(SideNavComponent) sidenavComponent!: SideNavComponent;

  toggleSidenav() {
    console.log("app-container executed")
    this.sidenavComponent.toggle();
  }
}
