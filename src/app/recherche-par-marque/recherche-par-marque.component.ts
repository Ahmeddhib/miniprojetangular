import { BusService } from './../services/bus.service';
import { AuthService } from './../services/auth.service';
import { Bus } from './../model/bus.model';
import { Component, OnInit } from '@angular/core';
import { Marque } from '../model/marque.model';

@Component({
  selector: 'app-recherche-par-marque',
  templateUrl: './recherche-par-marque.component.html',
  styles: [
  ]
})
export class RechercheParMarqueComponent implements OnInit {
  buss : Bus[] =[];
  marques! : Marque[];
  IdMarque! : number;
supprimerBus(_t12: any) {
throw new Error('Method not implemented.');
}
authService: any;

  constructor(public AuthService:AuthService,
    private busService:BusService) { }

  ngOnInit(): void {
    //this.buss=this.busService.listeBus();
    this.marques=this.busService.listeMarques();
  }
  onChange() {
    this.buss=this.busService.rechercherParMarque(this.IdMarque);
    }

}
