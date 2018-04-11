import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController, ViewController } from 'ionic-angular';

import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

/**
 * Generated class for the QuotePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quote',
  templateUrl: 'quote.html',
})
export class QuotePage {

  quote: Quote

  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController,
  private quoteService: QuotesService, private viewCtrl: ViewController) {
    this.quote = navParams.data;
  }

  unfav(quoteToBeRemoved: Quote){
    this.quoteService.removeQuoteFromFavourites(quoteToBeRemoved);
    this.closeModal();
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad QuotePage');
  }
  closeModal(){
    this.viewCtrl.dismiss();
    //this.navCtrl.pop();
  }

}
