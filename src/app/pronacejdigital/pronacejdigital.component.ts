import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-pronacejdigital',
  standalone: true,
  imports: [],
  templateUrl: './pronacejdigital.component.html',
  styleUrl: './pronacejdigital.component.css'
})
export class PronacejdigitalComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}
