import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';

@Component({
  selector: 'app-product-crud',
  imports: [MatButtonModule, RouterLink],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

    constructor(private router: Router) { }

    ngOnInit(): void {
      
    }

}
