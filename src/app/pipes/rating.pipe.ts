import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rating'
})
export class RatingPipe implements PipeTransform {

  transform(value: number){
    if(value > 5){
      let rating = '⭐' .repeat(5);
      return rating;
    }

    if(value <= 0){
      let rating = '💩'
      return rating;
    }

    let rating = '⭐' .repeat(value);
    return rating;
  }

}
