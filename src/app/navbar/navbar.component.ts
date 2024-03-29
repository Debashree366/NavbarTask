import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent {
  isResponsive = false;

  toggleResponsive() {
    this.isResponsive = !this.isResponsive;
  }

onCloseClick(){
  this.isResponsive = !this.isResponsive;
}


  
}
