import { FormsModule } from '@angular/forms';
import { Client } from '../../model/class/client';
import { Component, inject, OnInit } from '@angular/core';
import { ClientService } from '../services/client.service';
import { APIResponseModel } from '../../model/interface/role';

@Component({
  selector: 'app-client',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './client.component.html',
  styleUrl: './client.component.css'
})
export class ClientComponent implements OnInit {

  clientObj: Client = new Client();
  clientList: Client[] = [];
  clientService = inject(ClientService)

  ngOnInit(): void {
    this.getClient();
  }
  getClient() {
    this.clientService.getAllClient().subscribe((response: APIResponseModel) => {
      this.clientList = response.data;
    })
  }
  onSaveClient(clientObj:Client) {
    this.clientService.addClient(this.clientObj).subscribe((response: APIResponseModel) => {
      if (response.result) {
        console.log("updated successfully")
      }
      else {
        console.log("not updated")
      }
    })

  }

  onDelete(id:number)
  {
    const isDelete = confirm("Are you sure want to delet the client")
    if(isDelete){
      this.clientService.deleteClientByClientId(id).subscribe((response:APIResponseModel)=>
        {
         
          if(response.result)
          {
            console.log("client deleted successfully");
          }
          else{
            console.log("Error in deleting the client");
          }
        })
    }
   
  }
  onEdit(data:Client)
  {
this.clientObj = data;
  }
}
