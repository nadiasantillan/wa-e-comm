import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

import { Config } from './config';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  productsApiUrl(): string {
    return environment.apiBaseUrl + '/products';
  }

  constructor(private http: HttpClient) { }

  config(): Observable<Config> {
    return this.http.get<Config>(environment.apiBaseUrl + '/config');
  }

  phoneNumber(): Observable<string> {
    return this.config().pipe(map((config: Config) => config.phoneNumber));
  }

  phoneNumberHumanFriendly(): Observable<string> {
    return this.config().pipe(map((config: Config) => config.phoneNumberHumanFriendly));
  }

  whatsappBrowserBaseUrl(): Observable<string> {
    return this.config().pipe(map((config: Config) => `https://web.whatsapp.com/send?phone=${config.phoneNumber}`));
  }

  whatsappMobileBaseUrl(): Observable<string> {
    return this.config().pipe(map((config: Config) => `https://api.whatsapp.com/send?phone=${config.phoneNumber}`));
  }
}
