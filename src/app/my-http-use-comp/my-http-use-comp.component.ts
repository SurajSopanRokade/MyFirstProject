import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, RouterOutlet } from '@angular/router';
import { MyHttpService } from '../my-http.service';
import { MyhttpuseServiceService } from '../myhttpuse-service.service';

@Component({
  selector: 'app-my-http-use-comp',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,RouterOutlet,ReactiveFormsModule],
  providers:[MyhttpuseServiceService],
  templateUrl: './my-http-use-comp.component.html',
  styleUrl: './my-http-use-comp.component.css'
})
export class MyHttpUseCompComponent {
  user:any
  empform!:FormGroup
  isupdate!:boolean
  constructor(public myclient:MyhttpuseServiceService,public fb:FormBuilder)
  {}

  ngOnInit(): void {

    this.getAllEmp()
    // this.myclient.getData().subscribe((e:any)=>this.user=e.data)

    // console.log(this.user)
    this.empform=this.fb.group({
      id:[,Validators.required],
      name:[,Validators.required],
      salary:[,Validators.required]
    })

    this.isupdate=false
  }


getAllEmp()
{
  this.myclient.getData().subscribe(result=>{this.user=result})
}



   get id()
   {
    return this.empform.get('id')
   }
   get name()
   {
    return this.empform.get('name')
   }
   get salary()
   {
     return this.empform.get('salary')
   }
   editEmp(emp:any)
  {
      this.isupdate=true

      this.empform.setValue({
        id:emp.id,
        name:emp.name,
        salary:emp.salary
      })
  }
  deleteEmp(id:any)
  {
      let res=confirm('Do you want to delete'+ id+"?")
      if(res==true)
      {
        this.myclient.deleteData(id).subscribe(result=>{
          this.getAllEmp()
        })
      }
  }

  SaveData()
  {
      let emp=this.empform.value
      if(!this.isupdate)
      {
        this.myclient.saveData(emp).subscribe(result=>{
          
        })
      }
      else
      {
            let id=parseInt(this.empform.value.id)
            this.myclient.updateEmp(id,emp).subscribe(result=>{})
      }
      this.getAllEmp()
      this.isupdate=false
      this.empform.reset()
  }

  clearForm()
  {

  }

}
