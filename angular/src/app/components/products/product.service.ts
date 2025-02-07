import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Products } from './product.model'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  baseUrl = "http://localhost:3001/produtos"

  constructor(private snackBar: MatSnackBar, private http: HttpClient) { }

  showMessage(msg: string): void {
    this.snackBar.open(msg, 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top"
    })
  }
  

  create(product: Products): Observable<Products> {
    return this.http.post<Products>(this.baseUrl, product)
  }

  read(): Observable<Products[]> {
    return this.http.get<Products[]>(this.baseUrl)
  }

  readById(id: string): Observable<Products> {
    const url = `${this.baseUrl}/${id}`
    return this.http.get<Products>(url)
  }

  update(product: Products): Observable<Products> {
    const url = `${this.baseUrl}/${product.id}`
    return this.http.put<Products>(url, product)
  }
  
  delete(id: string): Observable<Products> {
    const url = `${this.baseUrl}/${id}`
  return this.http.delete<Products>(url)
}
  
}