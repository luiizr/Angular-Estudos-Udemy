import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { ForDirective } from '../../directives/for.directive';

@Component({
  selector: 'app-home',
  imports: [MatCardModule, ForDirective],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
