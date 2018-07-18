import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Author } from './author.model';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';




@Injectable()
export class AuthorService {

  private url: string = 'http://localhost:3000/authors';

  constructor(private httpClient: HttpClient) { }

  getAuthor(id: string): Observable<Author>{
    let author: Author = null;

    return this.httpClient.get<Author>(this.url + '/' + id).pipe(
      map(dbAuthor => {
        author = new Author(dbAuthor.id);
        author.fullName = dbAuthor.fullName;
        author.image = dbAuthor.image;
        author.url = 'http://localhost:4200/author/'+dbAuthor.id;
        return author;
      }),
      catchError(this.handleError)
    );
  }

  handleError(error: any) {
    let errMsg = (error.message) ? error.message :
    error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    console.error(errMsg);
    return Observable.throw(errMsg);
  }
}