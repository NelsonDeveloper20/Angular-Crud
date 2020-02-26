import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../services/producto.service';
import { Producto } from '../models/producto.model';  

@Component({
  selector: 'app-list-producto',
  templateUrl: './list-producto.component.html',
  styleUrls: ['./list-producto.component.css']
})
export class ListProductoComponent implements OnInit {

  producto:Producto[];
  constructor(private service:ProductoService) { }

  ngOnInit(): void {
   this.listarProducto();

  }
  listarProducto() {
    this.service.listarProducto().subscribe(
      data=>{
        this.producto=data; 
      });
}
  eliminarproducto(productoID) {
    const ans = confirm('eliminar producto: ' + productoID);
    if (ans) {
        this.service.EliminarProducto(productoID).subscribe(() => {
            this.listarProducto();
        }, Error => console.error(Error));
    }
}
}
