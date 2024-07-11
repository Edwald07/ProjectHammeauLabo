import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent
{
  fg! : FormGroup
  constructor(private authService : AuthService, private builder : FormBuilder, private router : Router)
      {
        this.fg = builder.group
        ({
          email : [null, [Validators.required, Validators.email]],
          password : [null, [Validators.required]]
        })
      }
  login()
      {
        this.authService.login(this.fg.value["email"], this.fg.value["password"])
        this.router.navigate(["profil"])
      }
}