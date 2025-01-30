import { Component } from '@angular/core';
// import { NavComponent } from './components/template/nav/nav.component';
import { RouterOutlet } from '@angular/router';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar'
import { HomeComponent } from '../../../views/home/home.component';


@Component({
  selector: 'app-nav',
  imports: [RouterOutlet, HomeComponent, MatSidenavModule, MatListModule, MatToolbarModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.css'
})
export class NavComponent {

}
