import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule} from '@angular/common/http';
import { AllMaterialModule} from './material/material-module';
import {MatNativeDateModule} from '@angular/material/core';
import { DoclistModule } from './doclist/doclist.module';


@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpClientModule,
    AllMaterialModule,
    MatNativeDateModule,
    ReactiveFormsModule,
    HttpClientModule,
    DoclistModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
