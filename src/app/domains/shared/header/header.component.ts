import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [CommonModule],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent {
  menuOpen = false; 
  eduMenuOpen = false;
  eduMenuResponsiveOpen = false; 

  toggleMenu(){
    this.menuOpen = !this.menuOpen;
  }

  toggleEduMenu(){
    this.eduMenuOpen = !this.eduMenuOpen;
  }

  toggleEduMenuResponsive(){
    this.eduMenuResponsiveOpen = !this.eduMenuResponsiveOpen;
  }


}
