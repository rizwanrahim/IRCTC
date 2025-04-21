import { Component, Input } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { NgIf, NgFor } from '@angular/common';

@Component({
  selector: 'side-nav',
  standalone: true,
  imports: [MatSidenavModule, FormsModule, MatButtonModule, MatCheckboxModule],
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.css']
})
export class SideNavComponent {
  @Input() opened = false;
  events: string[] = [];

  onOpened() {
    this.events.push('open!');
  }

  onClosed() {
    this.events.push('close!');
  }

  toggle() {
    this.opened = !this.opened;
  }
}
