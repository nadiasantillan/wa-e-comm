import { Component, OnInit } from '@angular/core';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import { ConfigService } from '../config.service';
import { WaService } from '../wa.service';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.less', '../common.less']
})
export class BannerComponent implements OnInit {
  faWhatsapp = faWhatsapp;
  whatsappLink: string = '';
  phoneNumber: string = '';

  constructor(private waService: WaService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.waService.link().subscribe(value => { this.whatsappLink = value});
    this.configService.phoneNumberHumanFriendly().subscribe(value => {this.phoneNumber = value});
  }

}
