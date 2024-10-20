import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../../environments/environment';
import { Client } from '../../model/class/client';
import { APIResponseModel } from '../../model/interface/role';

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
  
}
