import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Client } from '../../model/class/client';
import { APIResponseModel } from '../../model/interface/role';
import { constant } from '../../constant/constant';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  constructor(private http:HttpClient) {}
    getAllClient():Observable<APIResponseModel>
    {
       return this.http.get<APIResponseModel>(environment.API_URL+"GetAllClients")
    }
  
    getAllEmployee():Observable<APIResponseModel>
    {
       return this.http.get<APIResponseModel>(environment.API_URL+"GetAllEmployee")
    }
  
    addClient(clientObj:Client):Observable<APIResponseModel>
    {
       return this.http.post<APIResponseModel>(environment.API_URL+"AddUpdateClient",clientObj)
    }
  
    deleteClientByClientId(id:number):Observable<APIResponseModel>
    {
       return this.http.delete<APIResponseModel>(environment.API_URL+"DeleteClientByClientId")
    }
    addUpdateClientProject(clientObj:Client):Observable<APIResponseModel>
    {
       return this.http.post<APIResponseModel>(environment.API_URL+"AddUpdateClientProject",clientObj)
    }
    getAllClientProject():Observable<APIResponseModel>{
      return this.http.get<APIResponseModel>(environment.API_URL + constant.API_METHOD.GET_ALL_PROJECT)
    }

   
}
