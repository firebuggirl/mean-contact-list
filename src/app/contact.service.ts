import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Contact } from './models/Contact';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';
import { ENV } from './core/env.config';
import { AuthService } from './auth/auth.service';

import { throwError as ObservableThrowError } from 'rxjs';

@Injectable()
export class ContactService {

  constructor(
    private http: HttpClient,
    private messageService: MessageService,
    private auth: AuthService
    ) { }

  // set an Auth header using access token stored in local storage
  // from auth service we created + return necessary Auth
  // value w/ currently stored access token
  // token may change if authentication is silently renewed during a session
  private get _authHeader(): string {
    return `Bearer ${this.auth.accessToken}`;
  }



  // GET ALL ContactS
  // getAllContacts(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>('api/contact');
  // }

  getPaginatedContacts(): Observable<Contact[]> {
    // return this.http.get<Contact[]>('api/contact');
    return this.http.get<Contact[]>(`${ENV.BASE_API}contact`);
  }

  // GET A Contact
  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`${ENV.BASE_API}contact/${id}`);
  }



  // SAVE A Contact
  // insertContact(contact: Contact): Observable<Contact> {
  //   return this.http.post<Contact>('api/contact', contact);
  // }

  // Create a new contact (admin only)
  insertContact(contact: Contact): Observable<Contact> {
  return this.http
    .post<Contact>(`${ENV.BASE_API}contact`, contact, {
      headers: new HttpHeaders().set('Authorization', this._authHeader)
    })
    .pipe(
      catchError((error) => this._handleJWTError(error))
    );
}

  // UPDATE A Contact
  // void => a Typescript return type => the method does not return a value
  // updateContact(id: string, contact: Contact): Observable<void> {
  //   return this.http.put<void>(`api/contact/${id}`, contact);
  // }

  // UPDATE A Contact (login required)
  // takes the ID of the Contact being edited + an object of type Contact w/ updated data
  updateContact(id: string, contact: Contact): Observable<Contact> {
    return this.http
      .put(`${ENV.BASE_API}contact/${id}`, contact, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleJWTError(error))
      );
  }

  // DELETE A Contact
  // deleteContact(id: string): Observable<void> {
  //   return this.http.delete<void>(`api/contact/${id}`);
  // }

  // DELETE existing event and all associated RSVPs (admin only)
  deleteContact(id: string): Observable<any> {
    return this.http
      .delete(`${ENV.BASE_API}contact/${id}`, {
        headers: new HttpHeaders().set('Authorization', this._authHeader)
      })
      .pipe(
        catchError((error) => this._handleJWTError(error))
      );
  }



searchContacts(term: string): Observable<Contact[]> {
  term = term.trim();

  // Add safe, URL encoded search parameter if there is a search term
  const options = term ?
   { params: new HttpParams().set('name', term) } : {};

  return this.http.get<Contact[]>(`${ENV.BASE_API}search/`, options)
    .pipe(
      catchError(this.handleError<Contact[]>('searchContactes', []))
    );
}





 private handleError<T> (operation = 'operation', result?: T) {
  return (error: any): Observable<T> => {

    // TODO: send the error to remote logging infrastructure
    console.error(error); // log to console instead

    // TODO: better job of transforming error for user consumption
    this.log(`${operation} failed: ${error.message}`);

    // Let the app keep running by returning an empty result.
    return of(result as T);
  };
}

    /** Log a ContactService message with the MessageService */
    private log(message: string) {
      this.messageService.add('ContactService: ' + message);
    }


    private _handleJWTError(err: HttpErrorResponse | any): Observable<any> {
      const errorMsg = err.message || 'Error: Unable to complete request.';
      if (err.message && err.message.indexOf('No JWT present') > -1) {
        this.auth.login();
      }
      return ObservableThrowError(errorMsg);
    }

}
