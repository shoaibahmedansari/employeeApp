import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emp-two',
  templateUrl: './emp-two.component.html',
  styleUrls: ['./emp-two.component.scss']
})
export class EmpTwoComponent implements OnInit {

  url: string ="assets/data/employee.json";
  
  items = [];

  constructor(private http: HttpClient) {
    this.http.get(this.url).toPromise().then(data =>{
      
     // console.log(data[0]);

        for(let key in data)
          if(data.hasOwnProperty(key))
            this.items.push(data[key]);
    });
   }

  ngOnInit() {
  }

}
