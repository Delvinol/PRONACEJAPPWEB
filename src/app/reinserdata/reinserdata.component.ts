import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reinserdata',
  standalone: true,
  imports: [],
  templateUrl: './reinserdata.component.html',
  styleUrl: './reinserdata.component.scss'
})
export class ReinserdataComponent {
  constructor(private router: Router) {}

  navigateTo(route: string): void {
    this.router.navigate([`/${route}`]);
  }
}