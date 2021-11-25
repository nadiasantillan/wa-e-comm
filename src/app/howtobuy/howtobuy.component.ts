import { Component, OnInit } from '@angular/core';
import { ConfigService } from '../config.service';
import { WaService } from '../wa.service';

@Component({
  selector: 'app-howtobuy',
  templateUrl: './howtobuy.component.html',
  styleUrls: ['./howtobuy.component.less', '../common.less']
})
export class HowtobuyComponent implements OnInit {
  waLink: string = '';
  phoneNumberHumanReadable: string = '';
  magazineLink: string = '';

  constructor(private configService: ConfigService, private waService: WaService) { }

  ngOnInit(): void {
    this.waService.link().subscribe(value => {this.waLink = value});
    this.configService.phoneNumberHumanFriendly().subscribe(value => {this.phoneNumberHumanReadable = value});
    this.configService.config().subscribe(config => {this.magazineLink = config.magazineLink});
  }

}
