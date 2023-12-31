import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategorieService {
  constructor(private http: HttpClient, private router: Router) { }

  public addCateg(body: any) {
    return this.http.post("http://localhost:8000/api/v1/category" + '/', body, {
      observe: 'body',
      headers: new HttpHeaders().append('Content-Type', 'application/json')
    });
  }
  public updateCateg(body: any) {
    
    return this.http.patch("http://localhost:8000/api/v1/category" + '/' + body.id, body,{
      observe: 'body',
    });
  }
  public getCategs() {
    return this.http.get("http://localhost:8000/api/v1/category" + "/");
  }
  public getCategspage(page: number) {
    let params = new HttpParams().set('page', page.toString());

    return this.http.get("http://localhost:8000" + '/list', { params: params });
  }
  public getCateg(id: any) {
    return this.http.get("http://localhost:8000/api/v1/category" + "/" + id);
  }
  public deleteForm(data: any) {

    return this.http.delete("http://localhost:8000/api/v1/category" + `/${data}`);
  }
}