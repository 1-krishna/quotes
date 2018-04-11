import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';
import { QuotePage } from '../quote/quote';

/**
 * Generated class for the FavouritesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-favourites',
  templateUrl: 'favourites.html',
})
export class FavouritesPage implements OnInit{
  quote : Quote[] = [];
  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuotesService,
  private modalCtrl: ModalController){
    this.quote = quoteService.getFavouritesQuotes();
  }

  ngOnInit(){

  }

  openModal(quoteToBeShown: Quote){
    this.modalCtrl.create(QuotePage, quoteToBeShown).present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

}
