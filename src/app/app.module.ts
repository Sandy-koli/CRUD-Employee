import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { EmployeelistComponent } from './employee/employeelist.component';
import { CreateEmployeeComponent } from './employee/create-employee.component';
import { Route } from '@angular/compiler/src/core';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { SelectValidationDirective } from './shared/select-validation.directive';
import { HttpModule } from '@angular/http';

const appRoute: Routes = [
  { path: 'list', component: EmployeelistComponent },
  { path: 'create', component: CreateEmployeeComponent },
  { path: '', redirectTo: '/list', pathMatch: 'full'}
];

@NgModule({
  declarations: [
    AppComponent,
    EmployeelistComponent,
    CreateEmployeeComponent,
    SelectValidationDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    BsDatepickerModule.forRoot(),
    RouterModule.forRoot(appRoute),
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
