import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { WaService } from '../wa.service';

@Component({
  selector: 'app-who',
  templateUrl: './who.component.html',
  styleUrls: ['./who.component.less', '../common.less']
})
export class WhoComponent implements OnInit {
  whatsAppLink: string = '';
  phoneNumber: string = '';

  constructor(private waService: WaService, private configService: ConfigService) { }

  ngOnInit(): void {
    this.waService.link().subscribe(value => {this.whatsAppLink = value});
    this.configService.phoneNumberHumanFriendly().subscribe(value => {this.phoneNumber = value});
  }

}
