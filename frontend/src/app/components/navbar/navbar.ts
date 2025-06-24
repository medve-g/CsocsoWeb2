import { Component, HostListener } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-navbar',
  imports: [RouterLink],
  templateUrl: './navbar.html',
  styleUrl: './navbar.css'
})
export class Navbar {
  scrolledDown = false;
  displayTitle = true

  @HostListener('window:scroll', [])
  onWindowScroll() {
    const yOffset = window.scrollY || window.pageYOffset;
    this.scrolledDown = yOffset > 80; 
  }
}
