import { Component } from '@angular/core';
import { User } from 'src/User';
import { Router } from '@angular/router';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent {

  user:User=new User();
  users:any;

  valid:boolean=false;

  alertvalue=false;

  pwdsuccess=false;

 
  constructor(private service: EmployeeServiceService,private router: Router) { }

  updateuser : User=new User();

  getUserToBeUpdate:User;


  navigate()
  {
    this.router.navigate(['\signup'])
  }

  verifyUser()
  {

    let response = this.service.getUsers();
    response.subscribe((data: any) => {this.users = data;
      for(let u of this.users)
    {
        if(this.user.email===u.email && this.user.password===u.password)
        {
          this.valid=true;
          
        }
    }
    if(this.valid)
    {
     this.router.navigate(['/home']);
    }
    else{
      this.alertvalue=true;
      
    }
})
  
  }

  updatepwd()
  {
    console.log("Entered updatepwd method successfully")
  
    let response = this.service.getUsers();
    response.subscribe((data: any) => {this.users = data;
      for(let u of this.users)
    {
        if(this.updateuser.email===u.email)
        {
          this.getUserToBeUpdate=u;
          break;
          
        }
    }
   this.updateuser.name=this.getUserToBeUpdate.name;
   this.updateuser.id=this.getUserToBeUpdate.id;

    
  let response=this.service.updateuserpwd(this.getUserToBeUpdate.id,this.updateuser)
  response.subscribe((data)=>{this.pwdsuccess=true});
  })

    
  }



}
