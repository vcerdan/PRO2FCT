import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// Este servicio se encarga de gestionar la comunicación con el backend
// y de realizar las peticiones HTTP necesarias para obtener los datos
// y enviar la información al servidor. Se puede utilizar para realizar
export class BackendService {


  private apiUrl = 'http://localhost:3000/api/hola'; // URL de la API del backend

  // Constructor del servicio, inyecta el HttpClient para realizar peticiones HTTP
  // y define la URL de la API del backend
  constructor(private http: HttpClient) {}


  getSaludo(): Observable<any> {
    // Realiza una petición GET a la API del backend y devuelve un Observable con la respuesta
    return this.http.get<any>(this.apiUrl);
  }
}
