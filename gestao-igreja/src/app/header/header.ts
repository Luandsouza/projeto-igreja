import { NgClass,} from '@angular/common';
import { NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-header',
  imports: [RouterLink, NgClass, NgIf, RouterOutlet],
  templateUrl: './header.html',
  styleUrl: './header.css',
})
export class Header {
    isOpen = true;

  toggleSidebar() {
    this.isOpen = !this.isOpen;
  }
}
