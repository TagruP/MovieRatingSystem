import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class HttpService {

  constructor(private http: HttpClient) {
  }

  get<T>(endpoint: string, httpOptions = {}): Observable<T> {
    return this.http.get<T>(endpoint, {
      ...httpOptions
    });
  }

  post<T>(endpoint: string, body, httpOptions = {}): Observable<T> {
    return this.http.post<T>(endpoint, body, {
      ...httpOptions
    });
  }

  put<T>(endpoint: string, body, httpOptions = {}): Observable<T> {
    return this.http.put<T>(endpoint, body, {
      ...httpOptions
    });
  }

  delete<T>(endpoint: string, httpOptions = {}) {
    return this.http.delete<T>(endpoint, {
      ...httpOptions
    });
  }
}