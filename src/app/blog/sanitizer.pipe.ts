import { Pipe, PipeTransform } from '@angular/core';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'sanitizer'
})
export class SanitizerPipe implements PipeTransform {

  constructor(private domSanitazer: DomSanitizer) {}

  transform(value:string):SafeHtml {
    return this.domSanitazer.bypassSecurityTrustHtml(value);
  }

}
