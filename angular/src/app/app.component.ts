import { Component, LOCALE_ID } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'
import { FooterComponent } from './components/template/footer/footer.component';
import { NavComponent } from './components/template/nav/nav.component';
import { HomeComponent } from './views/home/home.component';
import { RouterLink } from '@angular/router';
import { RedDirective } from './directives/red.directive';
import { ForDirective } from './directives/for.directive';
import { ProductReadComponent } from './components/products/product-read/product-read.component';
import { ProductRead2Component } from './components/products/product-read2/product-read2.component';
import { MatCardModule } from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
registerLocaleData(localePt);
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatTableModule } from '@angular/material/table';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [ProductRead2Component, ProductReadComponent, MatTableModule ,FormsModule, MatFormFieldModule, MatInputModule, MatButtonModule, ForDirective, RedDirective, RouterLink, RouterOutlet, HomeComponent, MatCardModule, HeaderComponent, MatToolbarModule, FooterComponent, NavComponent, MatListModule, MatSidenavModule],
  templateUrl: 'app.component.html',
  providers: [{ provide: LOCALE_ID, useValue: 'pt-BR' }],
})
export class AppComponent {
  title = 'angular';
  name = 'Luiz';


}