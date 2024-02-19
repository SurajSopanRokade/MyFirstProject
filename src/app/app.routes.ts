import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { MyHttpuseComponentComponent } from './my-httpuse-component/my-httpuse-component.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { MyFirstServComponent } from './my-first-serv/my-first-serv.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpRoutsComponent } from './emp-routs/emp-routs.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import { AddListComponent } from './add-list/add-list.component';
import { MoviesComponent } from './movies/movies.component';
import { MyHttpUseCompComponent } from './my-http-use-comp/my-http-use-comp.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { PracticeComponent } from './practice/practice.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';

export const routes: Routes = [
    {path:'Home', component:HomeComponent},
    {path:'Pract', component:PracticeComponent},
    {path:'Login', component:LoginComponent},
    {path:'Login2', component:Login2Component},
    {path:'AboutUs', component:AboutUsComponent},
    {path:'Form', component:FormDemoComponent},
    {path:'HTTP', component:MyHttpuseComponentComponent},
    {path:'Attribute', component:AttributeDemoComponent},
    {path:'myFirstserv', component:MyFirstServComponent},
    {path: "EmpData/:id", component:EmpRoutsComponent},
    {path: 'selectcourse', component:SelectCourseComponent},
    {path: "addcourse", component:AddListComponent},
    {path: "Movie", component:MoviesComponent},
    {path:"MyHttpUse", component:MyHttpUseCompComponent},
    {path:"tempfrom1", component:TempleteDrivenFormComponent},
    {path:'**', component:PageNotFoundComponent}
];
