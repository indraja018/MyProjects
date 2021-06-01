import { Component, OnInit, Input } from '@angular/core';
import {LoginService} from './../services/loginservice';

@Component({
  selector: 'app-main-comp',
  templateUrl: './main-comp.component.html',
  styleUrls: ['./main-comp.component.css']
})
export class MainCompComponent implements OnInit {

 // @Input()
  // showLogin:boolean=false;
   showLogin=this.mainServ.isLogin;
 /* logval1:boolean=false;

  logfunction()
  {
      this.logval1=this.mainServ.isLogin;
  }*/
  
  constructor(private mainServ:LoginService) { }

  ngOnInit(): void {
  
  }
 
  
  
 

}
