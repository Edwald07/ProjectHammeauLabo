import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { AuthService } from '../../../services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  fg!: FormGroup;
  constructor(private authService: AuthService,
    private builder: FormBuilder, private router : Router
  ) {
    this.fg = builder.group({
      name : [null, [Validators.required]],
      firstname : [null, [Validators.required]],
      email: [null, [Validators.required, Validators.email]],
      password: [null, [Validators.required]],
      passwordConfirm: [null, [Validators.required]],
      pseudo : [null, [Validators.required]]

    })
  }
  confirmform(){
    this.authService.register(this.fg.value).subscribe({next : () => {this.router.navigate(["profil"])}})
  }
}
