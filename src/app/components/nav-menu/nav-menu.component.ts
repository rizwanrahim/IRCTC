import { Component, EventEmitter, Output, ViewChild } from '@angular/core';
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
  @Output() menuOption = new EventEmitter<string>();

  onMenuClick(menuOption: string) {
    this.menuOption.emit(menuOption);
  }
}
