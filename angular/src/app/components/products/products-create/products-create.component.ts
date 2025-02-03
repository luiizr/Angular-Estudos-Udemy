import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink, Router } from '@angular/router';
import { Products } from '../product.model';

@Component({
  selector: 'app-products-create',
  standalone: true,
  imports: [MatButtonModule, RouterLink],
  templateUrl: './products-create.component.html',
  styleUrl: './products-create.component.css'
})
export class ProductsCreateComponent {

  product: Products = {
    name: '',
    price: null
  }


  constructor(private productService: ProductService,
      private router: Router) { }


    ngOnInit(): void {

    }

    createProduct(): void {
      console.log('olá')
      this.productService.create(this.product).subscribe(() => {
        this.productService.showMessage('Produto criado!')
        this.router.navigate(['/products'])
      })}

    cancel(): void {
      this.router.navigate(['/products'])
    }


}
