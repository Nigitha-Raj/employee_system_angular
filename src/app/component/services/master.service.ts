import { APIResponseModel } from './../../model/interface/role';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }
  getAllDesignation():Observable<APIResponseModel>
  {
    return this.http.get<APIResponseModel>("https://cors-anywhere.herokuapp.com/https://freeapi.miniprojectideas.com/api/ClientStrive/GetAllDesignation")
  }
}
