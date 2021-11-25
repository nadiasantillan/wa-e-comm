import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ConfigService } from './config.service';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class WaService {

  constructor(private configService: ConfigService) { }

  link(text: string = ''): Observable<string> {
    let userAgent = window.navigator.userAgent.toLowerCase(),
      link = this.configService.whatsappBrowserBaseUrl();
    if (userAgent.includes('mobile')) {
      link = this.configService.whatsappMobileBaseUrl();
    }
    if (text) {
        link = link.pipe(map((value: string) => value + '&text=' + text))
    }
    return link
  }
}
