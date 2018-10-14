import { Component } from '@angular/core';
import { goodReadsJSONResponse } from 'goodreads-json-api';
import { BookService } from './app.service';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {

constructor(private http:HttpClient) {
	
}

searchBook(bookName) {
	this.http.get('https://www.goodreads.com/search.xml?key=YOUR_KEY&q='+ bookName +').map(response => {
        return response.json();
      });
}

}
