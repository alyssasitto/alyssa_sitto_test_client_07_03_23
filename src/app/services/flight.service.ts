import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Flight } from '../Flight/flight';

const baseUrl = 'http://localhost:8080/flight';

@Injectable({
  providedIn: 'root',
})
export class FlightService {
  constructor(private http: HttpClient) {}

  getAllFlights() {
    return this.http.get<Flight[]>(baseUrl);
  }

  getFlightById(id: string) {
    return this.http.get(`${baseUrl}/${id}`);
  }

  addFlight(data: Flight) {
    return this.http.post(`${baseUrl}/add`, data);
  }

  deleteFlight(id: string) {
    return this.http.delete(`${baseUrl}/delete/${id}`);
  }

  updateFlight(data: Flight) {
    return this.http.put(`${baseUrl}/update`, data);
  }
}
