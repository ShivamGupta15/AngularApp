import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {ContentComponent} from './content/content.component';
import { HomeComponent } from './home/home.component';
import { FormspageComponent } from './formspage/formspage.component';


const routes: Routes = [ {path: 'forms', component: FormspageComponent},
 { path: 'content', component: ContentComponent},
 {path: 'home', component: HomeComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
