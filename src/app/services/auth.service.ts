import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import * as jwt_decode from 'jwt-decode';
import { FormGroup } from '@angular/forms';
import { User_DB } from '../Models/user.model';


@Injectable(
    {
        providedIn: 'root'
    }
)
export class AuthService 
    {
        private url : string = "https://localhost:7141/api/User"
        isConnectedSubject : Subject<boolean> = new Subject<boolean>()

        get isConnected() : boolean
            {
                return localStorage.getItem("token") != undefined
            }
        constructor(private client : HttpClient) { }

        register(form : FormGroup): Observable<any>
        {
            return this.client.post(this.url+ "/register", form)
        }
        
        login(email:string, password:string)
            {
                this.client.post(this.url+"/login",{email, password}, {responseType: "text"}).subscribe
                    (
                        {
                            next: (token : string) => 
                            {
                                localStorage.setItem("token", token)
                                this.isConnectedSubject.next(this.isConnected)
                            }
                        }
                    )
            }
        logout()
            {
                localStorage.removeItem("token")
                this.isConnectedSubject.next(this.isConnected)
            }
        getUserInfo()
            {
                let myHeader : HttpHeaders = new HttpHeaders({
      "authorization" : "bearer " + localStorage.getItem("token")
    })
    return this.client.get<User_DB>(this.url, {headers : myHeader})
            }
        decodeToken(){
                let token = jwt_decode.jwtDecode(localStorage.getItem("token") ?? "")
                console.log(token)
              }
    }