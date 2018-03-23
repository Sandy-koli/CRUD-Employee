import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../Model/department.model';
import { Employee } from '../Model/employee.model';
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';


@Component({
  selector: 'app-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
  previewPhoto = false;
  datepickerConfig: Partial<BsDatepickerConfig>;
  colorTheme: 'theme-blue';
  // gender = 'female';
  // isActive = true;
  // department = '5';
  employee: Employee = {
    id: null,
    name: null,
    gender: null,
    email: '',
    phoneNumber: null,
    contactpreference: null,
    dateOfBirth: null,
    department: 'select',
    isActive: null,
    photoPath: null
    };
  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'HR' },
    { id: 3, name: 'Admin' },
    { id: 4, name: 'IT' },
    { id: 5, name: 'Architect' },
    { id: 6, name: 'Manager' }
  ];
  constructor() {
    this.datepickerConfig = Object.assign({}, {
      // containerClass: this.colorTheme,
      // showWeekNumbers: false,
      // minDate: new Date(2018, 0, 1),
      // maxDate: new Date(2018, 12, 31),
      dateInputFormat: 'DD/MMM/YYYY'
    });
  }

  ngOnInit() {
  }

  togglePreviewPhoto() {
this.previewPhoto = !this.previewPhoto;
console.log('PreviewPhoto: ' + this.previewPhoto);
  }

  onSave_Click(NewEmployee: Employee): void {
    console.log(NewEmployee);
  }

}
