import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./pages/home/home.component";
import {CreateHostelComponent} from "./pages/create-hostel/create-hostel.component";
import {ViewHostelsComponent} from "./pages/view-hostels/view-hostels.component";
import {UpdateHostelsComponent} from "./pages/update-hostels/update-hostels.component";

const routes: Routes = [
  {
    path:'',
    redirectTo:'home',
    pathMatch:'full'

  },
  {
    path:'home',
    component:HomeComponent,
    title:'Home - HostelManagement'
  },
  {
    path:'create-hostel',
    component:CreateHostelComponent,
    title:'Create Hostel'
  },
  {
    path:'view-hostels',
    component:ViewHostelsComponent
  }
  ,{
    path:"update-hostels",
    component:UpdateHostelsComponent,
    title:'Update Hostel'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
