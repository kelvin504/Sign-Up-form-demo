import { HttpClient } from '@angular/common/http';
import { OnInit, Injectable } from '@angular/core';
import { SignUp } from '../models/sign-up';


@Injectable()
export class DemoApiService implements OnInit {

    constructor( protected http: HttpClient) { }

  ngOnInit(): void {
  }

  updateSignUp(signUp: SignUp) {
    
        const body = {
          'fistname': signUp.firstName,
          'lastName': signUp.lastName,
          'email': signUp.email,
          'password': signUp.password,
          'passwordConfirm':signUp.passwordConfirm
        };

        return this.http.post('https://demo-api.now.sh/users', body);
  }
}