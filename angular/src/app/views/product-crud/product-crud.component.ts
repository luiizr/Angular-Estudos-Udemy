import { OnInit } from '@angular/core';
import { Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { ProductReadComponent } from '../../components/products/product-read/product-read.component';
import { ProductRead2Component } from '../../components/products/product-read2/product-read2.component';

@Component({
  selector: 'app-product-crud',
  imports: [ProductRead2Component, MatButtonModule, RouterLink, ProductReadComponent],
  templateUrl: './product-crud.component.html',
  styleUrl: './product-crud.component.css'
})
export class ProductCrudComponent {

    constructor(private router: Router) { }

    ngOnInit(): void {
      
    }

}
