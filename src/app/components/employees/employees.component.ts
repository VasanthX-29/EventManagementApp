import { Component } from '@angular/core';
import { Employee } from 'src/Employee';
import { EmployeeServiceService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-employees',
  templateUrl: './employees.component.html',
  styleUrls: ['./employees.component.css']
})
export class EmployeesComponent {

  status="";
  message:object;
  employee: Employee = new Employee();
  editemployee : Employee=new Employee();
  employees: any;
  modalEmp:any;
  modalid=0;
  modalfirstname="";
  modallastname="";
  modalemail="";
  modalsalary=0;
  

  constructor(private service: EmployeeServiceService) { }

  showemployees() {
    let response = this.service.getEmployees();
    response.subscribe((data: any) => this.employees = data)
  }

  ngOnInit(): void {
    this.showemployees();
  }

  public registerNow() {
   let element=document.getElementById("status");
    let res = this.service.doregisterEmp(this.employee);
    res.subscribe(() => { this.showemployees();
      element.innerHTML="Employee Registered Successfully !";
      this.message={
        color:'green'
      }

       });
  }

  public deleteemployee(id:number)
  {
    let element=document.getElementById("status");
    let response=this.service.deletebyid(id);
    response.subscribe(()=>{this.showemployees();
      element.innerHTML="Employee Deleted Successfully !";
      this.message={
        color:'red'
      }
    
    });
    
  }

  public editempid(e:any)
  {
    this.modalEmp=e;
    this.modalfirstname=e.firstname;
    this.modalid=e.id;
    this.modallastname=e.lastname;
    this.modalemail=e.email;
    this.modalsalary=e.salary;

    this.editemployee = { ...e };
  }

  public updateNow()
  {
     let element=document.getElementById("status");
     let response=this.service.update(this.modalid,this.editemployee);
     response.subscribe((data:any)=>{this.showemployees();
      element.innerHTML="Employee Updated Successfully !";
      this.message={
        color:'blue'
      }
    
    
    });
  }





}
