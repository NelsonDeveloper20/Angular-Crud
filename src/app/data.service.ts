import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Post} from '../app/Post';
@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private _http: HttpClient) {

    console.log('el serivico esta iniciado');

   }
   obtenerData(){
return this._http.get<Post[]>("https://jsonplaceholder.typicode.com/posts")
 
   }
}
