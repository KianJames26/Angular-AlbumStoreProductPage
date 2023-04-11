import { Injectable } from "@angular/core";
import { Http, Response } from "@angular/http";

import "rxjs/add/operator/map";
import { Observable } from "rxjs/Observable";

import { Album } from "./album";

@Injectable()
export class ProductService {
  // ** Variables
  private _albumUrl: string = "../assets/album.json";

  // ** Functions

  getAlbum(id: number): Observable<Album> {
    return this._http.get(this._albumUrl).map((response) => response.json());
  }

  constructor(private _http: Http) {}
}
