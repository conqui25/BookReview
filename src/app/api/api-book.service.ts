import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { tap, map } from 'rxjs/operators';
import { Injectable } from '@angular/core';
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
@Injectable()
export class ApiBookService {
  private API_LINK = environment.API_LINK;
  constructor(private http: HttpClient) {}

  getBooks() {
    return this.http.get(this.API_LINK + 'book/getBooks.php').pipe(
      map((res: booksList) => {
        console.log(res);
        return res.body;
      })
    );
  }
}
