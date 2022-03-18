import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
  
import { NgxPaginationModule } from 'ngx-pagination';

import { RouterModule, Routes } from '@angular/router'

import { GradeComponent } from './grade/grade.component';


const routes: Routes =[
{ path: 'grade', component: GradeComponent},
// { path: '', redirectTo: '/grade', pathMatch: 'full'}

];


@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule, 
    HttpClientModule,
    NgxPaginationModule,
  ],
  declarations: [ AppComponent, GradeComponent],
  providers: [],
  bootstrap: [AppComponent],

})
export class AppModule { }
