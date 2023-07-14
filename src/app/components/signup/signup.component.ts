import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/User';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {

  constructor(private service: EmployeeServiceService,private router: Router) { }

 newuser : User = new User();

 alertvalue=false;
registerUser()
  {
    if(this.newuser.password!==this.newuser.confirmpassword)
    {
      this.alertvalue=true;
    }
    else
    {
      let response=this.service.registerUser(this.newuser);

      response.subscribe((data)=>this.router.navigate(['\signin']));
    }
    
    
  }

}
