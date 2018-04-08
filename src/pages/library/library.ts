import { Component, OnInit } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Quote } from '../../data/quote.interface';
import quotes from '../../data/quotes';
import { QuotesPage } from '../quotes/quotes';
@IonicPage()
@Component({
  selector: 'page-library',
  templateUrl: 'library.html',
})
export class LibraryPage implements OnInit {

  quotesCollection : {category:String, quotes:Quote[], icon:String}[];

  constructor(private navCtrl : NavController){}

  ngOnInit() {
    this.quotesCollection = quotes;
    console.log(this.quotesCollection); 
  }

  loadThisCategory(categoryName:String){
    let quotesToBeShown:Quote[];
    for(let i=0;i<this.quotesCollection.length;i++){
      if(categoryName==this.quotesCollection[i].category){
        quotesToBeShown = this.quotesCollection[i].quotes;
        break;
      }
    }
    this.navCtrl.push(QuotesPage, quotesToBeShown);
  }

}
