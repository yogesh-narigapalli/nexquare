import { Component } from '@angular/core';
import { DataService } from './service/data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  constructor(private data:DataService){

  }
  title = 'angular-form';
temp = [];
count=0;
localTemp=0;

buttonClicked(){
  if(this.count<6){
    this.count+=1;
  this.data.data.push(this.count);
  this.temp.push(this.count);

  }
  
}


}
