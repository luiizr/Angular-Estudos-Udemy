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
    name: 'Produto de teste',
    price: 125.98
  }


  constructor(
      private router: Router) {
        console.log('teste')
      }


    ngOnInit(): void {

    }

    createProduct(): void {
      // this.productService.create(this.product).subscribe(() => {
      //   this.productService.showMessage('Produto criado!')
      //   this.router.navigate(['/products'])
      // })
      
      // this.productService.showMessage('Tudo show!') 
    }

    cancel(): void {
      this.router.navigate(['/products'])
    }


}
