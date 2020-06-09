import { Component, OnInit, Input, Output } from '@angular/core';
import { EventEmitter } from 'protractor';
import { DataService } from 'src/app/service/data.service';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css']
})
export class InputComponent implements OnInit {
  @Input() count:any;
  
temp=1;
  constructor(private data:DataService) { }

  ngOnInit() {
    console.log(this.count);
    this.temp= this.count;
  }

  iconClicked(deletingVariable){

   console.log(this.data.data);
   console.log("delete");
   console.log(deletingVariable-1,"delete index");
   this.data.data.splice(this.data.data[deletingVariable],1);
   console.log(this.data.data,"final");

  }

}
