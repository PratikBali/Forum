import { Component, OnInit } from '@angular/core';
import { SearchService } from './search.service';
import { AngularFireDatabase, AngularFireObject } from '@angular/fire/database';
import { Observable } from 'rxjs';
import { IVoter } from './search.model';
import { InvokeMethodExpr, IvyParser } from '@angular/compiler';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {
  votersList?: IVoter[];
  voterRef: AngularFireObject<any>;

  constructor(
    private searchService: SearchService,
    private db: AngularFireDatabase
  ) {
    this.voterRef = db.object('voters');
    // this.votersList = this.voterRef.valueChanges();
  }

  ngOnInit(): void {
    // this.putVoter();
    // this.getAllVoter();
  }
  putVoter(): void {
    const voter: IVoter = {
      id: '265',
      sirname: 'बळी',
      name: 'उषा',
      middleName: 'संजय',
      ward: '3',
      area: 'गावठाण',
      location: 'zargadwadi',
      phone: '9922508855',
      whatsapp: '9922508855',
      fbId: ''
    };
    // const voter = {
    //   id: '266',
    //   sirname: 'बळी',
    //   name: 'वैष्णव',
    //   middleName: 'संजय',
    //   ward: '3',
    //   area: 'गावठाण',
    //   location: 'zargadwadi',
    //   phone: '9665090197',
    //   whatsapp: '9665090197',
    //   fbId: 'fb.me/vaishnav.bali.9'
    // };
    // this.voterRef.set(voter);
    // this.updateLocalStore();
    // const data = this.create(voter);
    this.searchService.addVoterService(voter).subscribe();
    // console.log(data);
  }

  getAllVoter(): any {
    this.searchService.fetchAllVoter();
  }

  create(voter): any {
    const data = this.searchService.createVoter(voter);
  }

  update(): any {
    const voter = {
      id: '266',
      sirname: 'बळी',
      name: 'वैष्णव',
      middleName: 'संजय',
      ward: '3',
      area: 'गावठाण',
      location: 'zargadwadi',
      phone: '9665090197',
      whatsapp: '9665090197',
      fbId: 'fb.me/vaishnav.bali.9'
    };
    this.searchService.updateVoter(voter);
  }

  delete(id: string): any {
    this.searchService.deleteVoter(id);
  }
  updateLocalStore(): void {
    this.voterRef.snapshotChanges().subscribe(action => {
      console.log(action.type);
      console.log(action.key);
      console.log(action.payload.val());
    });
  }

}
