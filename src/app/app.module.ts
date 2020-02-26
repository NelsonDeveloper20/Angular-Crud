import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup  }from '@angular/forms';
import {DataService} from './data.service'
import {HttpClientModule }from '@angular/common/http';
import {RouterModule,Route }  from '@angular/router';
import { AboutComponent }from './about/about.component';  

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component'; 
import {tercerxample} from './tercero/tercero.component';
import { UsuarioComponent } from './usuario/usuario.component';
import { AddProductoComponent } from './add-producto/add-producto.component';
import { ListProductoComponent } from './list-producto/list-producto.component';
import { pathToFileURL } from 'url';
import { ProductoService } from './services/producto.service';
import { AddUsuarioComponent } from './add-usuario/add-usuario.component';
import { ListUsuarioComponent } from './list-usuario/list-usuario.component';
import {ReactiveFormsModule }from '@angular/forms';
import { LoginComponent } from './login/login.component';
 
@NgModule({
  declarations: [
    AppComponent, 
    tercerxample,  UsuarioComponent,
    AboutComponent,
    AddProductoComponent,
    ListProductoComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    LoginComponent
  ],
  imports: [ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(
      [
        {path:'',component: UsuarioComponent},
        {path:'about',component:AboutComponent},
        {path:'tercero',component:tercerxample},
        {path:'add-producto',component:AddProductoComponent},
        {path:'list-producto',component:ListProductoComponent},
        {path:'producto/edit/:id',component:AddProductoComponent},
        {path:'list-usuario',component:ListUsuarioComponent},
        {path:'add-usuario',component:AddUsuarioComponent},
        {path:'usuario/edit/:id',component:AddUsuarioComponent}
        
      ]
    )
  ],
  providers: [DataService,ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
