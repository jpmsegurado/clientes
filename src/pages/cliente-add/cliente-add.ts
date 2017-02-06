import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Cliente } from '../../providers/cliente';

@Component({
  selector: 'page-cliente-add',
  templateUrl: 'cliente-add.html'
})
export class ClienteAddPage {

  public form: any;
  public loading: any = false;
  public editable: any = false;
  public cliente: any;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public clienteService: Cliente
  ) {

    this.form = new FormGroup({
      nome: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      cnpj: new FormControl('', Validators.required)
    });

    if(navParams.get('cliente')) {
      this.editable = true;
      this.cliente = navParams.get('cliente');
      this.form.controls.nome.setValue(navParams.get('cliente').nome);
      this.form.controls.email.setValue(navParams.get('cliente').email);
      this.form.controls.cnpj.setValue(navParams.get('cliente').cnpj);
    }

  }

  delete(cliente) {
    this.clienteService.delete(cliente).then(clientes => this.navCtrl.pop());
  }

  add(cliente, old) {
    this.loading = true;
    if(!this.navParams.get('cliente')) {
      this.clienteService.add(cliente).then(() => {
        this.loading = false;
        this.navCtrl.pop();
      });
    } else {
      this.clienteService.update(cliente, old).then(() => {
        this.loading = false;
        this.navCtrl.pop();
      });
    }
  }

}
