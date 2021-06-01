
import { Injectable } from '@angular/core';
//import { Http2ServerRequest, Http2ServerResponse } from 'http2';
import { Observable, of } from "rxjs";
import {HttpClientModule,HttpClient,HttpHeaders  } from "@angular/common/http";

@Injectable({
  providedIn: 'root',
})
export class LoginService {
    isLogin=false;

    constructor(private  httpservice1:HttpClient) { }

  addLogin(login:any)
    {
    /*  const httpOptions = {
        headers: new HttpHeaders({
        'Content-Type': 'application/json',
        
        })
        };*/
      return this.httpservice1.post('http://dev.tms.mpart.us/api/authenticate',login);
  
      }
      getDashboards(headers:{token:string,user_id:string})
      {
        const httpOptions = {
          headers: new HttpHeaders({
          'Content-Type': 'application/json',
          token:headers.token,
          user_id:headers.user_id
          })
          };
        return this.httpservice1.get('http://dev.tms.mpart.us/api/dashboard/', httpOptions);
      }
}