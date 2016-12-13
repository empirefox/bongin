import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable } from 'rxjs/Observable';

import { environment } from '../../../environments/environment';
import { ISite, IProfile } from './profile';

@Injectable()
export class ProfileService {

  private _profile: Observable<IProfile>;

  constructor(private http: Http) { }

  get profile(): Observable<IProfile> {
    if (!this._profile) {
      this._profile = this.http.get(environment.backendUrl).map(res => res.json()).flatMap((site: ISite) => {
        return this.http.get(`${site.MainCdn}profile.json`).map(res => Object.assign(res.json(), site));
      }).publishReplay(1).refCount();
    }
    return this._profile;
  }

}
