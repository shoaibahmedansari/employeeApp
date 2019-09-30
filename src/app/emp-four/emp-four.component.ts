import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-emp-four',
  templateUrl: './emp-four.component.html',
  styleUrls: ['./emp-four.component.scss']
})
export class EmpFourComponent implements OnInit {

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
