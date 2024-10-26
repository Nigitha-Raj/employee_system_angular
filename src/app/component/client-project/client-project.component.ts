import { Component, inject, OnInit, signal } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { ClientService } from '../services/client.service';
import { APIResponseModel, ClientProject, Employee } from '../../model/interface/role';
import { Client } from '../../model/class/client';
import { AsyncPipe, DatePipe } from '@angular/common';
import { AlertComponent } from '../../reusableComponent/alert/alert.component';

@Component({
  selector: 'app-client-project',
  standalone: true,
  imports: [ReactiveFormsModule,DatePipe,AlertComponent],
  templateUrl: './client-project.component.html',
  styleUrl: './client-project.component.css'
})
export class ClientProjectComponent implements OnInit {
clientService = inject(ClientService);
employeeList : Employee[] =[];
clientList : Client[] =[];
projectList = signal<ClientProject[]>([])

projectForm : FormGroup = new FormGroup({
  clientProjectId: new FormControl(0),
  projectName: new FormControl("",[Validators.minLength(4),Validators.required]),
  startDate: new FormControl(""),
  expectedEndDate: new FormControl(""),
  leadByEmpId: new FormControl(""),
  completedDate : new FormControl(""),
  contactPerson: new FormControl(""),
  contactPersonContactNo : new FormControl(""),
  totalEmpWorking: new FormControl(""),
  projectCost : new FormControl(""),
  projectDetails : new FormControl(""),
  contactPersonEmailId : new FormControl(""),
  clientId: new FormControl("")
})


ngOnInit(): void {
 this.getAllEmployee();
 this.getAllClient();
 this.getAllClientProject()
}
getAllEmployee()
{
  this.clientService.getAllEmployee().subscribe((response:APIResponseModel)=>
  {
    this.employeeList = response.data;
    console.log("Employee List" +this.employeeList)
  })  
}

getAllClientProject()
{
  this.clientService.getAllClientProject().subscribe((response:APIResponseModel)=>
  {
    console.log("response" +response.data)
   this.projectList.set(response.data)
   console.log("clientProject List" +this.projectList)
  })  
}

getAllClient()
{
  this.clientService.getAllClient().subscribe((response:APIResponseModel)=>
  {
    this.clientList = response.data;
  
  })
}
onSaveProject()
{
 const projectFormvalue = this.projectForm.value;
  this.clientService.addUpdateClientProject(projectFormvalue).subscribe((response:APIResponseModel)=>
  {if(response.result)
  {
    console.log("Api call is success");
  }else{
    console.log(response.result);
  }

  })
}

}
