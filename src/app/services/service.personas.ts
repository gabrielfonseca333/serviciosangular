import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Global } from "../global";
import { environment } from "../../environments/environment";

@Injectable()
export class ServicePersonas{


  constructor(private _http: HttpClient){

  }

  getPersonasPromesa():Promise<any>{
    
    let request = "api/personas"
    let url = environment.urlApiPersonas + request
    let promise = new Promise((resolve)=>{
      this._http.get(url).subscribe((response)=>{
        console.log("leyendo!!")
        resolve(response)
      })
    })

    return promise
  }

}