import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';


@Component({
  selector: 'app-products-create',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent {


  constructor(private productService: ProductService,
      private router: Router) {}

    ngOnInit(): void {

    }

    createProduct(): void {
      this.productService.showMessage('Deu certo papai!') 
    }

    cancel(): void {
      this.router.navigate(['/products'])
    }
}
