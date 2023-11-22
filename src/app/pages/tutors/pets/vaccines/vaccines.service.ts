import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, forkJoin, map } from 'rxjs';
import { Vaccine } from './Vaccine';

@Injectable({
  providedIn: 'root',
})
export class VaccinesService {
  private serviceUrl = '';

  constructor(private http: HttpClient) {}

  getVaccines(): Vaccine[] {
    let mockData: Vaccine[] = [
      {
        id: 1,
        type: 'Tipo 1',
        date: new Date(),
        isEdit: false,
      },
      {
        id: 2,
        type: 'Tipo 2',
        date: new Date(),
        isEdit: false,
      },
      {
        id: 3,
        type: 'Tipo 3',
        date: new Date(),
        isEdit: false,
      },
    ];
    return mockData;
    // return this.http
    //   .get(this.serviceUrl)
    //   .pipe<Vaccine[]>(map((data: any) => data.vaccines));
  }

  updateVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.patch<Vaccine>(
      `${this.serviceUrl}/${vaccine.id}`,
      vaccine
    );
  }

  addVaccine(vaccine: Vaccine): Observable<Vaccine> {
    return this.http.post<Vaccine>(`${this.serviceUrl}/add`, vaccine);
  }

  deleteVaccine(id: number): Observable<Vaccine> {
    return this.http.delete<Vaccine>(`${this.serviceUrl}/${id}`);
  }

  deleteVaccines(vaccines: Vaccine[]): Observable<Vaccine[]> {
    return forkJoin(
      vaccines.map((vaccine) =>
        this.http.delete<Vaccine>(`${this.serviceUrl}/${vaccine.id}`)
      )
    );
  }
}
