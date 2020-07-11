import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
//import { User } from './user';
import { map, tap } from 'rxjs/operators';
//import { stringify } from 'querystring';
//import { Observable } from 'rxjs/Observable';
//import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class EnrollmentService {
  
 //url1 = 'http://localhost:3000/movies/enroll';
 private url2 = 'http://localhost:3000/movies/email';
  private url3 = 'https://jsonplaceholder.typicode.com/users';
  constructor(private http: HttpClient) { }
  /*enroll(user: User){
   return this.http.post<any>(this.url1, user);
  }*/
  
  /*getEnroll(): Observable<string> {
    return this._http.get(this._url);
  }
  */
 getUsers() {
  return this.http.get<any[]>(this.url3).pipe(
    map(users => {
      const newUsers = [];
      for (let user of users) {
        const uemail = user.email;
        const uName = user.username;
        newUsers.push({ email: uemail, username: uName });
      }
      return newUsers;
    }),
    tap(users => console.log(users))
  );
}

getUserByEmail(email: string) {
  return this.http.get<any[]>(`${this.url3}?email=${email}`);
}
/*

getUserByUsername(uName: string) {
  // return this.http.get<any[]>(`${this.url}?username=${uName}`);

  // or using HttpParams

  return this.http.get<any[]>(this.url3, {
    params: new HttpParams().set('username', uName)
  });
}
*/

}
