import { Component, OnInit } from '@angular/core';
import {ProductoService} from '../services/producto.service';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { TipoProducto } from '../models/tipo-producto.model';
import { pipe } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';
import { Producto } from '../models/producto.model';

@Component({
  selector: 'app-add-producto',
  templateUrl: './add-producto.component.html',
  styleUrls: ['./add-producto.component.css']
})
export class AddProductoComponent implements OnInit {
 
  
  productoForm: FormGroup;
  IdProducto: number;
  listTipoProducto:TipoProducto[];
  title="Create"; 
  constructor(private _fb: FormBuilder, private _router: Router,public serviceProd:ProductoService,
    private _avRoute: ActivatedRoute,) { 

    if (this._avRoute.snapshot.params['id']) {
      this.IdProducto = this._avRoute.snapshot.params['id'];
  }

    this.productoForm = this._fb.group({
      IdProducto: 0,
      Nombre: ['', [Validators.required]],
      Precio: ['', [Validators.required]],
      Imagen: ['', [Validators.required]],
      IdTipoProducto: [0, [Validators.required]]

  });
    
  }
  ngOnInit(): void {
    this.serviceProd.listarTipoProducto().subscribe(
      (data: TipoProducto[]) => this.listTipoProducto = data);
  if (this.IdProducto > 0) {
           this.title = 'Edit',
          this.serviceProd.listarProdcutoXid(this.IdProducto)
              .subscribe((response: Producto) => {
                  this.productoForm.setValue(response);
              }, error => console.error(error));
  }

    
  }
    
   

guardar() {
  this.serviceProd.insertarProducto(this.productoForm.value)
  .subscribe(() => {
      this._router.navigate(['/list-producto']);
  }, error => console.error(error));
 
  if (this.title === 'Create') {
    this.serviceProd.insertarProducto(this.productoForm.value)
        .subscribe(() => {
            this._router.navigate(['/list-producto']);
        }, error => console.error(error));
} else if (this.title === 'Edit') {
    this.serviceProd.ModificarProducto(this.productoForm.value)
        .subscribe(() => {
            this._router.navigate(['/list-producto']);
        }, error => console.error(error));
}

}
  
   
  listaProducto(){
    return this.serviceProd.listarProducto();
  }
  cancelar(){
    this._router.navigate(['/list-producto']);
  }
}
