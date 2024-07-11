import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-house',
  templateUrl: './house.component.html',
  styleUrl: './house.component.scss'
  
  
})
export class HouseComponent {

  constructor(private router : Router){}

  goToChat(){
    this.router.navigate(['chat'])  }
}
