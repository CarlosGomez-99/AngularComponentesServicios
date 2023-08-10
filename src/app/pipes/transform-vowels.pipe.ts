import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'transformVowels'
})
export class TransformVowelsPipe implements PipeTransform {

  transform(value: string): string {
    return value
      .split('a').join('0')
      .split('e').join('2')
      .split('i').join('3')
      .split('o').join('4')
      .split('u').join('5')
  }
}
