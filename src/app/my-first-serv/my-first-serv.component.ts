import { Component, OnInit } from '@angular/core';
import { MyLocalService } from '../my-local.service';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-my-first-serv',
  standalone: true,
  imports: [CommonModule,FormsModule,ReactiveFormsModule],
  providers:[MyLocalService],
  templateUrl: './my-first-serv.component.html',
  styleUrl: './my-first-serv.component.css'
})
export class MyFirstServComponent implements OnInit{

  employee:any

  isupdate=false


  constructor(public Myser:MyLocalService,public fb:FormBuilder)
  {

  }
  empform=this.fb.group({
    eid:[,Validators.required],
    ename:[,Validators.required],
    salary:[,Validators.required]

  })

  ngOnInit(): void {
   
      this.getAllEmployee()
   
  }

  // get id()
  // {
  //   return this.empform.get('id')
  // }
  // get name()
  // {
  //   return this.empform.get('name')
  // }
  // get salary()
  // {
  //   return this.empform.get('salary')
  // }

  getAllEmployee()
  {
    this.employee=this.Myser.getEmployee()
  }
  clearForm(){

    this.empform.reset()

  }

  SaveData(){

    console.log(this.empform.value)
    let emp=this.empform.value
    if(this.isupdate==false)
    {
  
    this.Myser.addEmployee(emp)
    }
    else{
        this.Myser.updateEmployee(emp)
        this.isupdate=false

    }

    this.empform.reset()
    this.getAllEmployee()
  }

  deleteEmp(id:any)
  {
    let result=confirm("Do you want to delete"+id+" ?")
    if(result==true)
    {
      this.Myser.deleteEmployee(id)
      this.getAllEmployee();
    }
  }
  editEmp(emp:any){
   console.log("Hiiii" +" "+emp.value)
    this.isupdate=true
    this.empform.setValue({
      eid:emp.eid,
      ename:emp.ename,
      salary:emp.salary
    })
  }

}
