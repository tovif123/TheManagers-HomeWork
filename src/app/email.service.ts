import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class EmailService {


  baseUrl = 'http ://localhost/api/';

  constructor(private http : HttpClient) {}
/* id:any, */
  store(mail:{id:any,userName:any,adressEmail:any,subject:any,content:any}){
    return this.http.post("//localhost/theManagersProject/list.php", { data: mail });
}
}
