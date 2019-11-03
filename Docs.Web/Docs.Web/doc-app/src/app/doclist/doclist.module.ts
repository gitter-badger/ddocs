import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocListComponent } from './doclist.component/doclist.component';
import { AllMaterialModule } from '../material/material-module';

@NgModule({
  declarations: [
    DocListComponent
  ],
  imports: [
    CommonModule,
    AllMaterialModule
  ],
  exports: [ DocListComponent ]
})
export class DoclistModule { }
