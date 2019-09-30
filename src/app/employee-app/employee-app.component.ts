import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-employee-app',
  templateUrl: './employee-app.component.html',
  styleUrls: ['./employee-app.component.scss']
})
export class EmployeeAppComponent implements OnInit {

  url: string ="assets/data/employee.json";
  
  items = [];

  constructor(private http: HttpClient, private router: Router) {
    this.http.get(this.url).toPromise().then(data =>{
      
      for(let key in data)
        if(data.hasOwnProperty(key))
          this.items.push(data[key]);

    });
   }

  empOne(){
    this.router.navigate(['/emp-one']);
  }

  empTwo(){
    this.router.navigate(['/emp-two']);
  }

  empThree(){
    this.router.navigate(['/emp-three']);
  }

  empFour(){
    this.router.navigate(['/emp-four']);
  }

  getCurrentUser(user): void {
    console.log(user);
  }

  ngOnInit() {
    
  }
}
