import { Component } from '@angular/core';

import { NavController } from 'ionic-angular';
import { ClienteAddPage } from '../cliente-add/cliente-add';
import { Cliente } from '../../providers/cliente';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  public clientes: any = [];

  constructor(
    public navCtrl: NavController,
    public clienteService: Cliente
  ) {
    
  }

  add() {
    this.navCtrl.push(ClienteAddPage);
  }

  edit(cliente) {
    this.navCtrl.push(ClienteAddPage, { cliente });
  }

  ionViewDidEnter() {
    this.clienteService.getAll().then(clientes => this.clientes = clientes);
  }

}
