import { Component} from '@angular/core';
import { ClassField } from '@angular/compiler';

@Component({
    selector:'tercero-nel',
    templateUrl:'./tercero.component.html',
    styleUrls:['./tercer.component.css']
})

export class tercerxample{
nombre='nelson rh';
  num=0;

  increment(){
this.num++;
}

}
