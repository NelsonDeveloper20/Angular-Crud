import { Injectable } from '@angular/core';
import { HttpClient,HttpClientModule } from '@angular/common/http'
import {Usuario} from '../models/usuario.model';
import {TipoUsuario} from '../models/tipo-usuario.model'
import {map} from 'rxjs/operators';
@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  formData:Usuario;
  readonly apiUrl="https://localhost:44307/Api/Usuario/";
  constructor(private _http:HttpClient) { }

listarUsuario(){
  return this._http.get<Usuario[]>(this.apiUrl+'Index')
 }

listarUsuarioXiD(idUsuario:Number){  
  return this._http.get(this.apiUrl + 'DetalleUsuario/' + idUsuario).pipe(map(
    response => {
        return response;
    }
)); 
}

listarTipoUsuario(){
  return this._http.get<TipoUsuario[]>(this.apiUrl+'listarTipoUsuario');
  
}
insertarUsuario(formData:Usuario){
  return this._http.post(this.apiUrl+'Create',formData).pipe(map(
    response =>{
    return response;
  }
  ))
}

modificarUsuario(usuario:Usuario){
  return this._http.put(this.apiUrl+'Edit/',usuario).pipe(map(
    response=>{
      return response;
    }
  ))
}
eliminarUsuario(id:number){
  return this._http.delete(this.apiUrl+'Delete/'+id).pipe(map(
    response=>{
      return response;
    }
  ))
}

}
