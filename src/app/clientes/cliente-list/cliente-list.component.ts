import { Component, OnInit } from '@angular/core';
import { Cliente } from '../cliente';
//import { ClientesService } from '../clientes.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {

  //constructor (private clienteService: ClientesService) { }

  constructor(){};

  clientes: Cliente[] = [];

  /*ngOnInit() {
    this.clienteService.getAll()
        .subscribe(data => this.clientes = data, 
                   err =>  alert('Aconteceu um erro!'+err));
  }
  */
  

  ngOnInit() {
    this.clientes = [{
      'codigo' : 1,
      'nome': 'Carlos',
      'cargo': 'Professor',
      'endereco': 'Rua teste, 65, Jardim das Palmeiras',
      'cidade': 'Uberlandia',
      'cep': '38400-000',
      'pais': 'Brasil',
      'telefone': '34944423402',
      'fax': '34944423402'
    },
    {
      'codigo' : 2,
      'nome': 'Andre',
      'cargo': 'Diretor',
      'endereco': 'Rua testando, 66, Road to Hell',
      'cidade': 'Paracatu',
      'cep': '38600-000',
      'pais': 'Brasil',
      'telefone': '342345678',
      'fax': '342345678'
    }];

  }

}
