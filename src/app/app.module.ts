import { CozinhaDetalhePageModule } from './../pages/cozinha-detalhe/cozinha-detalhe.module';
import { CozinhaPageModule } from './../pages/cozinha/cozinha.module';
import { ComandaPageModule } from './../pages/comanda/comanda.module';
//
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HttpClientModule } from '@angular/common/http';
//import { HomePage } from '../pages/home/home';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { CadastPageModule } from '../pages/cadast/cadast.module';
import { PerfilPageModule } from '../pages/perfil/perfil.module';
import { CardapioPageModule } from '../pages/cardapio/cardapio.module';
import { Cardapio2PageModule } from '../pages/cardapio2/cardapio2.module';
import { LoginPageModule } from '../pages/login/login.module';
import { EditarPageModule } from '../pages/editar/editar.module';
import { HttpModule } from "@angular/http";
import { RestProvider } from '../providers/rest/rest';
import { MesaPageModule } from '../pages/mesa/mesa.module';
import { CarrinhoPageModule } from '../pages/carrinho/carrinho.module';
import { CardapioListPageModule } from '../pages/cardapio-list/cardapio-list.module';

import { Geolocation } from '@ionic-native/geolocation';



@NgModule({
  declarations: [
    MyApp,
  ],

  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    CadastPageModule,
		PerfilPageModule,
		LoginPageModule,
		CardapioPageModule,
		Cardapio2PageModule,
    HttpClientModule,
		EditarPageModule,
		MesaPageModule,
    HttpModule,
    CarrinhoPageModule,
    CardapioListPageModule,
    ComandaPageModule,
    CozinhaPageModule,
    CozinhaDetalhePageModule
  ],

  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    //HomePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    Geolocation,
    RestProvider
  ]
})
export class AppModule {}
