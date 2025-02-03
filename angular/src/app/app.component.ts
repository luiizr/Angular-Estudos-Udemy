import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { RouterLink } from '@angular/router';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';

import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [MatButtonModule, ForDirective, RedDirective, RouterLink, RouterOutlet, HomeComponent, MatCardModule, HeaderComponent, MatToolbarModule, FooterComponent, NavComponent, MatListModule, MatSidenavModule],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'angular';
  name = 'Luiz';


}