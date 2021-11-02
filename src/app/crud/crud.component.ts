import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crud',
  templateUrl: './crud.component.html',
  styleUrls: ['./crud.component.css'],
})
export class CrudComponent implements OnInit {
  newEmployeeClicked = false;
  employee = [
    { name: 'Asdd', Position: 'developer' },
    { name: 'treee', Position: 'frfjr' },
    { name: 'Ashu', postion: 'desiger' },
  ];
  color: any;
  constructor() {}

  ngOnInit(): void {}
  model: any = {};
  model2: any = {};
  addEmployee() {
    this.employee.push(this.model);
    this.model = {};
  }
  deleteEmployee(i: any) {
    this.employee.splice(i);
    console.log(i);
  }
  myValue: any;

  editEmployee(editEmployeeInfo: any) {
    this.model2.name = this.employee[editEmployeeInfo].name;
    this.model2.postion = this.employee[editEmployeeInfo].postion;
    this.myValue = editEmployeeInfo;
  }
  updateEmployee() {
    let editEmployeeInfo = this.myValue;
    for (let i = 0; i < this.employee.length; i++) {
      if (i == editEmployeeInfo) {
        this.employee[i] = this.model2;
        this.model2 = {};
      }
    }
  }
  addNewEmoloyeeBtn() {
    this.color = !this.color;
    if (this.color) {
      return '#ffffff';
    } else {
      return '#f6f6f6';
    }
  }
}
