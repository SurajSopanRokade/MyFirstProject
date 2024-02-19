import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { DirectivesDemoComponent } from './directives-demo/directives-demo.component';
import { AttributeDemoComponent } from './attribute-demo/attribute-demo.component';
import { PipeDemoComponent } from './pipe-demo/pipe-demo.component';
import { WordCountPipe } from './word-count.pipe';
import { PowerFunPipe } from './power-fun.pipe';
import { FormDemoComponent } from './form-demo/form-demo.component';
import { ParentComponent } from './parent/parent.component';
import { MyFirstServComponent } from './my-first-serv/my-first-serv.component';
import { MyHttpuseComponentComponent } from './my-httpuse-component/my-httpuse-component.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { EmpRoutsComponent } from './emp-routs/emp-routs.component';
import { SelectCourseComponent } from './select-course/select-course.component';
import { addListener } from 'process';
import { AddListComponent } from './add-list/add-list.component';
import { MoviesComponent } from './movies/movies.component';
import { MyHttpUseCompComponent } from './my-http-use-comp/my-http-use-comp.component';
import { LoginComponent } from './login/login.component';
import { Login2Component } from './login2/login2.component';
import { TempleteDrivenFormComponent } from './templete-driven-form/templete-driven-form.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterModule,HomeComponent,DirectivesDemoComponent,AttributeDemoComponent,PipeDemoComponent,WordCountPipe,PowerFunPipe,FormDemoComponent,ParentComponent,MyFirstServComponent,MyHttpuseComponentComponent,PageNotFoundComponent,EmpRoutsComponent,SelectCourseComponent,AddListComponent,MoviesComponent,MyHttpUseCompComponent,LoginComponent,Login2Component,TempleteDrivenFormComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'MyFirstProject';
}
