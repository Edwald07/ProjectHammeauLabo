import { Component } from '@angular/core';
import { AuthService } from '../../../services/auth.service';
import { User } from 'sendbird';
import { User_DB } from '../../../Models/user.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrl: './profil.component.scss'
})
export class ProfilComponent {

  mesInfos! : User_DB
  constructor(private authService : AuthService){
    this.loadData()
    
  }
  loadData()
  {
    this.authService.getUserInfo().subscribe({
      next: (data : User_DB) => this.mesInfos = data,
      error : (error) => console.log(error)
      

    })
    console.log(this.mesInfos);
    
  }
  
}
