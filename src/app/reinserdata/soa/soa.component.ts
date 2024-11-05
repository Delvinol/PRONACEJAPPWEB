import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-soa',
  standalone: true,
  imports: [],
  templateUrl: './soa.component.html',
  styleUrl: './soa.component.css'
})
export class SOAComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate(['/' + route]);
  }
}
