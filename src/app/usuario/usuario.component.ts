import { Component, OnInit,Input } from '@angular/core';
 import {DataService} from '../data.service';

@Component({
  selector: 'app-usuario',
  templateUrl: './usuario.component.html',
  styleUrls: ['./usuario.component.css']
})
export class UsuarioComponent implements OnInit {
@Input() nombreusuario;
  
posts=[];
usuarios:string[]=['enzo','rodr','qr'];
name:string='nelson';
edad:number=22;
direccion:{
  direcc:string;
  ciudad:string;
};
 hobbies:string[];
  constructor(private dataService:DataService) { 
this.dataService.obtenerData().subscribe(data=>
  {
    this.posts=data;
  }
  );

this.edad=22;
this.direccion={
  direcc:'av.venezuela 45',
  ciudad:'Lima'

};
this.hobbies=['lee','sc'];


  }

  ngOnInit(): void {
  }

  eliminar(valor){
    
    for (let i=0; i < this.usuarios.length; i++){
if(valor==this.usuarios[i]){
  this.usuarios.splice(i,1);
}
    }
  }

  agregarusuario(newUser){
   // alert(newUser.value);
    this.usuarios.push(newUser.value)
    newUser.value='';
    newUser.focus();
    return false;

  }


}
