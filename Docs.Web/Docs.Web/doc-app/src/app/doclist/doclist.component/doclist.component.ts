import { Component, OnInit } from '@angular/core';
import { DocListApiServices } from '../service/doclist-service';
import { IDocLibrary } from '../models/models';

@Component({
  selector: 'app-doclist',
  templateUrl: './doclist.component.html',
  styleUrls: ['./doclist.component.css']
})
export class DocListComponent implements OnInit {

  displayedColumns: string[] = ['id', 'name', 'libType', 'created', 'createdBy','modified','modifiedBy'];
  docLibList: IDocLibrary[];
  title = 'Document Library';
  inProgress = true

  constructor(private apiService: DocListApiServices){
  }

   ngOnInit(): void {
    this.apiService.getDocumentsList()
    .subscribe( (data) => {
      this.docLibList = data as IDocLibrary[];
      this.inProgress = false;
    });
   }

}
