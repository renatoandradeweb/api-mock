// src/app/services/util.service.ts

import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UtilService {
  formatarCNPJ(cnpj: string): string {
    // Remover todos os caracteres não numéricos
    const cnpjL = cnpj.replace(/\D/g, '');
    console.log(cnpjL);
    // Remover todos os caracteres não numéricos
    return cnpjL;
  }

  formatarCNPJFormatado(cnpj: string): string {
    // Adicionar a máscara de CNPJ (00.000.000/0000-00)
    return `${cnpj.slice(0, 2)}.${cnpj.slice(2, 5)}.${cnpj.slice(5, 8)}/${cnpj.slice(8, 12)}-${cnpj.slice(12)}`;
  }
}
