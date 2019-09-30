import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DndComponent } from './dnd/dnd.component';
import { EmployeeAppComponent } from './employee-app/employee-app.component';
import { HttpClientModule } from '@angular/common/http';
import { EmpOneComponent } from './emp-one/emp-one.component';
import { EmpTwoComponent } from './emp-two/emp-two.component';
import { EmpThreeComponent } from './emp-three/emp-three.component';
import { EmpFourComponent } from './emp-four/emp-four.component';

@NgModule({
  declarations: [
    AppComponent,
    DndComponent,
    EmployeeAppComponent,
    EmpOneComponent,
    EmpTwoComponent,
    EmpThreeComponent,
    EmpFourComponent
  ],
  imports: [
    BrowserModule,
    DragDropModule,
    AppRoutingModule,
    HttpClientModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
