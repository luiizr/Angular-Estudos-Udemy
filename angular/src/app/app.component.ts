import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from './components/template/header/header.component';
import { MatToolbarModule } from '@angular/material/toolbar'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [HeaderComponent, MatToolbarModule],
  templateUrl: 'app.component.html'
})
export class AppComponent {
  title = 'angular';
  name = 'Luiz';
}

//RouterOutlet