import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmployeeServiceService {

  constructor(private http: HttpClient) { }

  public getEmployees() {
    return this.http.get("http://localhost:3000/employees");
  }

  public doregisterEmp(employee: any) {

    return this.http.post("http://localhost:3000/employees", employee);

  }

  public deletebyid(id:number)
  {
   
    return this.http.delete("http://localhost:3000/employees/"+id);
  }

  public update(id:any, employee:any)
  {
    console.log(employee, id);
    return this.http.put("http://localhost:3000/employees/"+id,employee)
  }

  public getUsers() {
   
    return this.http.get("http://localhost:3000/users");
  }

  public registerUser(user : any)
  {
    console.log("servive method called")
    return this.http.post("http://localhost:3000/users", user);
  }

  public updateuserpwd(id:any, user:any)
  {
    console.log("Entered updatepwd method in servicesuccessfully")
    return this.http.put("http://localhost:3000/users/"+id,user)
  }


}
