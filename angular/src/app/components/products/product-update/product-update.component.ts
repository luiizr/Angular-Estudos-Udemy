import { routes } from './../../../app.routes';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductService } from '../product.service';
import { ActivatedRoute, Router } from '@angular/router';
import { RouterLink } from '@angular/router';
import { Products } from '../product.model';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-product-update',
  imports: [MatButtonModule, RouterLink, CommonModule, FormsModule, MatFormFieldModule, MatInputModule, MatCardModule],
  templateUrl: './product-update.component.html',
  styleUrl: './product-update.component.css'
})
export class ProductUpdateComponent {
  product: Products = { 
    name: '',
    price: 0
  }

    constructor(private productService: ProductService, private router: Router, private route: ActivatedRoute) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id') ?? '';
    this.productService.readById(id).subscribe(product => {
      this.product = product
    });
  }

  updateProduct(): void {
    console.log('Atualizando produto...');
    
  }

  cancel(): void {
    this.router.navigate(['/products'])
  }

}