import { IDesignation } from './../../model/interface/role';
import { APIResponseModel } from '../../model/interface/role';
import { Component,inject,Inject,OnInit} from '@angular/core';
import { MasterService } from '../services/master.service';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  designationList : IDesignation[] =[]; 
  MasterService = inject(MasterService);

  ngOnInit(): void {
    this.MasterService.getAllDesignation().subscribe(
      (response: APIResponseModel) => {
        // Handle successful response
        console.log(response);
      },
      (error: any) => {
        // Handle error response
        console.error('Error fetching designations', error);
      }
    );
  }
}
