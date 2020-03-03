import { Component, OnInit, ViewChild, Input } from '@angular/core';
import { AppComponent } from "../app.component";
import { Router } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginForm: FormGroup;
  public submitted: Boolean = false;
  public error: {code: number, message: string} = null;
   usuario="nelson";
   clave="123";
  constructor(private _router: Router,private comp:AppComponent,
    private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    })
    this.comp.estados(false);
    this._router.navigate(['/login']);
  }
  ingresar():void{
    this.submitted = true;
    this.error = null;
    if(this.loginForm.valid){ 
    if(this.usuario==this.loginForm.controls.username.value && this.clave==this.loginForm.controls.password.value){
      
    this.comp.estados(true);
    this._router.navigate(['/list-usuario']);
    }else{
      alert('Contraseña incorrecta')
    }
      
    }
    return;
    // this.childOne.function1();
    


  }
}
