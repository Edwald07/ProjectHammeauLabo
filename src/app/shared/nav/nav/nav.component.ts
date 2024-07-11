import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';
import { MenubarModule } from 'primeng/menubar'
import { AuthService } from '../../../services/auth.service';


@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
isconnected! : boolean
constructor(private authservice : AuthService)
{
    this.isconnected= authservice.isConnected
}
  items: MenuItem[] | undefined;
  
  ngOnInit() {
    this.items = [
        {
            label: 'Home',
            routerLink : "Home",
            icon: 'pi pi-home',
            items:
            [
                {
                    label: 'House',
                    routerLink : "house",
                    icon: 'pi pi-sparkles',
                },
                {
                    label: 'profil',
                    icon: 'pi pi-user',
                    items: 
                    [
                        {
                            label: 'register',
                            routerLink : "register",
                            icon: 'pi-user-edit',
                        },
                        {
                            label: 'login',
                            routerLink : "login",
                            icon : 'pi-sign-in',
                        },
                        {
                            label: 'profil',
                            routerLink : "profil",
                            icon : 'pi-sign-in',
                        }
                    ]
                }
            ]
        },
        
        {
            label: 'Tchat',
            routerLink : "chat",
            icon: 'pi pi-envelope',
        },
        {
            label:'Règles',
            routerLink : "rules",
            icon: 'pi pi-ban',
        },
        // {
        //     label: 'en construction',
        //     icon: 'pi pi-ban',
           
        // },
        // {
        //     label: 'Contact',
        //     icon: 'pi pi-envelope'
        // }
    ]
}

}
