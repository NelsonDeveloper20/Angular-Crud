import { Injectable } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Producto } from '../models/producto.model';
import { map } from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  formData:Producto;
  readonly apiUrl="https://localhost:44307/Api/Produc/";

  producto:Producto;
  constructor(private _http:HttpClient) { }

  insertarProducto(formData:Producto){ 
    return this._http.post(this.apiUrl + 'Create', formData).pipe(map(
        response => {
            return response;
        }));
     

 // return this._http.post(this.apiUrl+'Create',formData);
  }
  listarProducto(){
    return this._http.get<Producto[]>(this.apiUrl+'Index')
  }
  listarTipoProducto(){
    return this._http.get(this.apiUrl + 'listarTipoProducto')
    .pipe(map(
        response => {
            return response;
        }
    ));

    //return this._http.get(this.apiUrl+'listarTipoProducto');
  }
  listarProdcutoXid(id: number) {
    return this._http.get(this.apiUrl + 'Details/' + id).pipe(map(
        response => {
            return response;
        }
    ));
}

ModificarProducto(producto: Producto) {
  return this._http.put(this.apiUrl + 'Edit', producto).pipe(map(
      response => {
          return response;
      }));
}

EliminarProducto(id: number) {
  return this._http.delete(this.apiUrl + 'Delete/' + id).pipe(map(
      response => {
          return response;
      }));
}
}
