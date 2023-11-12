// src/app/components/client-list/client-list.component.ts
// src/app/components/client-list/client-list.component.ts

import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { loadClients } from '../../store/actions/client.actions';
import { Observable } from 'rxjs';
import { AppState } from '../../store/app-state.model'; // Certifique-se de usar o caminho correto
import { selectClients } from '../../store/selectors/client.selectors';
import { UtilService } from '../../services/util.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-client-list',
  templateUrl: './client-list.component.html',
  styleUrls: ['./client-list.component.css'],
})
export class ClientListComponent implements OnInit {
  clientes$: Observable<any[]> = this.store.select(selectClients);

  constructor(
    private store: Store<AppState>,
    private router: Router,
    private utilService: UtilService
    ) {}

  ngOnInit() {
    this.store.dispatch(loadClients());
  }

  formatarCNPJFormatado(cnpj: string): string {
    return this.utilService.formatarCNPJFormatado(cnpj);
  }

  editarCliente(cliente: any) {
    // Construa a URL com o CNPJ formatado para evitar problemas nos parâmetros da rota
    const cnpjFormatado = this.utilService.formatarCNPJ(cliente.cnpj);
    const url = `/edit-client/${cnpjFormatado}`;

    // Navegue para a página de edição com os parâmetros
    this.router.navigate([url, { name: cliente.name, cnpj: cliente.cnpj, status: cliente.status }]);
  }
}

