import { Component } from "@angular/core";
import {
  IonicPage,
  NavController,
  NavParams,
  AlertController
} from "ionic-angular";
import { Quote } from "../../data/quote.interface";
import { QuotesService } from "../../services/quotes";

/**
 * Generated class for the QuotesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: "page-quotes",
  templateUrl: "quotes.html"
})
export class QuotesPage {
  quotesToBeShown: Quote[];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public alertCtrl: AlertController,
    public quotesService: QuotesService
  ) {
    this.quotesToBeShown = navParams.data;
    console.log(this.quotesToBeShown);
  }

  ionViewDidLoad() {
    console.log("ionViewDidLoad QuotesPage");
  }

  moveToFavourites(quoteToBeFavourated: any) {
    //console.log('request for fav of ' + quoteToBeFavourated.text + quoteToBeFavourated.person);
    this.quotesService.addQuoteToFavourites(quoteToBeFavourated);
  }

  showConfirm(quoteToBeFavourated: any) {
    let confirm = this.alertCtrl.create({
      title: "Are You Sure?",
      message: "Do you agree to add this to your favourites?",
      buttons: [
        {
          text: "Disagree",
          handler: () => {
            console.log("Disagree clicked");
          }
        },
        {
          text: "Agree",
          handler: () => {
            console.log("Agree clicked");
            if (!this.isAlreadyFav(quoteToBeFavourated)) {
              this.moveToFavourites(quoteToBeFavourated);
            }else{
              this.quotesService.removeQuoteFromFavourites(quoteToBeFavourated);
            }
          }
        }
      ]
    });
    confirm.present();
  }

  isAlreadyFav(quoteToBeChecked: Quote) {
    return this.quotesService.isMadeFavourite(quoteToBeChecked);
  }
}
