import { Component, Input,Output, EventEmitter  } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'PROYECT ANGULAR';
  
   public isUserLoggedInn=true;
   constructor(private _router: Router) { }

  @Output() emitEvent:EventEmitter<boolean> = new EventEmitter<boolean>();
  estado:boolean = true;
  ngOnInit() {
  if(this.estado==false){
   // this._router.navigate(['/login']); 
  }
    
  }


   
  public estados(actived){  
  
    this.isUserLoggedInn=actived;
  }

}
