import { Component, OnInit } from '@angular/core';
import {UsuarioService} from '../services/usuario.service';
import { NgForm, FormGroup, Validators, FormBuilder } from '@angular/forms';
import {TipoUsuario} from '../models/tipo-usuario.model';
import{Usuario} from '../models/usuario.model';
import { pipe } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent implements OnInit {
  base64textString = [];
  imageUrl:String='/assets/img/upload.png';
  imgError:String='/assets/img/upload.png';
  fileToUpload:File=null;
usuarioForm:FormGroup;
idUsuario:number;
listTipoUsuario:TipoUsuario[];
title='Create';
submitted = false;
  constructor(private _fb:FormBuilder, private _router: Router,public serviceUser:UsuarioService,
    private _avRoute: ActivatedRoute,) { 

if(this._avRoute.snapshot.params['id']){
  this.idUsuario=this._avRoute.snapshot.params['id'];
}

    this.usuarioForm=this._fb.group({      
      idUsuario :0,
      Nombre :['', [Validators.required]],
      Apellido  :['', [Validators.required]],
      Email  :['', [Validators.required]],
      Clave  :['', [Validators.required]],
      Imagen :['', [Validators.required]],
      idTipoUsuario  :['0', [Validators.required]],
    })

    }
 
onUploadChange(evt: any) {
  const file = evt.target.files[0];

  if (file) {
    const reader = new FileReader();

    reader.onload = this.handleReaderLoaded.bind(this);
    reader.readAsBinaryString(file);
  }
}
handleReaderLoaded(e) {
 var imgruta='data:image/png;base64,' + btoa(e.target.result);
this.imageUrl=imgruta;
this.usuarioForm.patchValue({
  Imagen: imgruta
});
 
 //  this.base64textString.push('data:image/png;base64,' + btoa(e.target.result));
}  

  ngOnInit(): void {
    this.listarTipoUsuario();
    if (this.idUsuario > 0) {
      this.title = 'Edit',
           this.serviceUser.listarUsuarioXiD(this.idUsuario)
               .subscribe((response: Usuario) => {
                   this.usuarioForm.setValue(response);
                 // this.usuarioForm.controls.
                  // alert(response.Clave);
                  var ruta=response.Imagen;
                  this.imageUrl=ruta;
                  this.usuarioForm.patchValue({
                    Imagen: ruta
                 });
                 
               }, error => console.error(error));
      }
  }
  get f() { return this.usuarioForm.controls; }
guardar(){
  this.submitted = true;
 if (!this.usuarioForm.valid) {
  // alert('ingrese datos importantes');
    return;
}


if (this.title === 'Create') {
  this.serviceUser.insertarUsuario(this.usuarioForm.value)
  .subscribe(()=>{
this._router.navigate(['/list-usuario']);
}, error => console.error(error));
} else if (this.title === 'Edit') {
  this.serviceUser.modificarUsuario(this.usuarioForm.value)
      .subscribe(() => {       
         this._router.navigate(['/list-usuario']);
      }, error => console.error(error));
}
}

listarTipoUsuario(){
  this.serviceUser.listarTipoUsuario().subscribe(
    (data: TipoUsuario[]) => this.listTipoUsuario = data);
}
cancelar(){
  this._router.navigate(['/list-usuario']);
}
 
get Nombre() { return this.usuarioForm.get('Nombre'); }
get Apellido() { return this.usuarioForm.get('Apellido'); }
get Email() { return this.usuarioForm.get('Email'); }
get Clave() { return this.usuarioForm.get('Clave'); }
get Imagen() { return this.usuarioForm.get('Imagen'); }
get idTipoUsuario() { return this.usuarioForm.get('idTipoUsuario'); }
}
