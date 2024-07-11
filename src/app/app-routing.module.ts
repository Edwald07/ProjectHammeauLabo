import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegisterComponent } from './components/auth/register/RegisterComponent';
import { LoginComponent } from './components/auth/login/login.component';
import { TchatComponent } from './components/tchat/tchat.component';
import { HouseComponent } from './components/house/house.component';
import { ProfilComponent } from './components/auth/profil/profil.component';
import { RulesComponent } from './components/rules/rules.component';

const routes: Routes = [
  {path : "house", component: HouseComponent},
  {path : "register", component : RegisterComponent},
  {path : "login", component : LoginComponent},
  {path : "chat", component : TchatComponent},
  {path : "profil",component : ProfilComponent},
  {path : "rules", component: RulesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
