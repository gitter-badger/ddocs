import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ApiServices {

  constructor(private httpClient: HttpClient) {

  }

  public getDocumentsList(): Observable<any> {
      return this.httpClient.get("https://localhost:44399/api/documents");
  }
}
