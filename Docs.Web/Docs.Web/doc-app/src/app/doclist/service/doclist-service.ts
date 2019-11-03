import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DocListConfig } from '../doclist.config';

@Injectable({
  providedIn: 'root'
})
export class DocListApiServices {

  constructor(private httpClient: HttpClient, private config: DocListConfig) {

  }

  public getDocumentsList(): Observable<any> {
      const url = this.config.apiBaseUrl+this.config.getDocumentList;
      return this.httpClient.get(url);
  }
}
