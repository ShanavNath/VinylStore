import { Injectable } from '@angular/core';
import { Company } from './models/company';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class CompanyService {
  private url = 'http://localhost:5000/api/companies/';
  constructor(public httpClient: HttpClient) {}

  getAllCompanyDetails():Observable<Company[]> {
    return this.httpClient.get<Company[]>(this.url);
  }
  getById(id):Observable<Company> {
    return this.httpClient.get<Company>(`${this.url}${id}`);
  }
  storeCompanyDetailsInDb(prodRef): Observable<any> {
    return this.httpClient.post(this.url,prodRef, httpOptions);
  }

  deleteCompanyById(id):Observable<any>{
    return this.httpClient.delete(this.url+id);
  }

  updateCompanyDetailsFromDb(prodRef: Company, id:any):Observable<any> {
    return this.httpClient.put(`${this.url}${id}`,prodRef, httpOptions);
  }
}
