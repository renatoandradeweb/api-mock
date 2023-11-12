// src/app/components/add-client/add-client.component.ts

import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Store } from '@ngrx/store';
import { AppState } from '../../store/app-state.model';
import { addClient } from '../../store/actions/client.actions'; // Certifique-se de usar o caminho correto
import { AddClientDialogComponent } from '../dialog/add-client-dialog/add-client-dialog.component';

@Component({
  selector: 'app-add-client',
  templateUrl: './add-client.component.html',
  styleUrls: ['./add-client.component.css'],
})

export class AddClientComponent {

  novoCliente = {
    name: '',
    cnpj: '',
    status: '',
  };

  constructor(private dialog: MatDialog, private store: Store<AppState>) {}

  adicionarCliente() {
    console.log('Adicionando cliente:', this.novoCliente);
    // Disparar a ação para adicionar o cliente
    this.store.dispatch(addClient({ client: this.novoCliente }));
    this.openSuccessDialog(this.novoCliente);

    this.novoCliente = {
      name: '',
      cnpj: '',
      status: '',
    };
  }

  openSuccessDialog(clienteAdicionado: any): void {
    const dialogRef = this.dialog.open(AddClientDialogComponent, {
      width: '300px',
      data: clienteAdicionado,
    });

    dialogRef.afterClosed().subscribe(() => {
      console.log('Diálogo fechado');
      // Lógica adicional após o fechamento do diálogo, se necessário
    });
  }

  cnpjMask = '00.000.000/0000-00';


}


// src/app/components/add-client/add-client.component.ts

// import { Component } from '@angular/core';
// import { MatDialog } from '@angular/material/dialog';
// import { AddClientDialogComponent } from '../dialog/add-client-dialog/add-client-dialog.component';
// import { ClientService } from '../../services/client.service';
// import { UtilService } from '../../services/util.service';

// @Component({
//   selector: 'app-add-client',
//   templateUrl: './add-client.component.html',
//   styleUrls: ['./add-client.component.css'],
// })

// export class AddClientComponent {

//   novoCliente = {
//     name: '',
//     cnpj: '',
//     status: '',
//   };

//   constructor(private dialog: MatDialog, private clientService: ClientService, private utilService: UtilService) {}

//   adicionarCliente() {
//     // Formatar o CNPJ removendo caracteres não numéricos
//     this.novoCliente.cnpj = this.utilService.formatarCNPJ(this.novoCliente.cnpj);

//     this.clientService.addClient(this.novoCliente).subscribe(
//       (response) => {
//         // Adição bem-sucedida, exibir o diálogo
//         this.openSuccessDialog(response);
//       },
//       (error) => {
//         // Lidar com erros de adição, se necessário
//         console.error('Erro ao adicionar cliente:', error);
//       }
//     );
//   }

//   // Método para formatar o CNPJ
//   formatarCNPJ(cnpj: string): string {
//     // Remover todos os caracteres não numéricos
//     return cnpj.replace(/\D/g, '');
//   }

//   openSuccessDialog(clienteAdicionado: any): void {
//     const dialogRef = this.dialog.open(AddClientDialogComponent, {
//       width: '300px',
//       data: clienteAdicionado,
//     });

//     dialogRef.afterClosed().subscribe(() => {
//       console.log('Diálogo fechado');
//       // Lógica adicional após o fechamento do diálogo, se necessário
//     });
//   }

//   // Método para formatar o CNPJ
//   cnpjMask = '00.000.000/0000-00';
// }
