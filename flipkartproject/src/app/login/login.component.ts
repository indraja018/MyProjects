import { Component, OnInit } from '@angular/core';
import {LoginService} from './../services/loginservice';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  

  
  constructor(private logServ:LoginService) { }
 

  ngOnInit(): void {
  }
  signfunc()
  {
    alert('just ur signed in');
  }

}
