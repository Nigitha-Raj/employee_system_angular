import { Component, inject, OnInit } from '@angular/core';
import { FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { APIResponseModel, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/client';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
clientService = inject(ClientService);
employeeList : Employee[] =[];
clientList : Client[] =[];
projectForm : FormGroup = new FormGroup({
  clientProjectId: new FormGroup(0),
  projectName: new FormGroup(""),
  startDate: new FormGroup(""),
  expectedEndDate: new FormGroup(""),
  leadByEmpId: new FormGroup(""),
  completedDate : new FormGroup(""),
  contactPerson: new FormGroup(""),
  contactPersonContactNo : new FormGroup(""),
  totalEmpWorking: new FormGroup(""),
  projectCost : new FormGroup(""),
  projectDetails : new FormGroup(""),
  contactPersonEmailId : new FormGroup(""),
  clientId: new FormGroup("")
})


ngOnInit(): void {
 this.getAllEmployee();
 this.getAllClient();
}
getAllEmployee()
{
  this.clientService.getAllEmployee().subscribe((response:APIResponseModel)=>
  {
    this.employeeList = response.data;
    console.log("Employee List" +this.employeeList)
  })  
}

getAllClient()
{
  this.clientService.getAllClient().subscribe((response:APIResponseModel)=>
  {
    this.clientList = response.data;
  })
}

}
