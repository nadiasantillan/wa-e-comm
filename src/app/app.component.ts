import { Component } from '@angular/core';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { ConfigService } from './config.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.less', './common.less']
})
export class AppComponent {
  title = 'natura-ui';
  faShoppingCart = faShoppingCart;
  magazineLink: string = '';

  constructor(private configService: ConfigService) {

  }

  ngOnInit(): void {
    this.configService.config().subscribe(config => {this.magazineLink = config.magazineLink})
  }

  screenSize(): string {
    return `${window.innerWidth} x ${window.innerHeight}`;
  }
}
