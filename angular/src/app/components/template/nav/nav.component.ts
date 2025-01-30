import { Component } from '@angular/core';
// import { NavComponent } from './components/template/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { HomeComponent } from '../../../views/home/home.component';
import { Router } from '@angular/router';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [RouterLink, RouterOutlet, HomeComponent, MatSidenavModule, MatListModule, MatToolbarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {


  constructor(private router: Router) {}

  goToProducts() {
    this.router.navigate(['/products']);
  }

  goToHome() {
    this.router.navigate(['/']);
  }
}
