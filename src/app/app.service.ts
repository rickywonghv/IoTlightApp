/**
 * Created by damon on 4/27/17.
 */
import { Injectable }     from '@angular/core';
import {Http} from '@angular/http';
import 'rxjs/add/operator/map';

@Injectable()
export class AppService {
  private baseUrl=""; //light=ON
  private on="ON";
  private off="OFF";
  private redlight="red";
  private whitelight="white";
  private dimupup="dimup";
  private dimdowndown="dimdown";



  constructor (private http: Http) {

  }

  public save(url){
    if(url.includes("http://")){
      this.baseUrl=url;
      localStorage.setItem("url",url);
    }else{
      this.baseUrl="http://"+url;
      localStorage.setItem("url","http://"+url);
    }
  }

  public getUrl(){
    let url=localStorage.getItem("url");
    this.baseUrl=url;
    return url;
  }

  public onLight (){
    return this.http.get(this.baseUrl+"/?light="+this.on);
  }

  public offLight (){
    return this.http.get(this.baseUrl+"/?light="+this.off);
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
