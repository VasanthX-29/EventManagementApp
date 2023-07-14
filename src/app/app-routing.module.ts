import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmployeesComponent } from './components/employees/employees.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './components/header/header.component';
import { HomeComponent } from './components/home/home.component';
import { SignupComponent } from './components/signup/signup.component';


const routes: Routes = [
  
{path : 'employees', component:EmployeesComponent},

{ path : 'signin', component:SigninComponent},

{ path : 'home', component:HomeComponent},

{ path : 'signup', component:SignupComponent},

{ path: '', redirectTo:'/signin', pathMatch:'full'}




];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
