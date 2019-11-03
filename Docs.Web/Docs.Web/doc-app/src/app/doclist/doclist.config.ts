import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocListConfig {
  public apiBaseUrl = 'https://localhost:44399/'
  public getDocumentList ='api/documents'
}
