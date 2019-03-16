import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  array: any[];

  constructor(private http: HttpClient) { }

  getData() {
    this.http.get('/getJson').subscribe(data => {
        // console.log(data);
        this.array = Array.of(data);
        this.array = this.array[0];
         console.log(this.array);
        // console.log(data[0]);
      },
      (err: HttpErrorResponse) => {
        console.log(err.message);
      }
    );
  }
  ngOnInit() {}
}
