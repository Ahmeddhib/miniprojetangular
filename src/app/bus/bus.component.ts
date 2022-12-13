import { Component, OnInit } from '@angular/core';
import {Bus} from '../model/bus.model';
import { AuthService } from '../services/auth.service';
import { BusService } from '../services/bus.service';
@Component({
  selector: 'app-bus',
  templateUrl: './bus.component.html',
  styleUrls: ['./bus.component.css']
})
export class BusComponent implements OnInit {
  buss! : Bus[]; //un tableau de Bus

  constructor(private busService: BusService,
             public authService: AuthService) {
              this.buss = busService.listeBus()

             }
     supprimerBus(b: Bus){
      //console.log(bus);
      let conf = confirm("Etes-vous sûr ?");
      if (conf)
      this.busService.supprimerBus(b);
      }

  ngOnInit(): void {
  }


}
