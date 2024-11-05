import { Component } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-paspe',
  standalone: true,
  imports: [],
  templateUrl: './paspe.component.html',
  styleUrl: './paspe.component.css'
})
export class PASPEComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate(['/' + route]);
  }
}
