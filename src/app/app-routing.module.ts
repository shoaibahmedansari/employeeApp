import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmpOneComponent } from './emp-one/emp-one.component';
import { EmpTwoComponent } from './emp-two/emp-two.component';
import { EmpThreeComponent } from './emp-three/emp-three.component';
import { EmpFourComponent } from './emp-four/emp-four.component';


const routes: Routes = [
  {
    path:'emp-one',component:EmpOneComponent
  },
  {
    path:'emp-two',component:EmpTwoComponent
  },
  {
    path:'emp-three',component:EmpThreeComponent
  },
  {
    path:'emp-four',component:EmpFourComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
