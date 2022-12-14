import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserData as Data } from './userData';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

  constructor(private httpClient: HttpClient) { }

  getData() {
    return this.httpClient.get<Data[]>("http://localhost:3000/data");
  }

  getDataById(id : number) {
    return this.httpClient.get<Data>(`http://localhost:3000/data/${id}`);
  }

  createData(data: Data) {
    return this.httpClient.post<Data>("http://localhost:3000/data", data);
  }

  updateData(data: Data) {
    return this.httpClient.put<Data>(`http://localhost:3000/data/${data.id}`, data);
  }


}
