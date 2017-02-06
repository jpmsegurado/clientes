import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import _ from 'lodash';

@Injectable()
export class Cliente {

  private clientes: any = [];

  constructor(
    public http: Http
  ) {

  }


  add(cliente){
    return Promise.resolve(this.clientes.push(cliente));
  }

  delete(cliente) {
    const index = _.findIndex(this.clientes, cliente);
    index > -1 && this.clientes.splice(index, 1);
    return Promise.resolve(this.clientes);
  }

  update(cliente, old) {
    const index = _.findIndex(this.clientes, old);
    if(index > -1) this.clientes[index] = cliente;
    return Promise.resolve(this.clientes);
  }

  getAll() {
    return Promise.resolve(this.clientes);
  }

}
