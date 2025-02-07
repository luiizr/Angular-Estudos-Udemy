import { Component } from '@angular/core';
import { OnInit } from '@angular/core';
import { Products } from '../product.model';
import { ProductService } from '../product.service';
import { CommonModule } from '@angular/common';
import { MatTableModule } from '@angular/material/table';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-product-read',
  imports: [CommonModule, MatTableModule, RouterModule],
  templateUrl: './product-read.component.html',
  styleUrl: './product-read.component.css'
})
export class ProductReadComponent implements OnInit{

  produtos: Products[] = [];
  displayedColumns = ['id', 'name', 'price', 'action'];

    constructor(private productService: ProductService) {

    }

    ngOnInit(): void {
        this.productService.read().subscribe(produtos => {
          this.produtos = produtos
          console.log(produtos)
        })
    }

}