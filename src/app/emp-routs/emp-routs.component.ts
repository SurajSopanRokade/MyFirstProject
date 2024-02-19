import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { MyHttpService } from '../my-http.service';
import { ActivatedRoute, Router, RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-emp-routs',
  standalone: true,
  imports: [CommonModule,HttpClientModule,RouterModule,RouterOutlet],
  providers:[MyHttpService,HttpClient],
  templateUrl: './emp-routs.component.html',
  styleUrl: './emp-routs.component.css'
})
export class EmpRoutsComponent implements OnInit {
  empcode1:any
  users:any[]=[];
  usersdata:any
  
  constructor(public mys:MyHttpService,public active:ActivatedRoute,public r:Router)
  {}
ngOnInit(): void {
  this.mys.getData().subscribe((e: any) => {
    this.users = e.data;
    console.log(this.users)
  });
  let empcode=this.active.snapshot.params['id']
   console.log("Empcode : ",empcode)
  

   for(let i=0;i<this.users.length;i++)
   {
       
      if(empcode==this.users[i].id)
      {
        
       this.usersdata=this.users[i]
       
      }
   }

   console.log(this.usersdata.id)
    
}

goBack(){
  this.r.navigate(['Home'])
}
}

