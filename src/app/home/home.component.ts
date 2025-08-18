import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  imports: [],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {
  constructor(private router: Router) {}
  navigateToAbout() {
    // Logic to navigate to the About page
    // This could be implemented using Angular's Router service
    this.router.navigate(['/about']);
  }
}
