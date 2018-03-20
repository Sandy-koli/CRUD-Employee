import { Component, OnInit } from '@angular/core';
import { Employee } from '../Model/employee.model';

@Component({
  templateUrl: './employeelist.component.html',
  styleUrls: ['./employeelist.component.css']
})
export class EmployeelistComponent implements OnInit {
  employee: Employee[] = [
    {
      id: 1,
      name: 'Debasis',
      gender: 'male',
      contactpreference: 'Phone',
      phoneNumber: 9619323431,
      dateOfBirth: new Date('01/Jan/2014'),
      email: '',
      department: '',
      isActive: true,
      photoPath: ''
    },
    {
      id: 2,
      name: 'Sandeep',
      gender: 'male',
      contactpreference: 'Phone',
      phoneNumber: 9619323431,
      dateOfBirth: new Date('01/Jan/2010'),
      department: '',
      isActive: true,
      photoPath: ''
    },
    {
      id: 3,
      name: 'Mahesh Iyer',
      gender: 'male',
      contactpreference: 'Phone',
      phoneNumber: 9619323431,
      dateOfBirth: new Date('01/Jan/2016'),
      department: '',
      isActive: true,
      photoPath: ''
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}
