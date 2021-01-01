import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { IVoter } from './search.model';
import SERVER_API from '../common/forum.const';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  votersList = [];

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  addVoterService(voter: IVoter): Observable<any> {
    return this.http.post(SERVER_API.SERVER_URL + '/voters.json', voter);
  }

  fetchAllVoter(): any {
    return this.http
      .get<IVoter[]>(SERVER_API.SERVER_URL + '/voters.json')
      .pipe(map(voters => {
        console.log(voters);
        return Object.values(voters);
      }))
      .subscribe(voters => {
        console.log(voters);

      })
      ;
  }

  createVoter(voter: IVoter): any {
    return this.firestore.collection('voters').add(voter);
  }

  updateVoter(voter: IVoter): any {
    // delete voter.id;
    this.firestore.doc('voters/' + voter.id).update(voter);
  }

  deleteVoter(voterId: string): any {
    this.firestore.doc('voters/' + voterId).delete();
  }
}
