import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';
import { Bus } from './bus';

@Injectable({
  providedIn: 'root'
})
export class BusService {

  private baseURL = "http://localhost:8999/gurusbus.in";

  constructor(private httpClient: HttpClient) { }
  
  getBusList(): Observable<Bus[]>{
    return this.httpClient.get<Bus[]>(`${this.baseURL}/getBuses`);

  }

  addBus(bus: Bus): Observable<Object>{
    return this.httpClient.post(`${this.baseURL}/addNewBus`, bus);
  }

  getBusByBusNumber(busNumber: string): Observable<Bus>{
    return this.httpClient.get<Bus>(`${this.baseURL}/getBus/${busNumber}`);
  }

  updateBus(busNumber: string, bus: Bus): Observable<Object>{
    return this.httpClient.put(`${this.baseURL}/updateBusDetails/${busNumber}`, bus);
  }

  deleteBus(busNumber: string): Observable<Object>{
    return this.httpClient.delete(`${this.baseURL}/deleteBusDetails/${busNumber}`);
  }
}