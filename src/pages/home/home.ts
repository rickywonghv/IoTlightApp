import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {AppService} from "../../app/app.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController,private service:AppService) {

  }

  public onLight(){
    this.service.onLight().subscribe();
  }

  public offLight(){
    this.service.offLight().subscribe();
  }
  public redLight(){
    this.service.redLight().subscribe();
  }

  public whiteLight(){
    this.service.whiteLight().subscribe();
  }

  public dimupLight(){
    this.service.dimupLight().subscribe();
  }

  public dimdownLight(){
    this.service.dimdownLight().subscribe();
  }

  public screenOn(){
    this.service.screenOn().subscribe();
  }

  public screenOff(){
    this.service.screenOff().subscribe();
  }
}
