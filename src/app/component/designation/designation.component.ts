import { IDesignation, IRoles } from './../../model/interface/role';
import { APIResponseModel } from '../../model/interface/role';
import { Component,inject,Inject,OnInit} from '@angular/core';
import { MasterService } from '../services/master.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-designation',
  standalone: true,
  imports: [],
  templateUrl: './designation.component.html',
  styleUrl: './designation.component.css'
})
export class DesignationComponent implements OnInit{
  designationList : IDesignation[] =[]; 
  isLoader: boolean = true;
  MasterService = inject(MasterService);
 
  ngOnInit(): void {
    this.MasterService.getAllDesignation().subscribe(
      (response: APIResponseModel) => {
        this.designationList = response.data  
        this.isLoader = false     
        // Handle successful response        
      },
      (error: any) => {
        this.isLoader =true
        // Handle error response
        console.error('Error fetching designations', error);
      }
    );   
  }
}
