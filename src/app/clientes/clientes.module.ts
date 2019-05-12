import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { clientesRouting } from './clientes.routing';
import { FormsModule } from '@angular/forms';
import { ClienteListComponent } from './cliente-list/cliente-list.component';
import { provideRoutes } from '@angular/router';
//import { ClientesService } from './clientes.service';

@NgModule({
  imports: [
    CommonModule, clientesRouting, FormsModule
  ],
  declarations: [ClienteListComponent],
  //providers: [ClientesService]
})
export class ClientesModule { }
