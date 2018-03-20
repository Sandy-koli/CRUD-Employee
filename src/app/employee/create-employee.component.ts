import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../Model/department.model';
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  // gender = 'female';
  // isActive = true;
  // department = '5';
  departments: Department[] = [
   { id: 1, name: 'Help Desk'},
   { id: 2, name: 'HR'},
   { id: 3, name: 'Admin'},
   { id: 4, name: 'IT'},
   { id: 5, name: 'Architect'},
   { id: 6, name: 'Manager'}
  ];
  constructor() { }

  ngOnInit() {
  }

  onSave_Click(empForm: NgForm): void {
    console.log(empForm.value);
  }

}
