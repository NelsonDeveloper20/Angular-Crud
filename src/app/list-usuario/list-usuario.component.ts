import { Component, OnInit } from '@angular/core';
import{UsuarioService} from '../services/usuario.service';
import{ Usuario} from '../models/usuario.model';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { strict } from 'assert';
@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit {

  usuario:Usuario[]; 
   Nombre :String=null;
  Apellido  :String=null;
  Email  :String=null;
  Clave  :String=null;
  Imagen :String=null;
  idTipoUsuario :String=null;
  constructor(private _fb:FormBuilder,private service:UsuarioService) { 

     
       
     
    
  }

  ngOnInit(): void {
    this.listarUsuario();
  }

  listarUsuario(){
    return this.service.listarUsuario().subscribe(
      data=>{
        this.usuario=data;
    });
  }
  eliminarUsuario(id){
const delet=confirm('Eliminar Usuario:'+id);
if(delet){
  this.service.eliminarUsuario(id).subscribe(() =>{
this.listarUsuario();
}, Error => console.error(Error));
}
}

usarioPorId(id){
  this.service.listarUsuarioXiD(id)
  .subscribe((response: Usuario) => {
      this.Nombre=response.Nombre;
    this.Imagen=response.Imagen;
    this.Apellido=response.Apellido;
    this.Email=response.Email;
  }, error => console.error(error));
}
}
