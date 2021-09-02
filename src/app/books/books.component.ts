import { Component, OnInit } from '@angular/core';
import { ApiBookService } from '../api/api-book.service';
import { tap, map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
export interface booksList {
  body: [
    {
      id: string;
      authorId: string;
      title: string;
      summary: string;
    }
  ];
  itemCount: number;
}
@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.css'],
})
export class BooksComponent implements OnInit {
  private API_LINK = environment.API_LINK;
  constructor(
    private apiBookService: ApiBookService,
    private http: HttpClient
  ) {}

  ngOnInit(): void {
    this.showAllBooks();
  }
  showAllBooks() {
    this.http.get(this.API_LINK + 'book/getBooks.php').pipe(
      map((res: booksList) => {
        console.log(res);
        return res.body;
      })
    );
    /* this.apiBookService.getBooks().pipe(
      tap((res) => {
        console.log(res);
      })
    ); */
  }
}
