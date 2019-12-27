import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Contact } from './models/Contact';
import { catchError, map, tap } from 'rxjs/operators';
import { MessageService } from './message.service';



@Injectable()
export class ContactService {

  private contactUrl = 'api/contact';// URL to web api
  // private contactsUrl = 'api/contacts';  // URL to web api

  constructor(private http: HttpClient, private messageService: MessageService ) { }




  // GET ALL ContactS
  // getAllContacts(): Observable<Contact[]> {
  //   return this.http.get<Contact[]>('api/contact');
  // }

  getPaginatedContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>('api/contact');
  }

  // GET A Contact
  getContact(id: string): Observable<Contact> {
    return this.http.get<Contact>(`api/contact/${id}`);
  }



  // SAVE A Contact
  insertContact(contact: Contact): Observable<Contact> {
    return this.http.post<Contact>('api/contact', contact);
  }

  // UPDATE A Contact
  // void => a Typescript return type => the method does not return a value
  updateContact(id: string, contact: Contact): Observable<void> {
    return this.http.put<void>(`api/contact/${id}`, contact);
  }

  // DELETE A Contact
  deleteContact(id: string): Observable<void> {
    return this.http.delete<void>(`api/contact/${id}`);
  }



searchContacts(term: string): Observable<Contact[]> {
  term = term.trim();

  // Add safe, URL encoded search parameter if there is a search term
  const options = term ?
   { params: new HttpParams().set('name', term) } : {};

  return this.http.get<Contact[]>(`api/search/`, options)
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

}
