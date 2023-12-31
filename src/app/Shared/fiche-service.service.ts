import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FicheServiceService {

  constructor(private http: HttpClient, private router: Router) { }

  public addFiches(body: any) {
    return this.http.post("http://localhost:8000/api/v1/fiche" + '/', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  public updateFiches(body: any,id:any) {

    return this.http.patch("http://localhost:8000/api/v1/fiche" + '/' + id, body, {
      observe: 'body',
    });
  }


  public getFiches(id: any) {
    return this.http.get("http://localhost:8000/api/v1/fiche/user/" + id);
  }
  public getFichesbyid(id: any) {
    return this.http.get("http://localhost:8000/api/v1/fiche/" + id);
  }
  public getQuestionsByCategory(id: any) {
    return this.http.get("http://localhost:8000/api/v1/fiche/category/" + id);
  }
  public deleteForm(data: any) {

    return this.http.delete("http://localhost:8000/api/v1/fiche" + `/${data}`);
  }
}
