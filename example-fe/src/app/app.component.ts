import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'All Products';

  users: Array<string> = [];

  theDataSource: Observable<string>;

  constructor(private http: Http) {
    this.theDataSource = this.http.get('/api/users').map(res => res.json());
  }

  ngOnInit() {

    //Get data from REST server
    this.theDataSource.subscribe(
      data => {
        if(Array.isArray(data)) {
          this.users = data;
        } else {
          this.users.push(data)
        }
      },
      err => console.log("Error loading users. Error code %s URL: %s", err.status, err.url),
      () => console.log("Product(s) are retrieved")
    );
  }

}
