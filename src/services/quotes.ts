import { Quote } from "../data/quote.interface";

export class QuotesService{

    quote : Quote[] = [];

    addQuoteToFavourites(quoteToBeSaved : Quote){
        var isAvailable:boolean = false;
        for(let i=0;i<this.quote.length;i++){
            if(this.quote[i].id == quoteToBeSaved.id){
                isAvailable = true;
            }
        }
        if(!isAvailable){
            this.quote.push(quoteToBeSaved);
        }
        console.log(this.quote);
        
    }

    removeQuoteFromFavourites(quoteToBeRemoved : Quote){
        let index;
        for(let i=0;i<this.quote.length;i++){
            if(quoteToBeRemoved.id == this.quote[i].id){
                index = i;
                break;
            }
        }

        this.quote.splice(index, 1);

    }

    getFavouritesQuotes(){
        return this.quote;
    }
}