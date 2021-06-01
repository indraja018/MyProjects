import { Output } from '@angular/core';
import { Component, OnInit,EventEmitter } from '@angular/core';
import {MORE_LABELS} from './../mockdata/topbardata.mock';
import {LoginService} from './../services/loginservice';
import {HttpClientModule,HttpClient,HttpHeaders , HttpRequest } from "@angular/common/http";
import { Observable } from 'rxjs';


declare const $:any;
@Component({
  selector: 'app-top-bar',
  templateUrl: './top-bar.component.html',
  styleUrls: ['./top-bar.component.css']
})
export class TopBarComponent implements OnInit {
  moreLabels=MORE_LABELS;
  login = false;
  loginData:any;
  

  constructor(private logSer:LoginService) { }
  
  ngOnInit():void {
    $('.dropdown-toggle').dropdown()
   
    
      
  }
  loadDashBoardDate(){ 
    this.logSer.getDashboards({
      user_id:"rahul.jamuar@gmail.com",
      token:this.loginData.cognito.refreshToken.token
    }).subscribe((response)=>{
      console.log(response);
    });

  }
  servefunc()
  {
    let var1=this.logSer.addLogin({
      ID:"rahul.jamuar@gmail.com"
    })
    var1.subscribe((login:any)=>{
    this.loginData = login;
      console.log(login);
      // this.request.headers.set("token",login.cognito.refreshToken.token)
     
    })

    
    
   // this.login=!this.login;
    
   // this.logSer.isLogin=this.login;
   // return this.logSer.isLogin;

  }


}
