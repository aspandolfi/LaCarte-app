import { CarrinhoPage } from "./../carrinho/carrinho";
import { ItemPedido } from "./../../class/ItemPedido";
import { Produto } from "./../../class/produtos";
import { Component, ViewChild } from "@angular/core";
import { IonicPage, NavController, NavParams, Events } from "ionic-angular";
import { Storage } from "@ionic/storage";
import { AlertController } from "ionic-angular";
import { Comanda } from "../../class/ItemComanda";


@IonicPage()
@Component({
  selector: "page-detalhe-pedido",
  templateUrl: "detalhe-pedido.html"
})
export class DetalhePedidoPage {
  public produto = new Produto();
  public itemPedido = new ItemPedido();
  public txtAdicio = "";
  public operacao: number;

  public carrinho: Array<ItemPedido> = [];
  public comanda: Comanda;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public storage: Storage,
    public alertCtrl: AlertController,
    public events: Events
  ) {
    this.itemPedido = navParams.data.itemPedido;
    this.operacao = navParams.data.op;
    
    if(this.itemPedido.produto.adicional.length > 0){
      this.txtAdicio = "Adicionais";
    }
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad DetalhePedidoPage");
  }

  showConfirm() {
    let confirm = this.alertCtrl.create({
      title: "Cancelamento",
      message: "Deseja cancelar o pedido?",
      buttons: [
        {
          text: "Não",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Sim",
          handler: () => {
            if (this.operacao === 1) {
              this.events.publish('apagarItemCarrinho', this.itemPedido);
            }
            if (this.operacao === 2) {
              this.events.publish('apagarItemComanda', this.itemPedido);
            }
            this.navCtrl.pop();
          }
        }
      ]
    });
    confirm.present();
  }
}