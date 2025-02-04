import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Products } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-product-read',
  imports: [CommonModule],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{

  produtos: Products[] = [];

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        this.productService.read().subscribe(produtos => {
          this.produtos = produtos
          console.log(produtos)
        })
    }

}