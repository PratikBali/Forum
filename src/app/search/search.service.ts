import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { AngularFirestore } from '@angular/fire/firestore';
import { IVoter } from './search.model';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(
    private http: HttpClient,
    private firestore: AngularFirestore
  ) { }

  addVoterService(data: any): Observable<any> {
    const url = 'https://hydra-forum-default-rtdb.firebaseio.com';
    console.log('inside fetch');
    return this.http.post(url + '/voters/' + data.sirname + '.json', data);
  }

  fetchAllVoter(): any {
    return this.firestore.collection('voters').snapshotChanges();
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
