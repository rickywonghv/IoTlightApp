/**
 * Created by damon on 4/27/17.
 */
import { Injectable }     from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private baseUrl="http://192.168.11.104";
  private on="ON1";
  private off="OFF1";
  private redlight="red";
  private whitelight="white";
  private dimupup="dimup";
  private dimdowndown="dimdown";



  constructor (private http: Http) {

  }

  public onLight (){
    return this.http.get(this.baseUrl+"/?pin="+this.on);
  }

  public offLight (){
    return this.http.get(this.baseUrl+"/?pin="+this.off);
  }

  public redLight (){
    return this.http.get(this.baseUrl+"/?pin="+this.redlight);
  }

  public whiteLight (){
    return this.http.get(this.baseUrl+"/?pin="+this.whitelight);
  }

  public dimupLight (){
    return this.http.get(this.baseUrl+"/?pin="+this.dimupup);
  }

  public dimdownLight (){
    return this.http.get(this.baseUrl+"/?pin="+this.dimdowndown);
  }

  public screenOn (){
    return this.http.get(this.baseUrl+"/?screen=on");
  }

  public screenOff (){
    return this.http.get(this.baseUrl+"/?screen=off");
  }

}
