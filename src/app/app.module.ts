import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,FormGroup  }from '@angular/forms';
import {DataService} from './data.service'
import {HttpClientModule }from '@angular/common/http';
import {RouterModule,Route }  from '@angular/router';
import { AboutComponent }from './about/about.component';   
import { DataTablesModule } from 'angular-datatables';
import 'bootstrap/dist/css/bootstrap.css';
import { ConfirmationPopoverModule } from 'angular-confirmation-popover';
import { NgxPopper } from 'angular-popper';
//import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap'
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
 //import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
@NgModule({
  declarations: [
    AppComponent, 
    tercerxample,  UsuarioComponent,
    AboutComponent,
    AddProductoComponent,
    ListProductoComponent,
    AddUsuarioComponent,
    ListUsuarioComponent,
    LoginComponent, 
   // NgbModule
  ],
  imports: [ReactiveFormsModule ,
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    DataTablesModule,
    ConfirmationPopoverModule.forRoot({
      confirmButtonType: 'danger' // set defaults here
    }),
    NgxPopper,
    RouterModule.forRoot(
      [
        {path:'',component: LoginComponent},
        {path:'about',component:AboutComponent},
        {path:'tercero',component:tercerxample},
        {path:'add-producto',component:AddProductoComponent},
        {path:'list-producto',component:ListProductoComponent},
        {path:'producto/edit/:id',component:AddProductoComponent},
        {path:'list-usuario',component:ListUsuarioComponent},
        {path:'add-usuario',component:AddUsuarioComponent},
        {path:'usuario/edit/:id',component:AddUsuarioComponent},
        {path: 'login',component: LoginComponent}
        
      ]
    )
  ],
  providers: [DataService,ProductoService],
  bootstrap: [AppComponent]
})
export class AppModule { 


  
}
