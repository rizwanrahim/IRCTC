import { Component, ViewChild } from '@angular/core';
import { SideNavComponent } from '../components/side-nav/side-nav.component';
import { NavMenuComponent } from '../components/nav-menu/nav-menu.component';
import { NgIf } from '@angular/common';
import { TrainFormComponent } from '../components/train-form/train-form.component';


@Component({
  selector: 'app-container',
  imports: [SideNavComponent, NavMenuComponent, NgIf, TrainFormComponent],
  templateUrl: './app-container.component.html',
  styleUrl: './app-container.component.css'
})
export class AppContainerComponent {
  @ViewChild(SideNavComponent) sidenavComponent!: SideNavComponent;
  activateMenu: string = ''; 

  onMenuClick(value: string) {
    this.activateMenu = value;
    this.sidenavComponent.toggle();
  }
}
