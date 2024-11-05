import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cjdr',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './cjdr.component.html',
  styleUrl: './cjdr.component.css'
})
export class CJDRComponent {
  constructor(private router: Router) {}

  navigateTo(route: string) {
    this.router.navigate(['/' + route]);
  }
}
