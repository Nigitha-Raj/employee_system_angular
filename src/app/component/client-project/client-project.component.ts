import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
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
  clientProjectId: new FormControl(0),
  projectName: new FormControl(""),
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
