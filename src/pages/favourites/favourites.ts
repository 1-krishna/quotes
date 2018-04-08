import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { QuotesService } from '../../services/quotes';
import { Quote } from '../../data/quote.interface';

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
  constructor(public navCtrl: NavController, public navParams: NavParams, private quoteService: QuotesService){
    this.quote = quoteService.getFavouritesQuotes();
  }

  ngOnInit(){

  }

  removeConfirm(quoteToBeDeleted: Quote){
    this.quoteService.removeQuoteFromFavourites(quoteToBeDeleted);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FavouritesPage');
  }

}
