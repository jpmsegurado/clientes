import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ClienteAddPage } from '../pages/cliente-add/cliente-add';
import { Cliente } from '../providers/cliente';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ClienteAddPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ClienteAddPage
  ],
  providers: [
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Cliente
  ]
})
export class AppModule {}
