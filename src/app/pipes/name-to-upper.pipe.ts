import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'nameToUpper'
})
export class NameToUpperPipe implements PipeTransform {

  transform(name: string): string | null {
    if (name) {
      return name.toUpperCase();
    }
    return "";
  }

}
