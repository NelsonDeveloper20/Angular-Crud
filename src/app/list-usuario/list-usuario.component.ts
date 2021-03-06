import { Component, ViewChild,OnInit, ElementRef } from '@angular/core';
import{UsuarioService} from '../services/usuario.service';
import{ Usuario} from '../models/usuario.model';
import {   FormBuilder } from '@angular/forms';
 
declare var $;
@Component({
  selector: 'app-list-usuario',
  templateUrl: './list-usuario.component.html',
  styleUrls: ['./list-usuario.component.css']
})
export class ListUsuarioComponent implements OnInit { 
 
  public popoverTitle: string = 'Mensaje';
  public popoverMessage: string = 'Eliminar Usuario?';
  public confirmClicked: boolean = false;
  public cancelClicked: boolean = false;
  dataTable: any;
  dtOptions: any;
  @ViewChild('dataTable', {static: false}) table: ElementRef; 
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
      this.dataTable = $(this.table.nativeElement);
      this.dataTable.DataTable();
  } 

  listarUsuario(){
    return this.service.listarUsuario().subscribe(
      data=>{
        this.usuario=data;
    });
  }
  eliminarUsuario(id){
//const delet=confirm('Eliminar Usuario:'+id);
//if(delet){

  this.service.eliminarUsuario(id).subscribe(() =>{
this.listarUsuario();
}, Error => console.error(Error));

//}
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
