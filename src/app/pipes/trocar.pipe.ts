import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trocar'
})
export class TrocarPipe implements PipeTransform {

  transform(value: string | undefined, char:string, valorTrocar: string){
    return value?.replace(char, valorTrocar);
  }

}
