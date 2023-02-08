/**
 * Created by andresdkm on 16/04/17.
 */
import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';
import {environment} from '../environments/environment';

@Injectable()
export class RestService {

  private baseUrl: string;
  private httpOptions;

  constructor(private httpClient: HttpClient) {
    this.baseUrl = environment.server;
  }


  reload(baseUrl) {
    this.baseUrl = baseUrl;
  }

  setToken(accessToken: string) {
    this.httpOptions = {
      headers: new HttpHeaders({Authorization: 'Bearer ' + accessToken})
    };
  }

  indexWitoutSpinner<T>(url): Observable<any> {
    return this.httpClient.get<T>(this.baseUrl + url, this.httpOptions);
  }


  index<T>(url): Observable<any> {
    return this.httpClient.get<T>(this.baseUrl + url, this.httpOptions)
      .pipe(
        tap(response => console.log('get response', response)),
        catchError(this.handleError())
      );
  }

  create<T>(url, data): Observable<any> {
    return this.httpClient.post<T>(this.baseUrl + url, data, this.httpOptions)
      .pipe(
        tap(response => console.log('post response', response)),
        catchError(this.handleError())
      );
  }

  update<T>(url: string, id: string, data: any): Observable<any> {
    console.log(this.httpOptions);
    return this.httpClient.put<T>(this.baseUrl + url + '/' + id, data, this.httpOptions)
      .pipe(
        tap(response => console.log('put response', response)),
        catchError(this.handleError())
      );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }


}
