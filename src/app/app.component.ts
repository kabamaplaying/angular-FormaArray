import { Component } from '@angular/core';
import { FormControl,FormArray, FormBuilder,FormGroup} from '@angular/forms';
@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  
  fGroup: FormGroup = this.fb.group({
     name: new FormControl(''),
     controles : new FormArray([])
   });

  constructor(private fb: FormBuilder) {

  }
   
   get controles() {
   return this.fGroup.get("controles") as FormArray;
}
  agregarControl() {
    this.controles.push(new FormControl(''));
  }
}
