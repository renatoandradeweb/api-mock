// src/app/services/client.service.ts

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class ClientService {
  private apiUrl = 'http://demo7014671.mockable.io/clients';

  constructor(private http: HttpClient) {}

  getClients(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  addClient(client: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, client)
    .pipe(
      catchError(error => {
        console.error('Erro ao adicionar cliente:', error);
        throw error; // Rethrow para manter o erro no fluxo de observação
      })
    );
  }

  getClient(cnpj: string): Observable<any> {
    const url = `${this.apiUrl}/${cnpj}`;
    return this.http.get<any>(url);
  }

  updateClient(client: any): Observable<any> {
    return this.http.put<any>(this.apiUrl, client)
    .pipe(
      catchError(error => {
        console.error('Erro ao atualizar cliente:', error);
        throw error; // Rethrow para manter o erro no fluxo de observação
      })
    );
  }

  editClient(client: any): Observable<any> {
    const editUrl = `${this.apiUrl}/${client.cnpj}/edit`; // Substitua "id" pelo campo apropriado
    return this.http.put<any>(editUrl, client)
      .pipe(
        catchError(error => {
          console.error('Erro ao editar cliente:', error);
          throw error;
        })
      );
  }


}
