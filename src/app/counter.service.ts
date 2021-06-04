import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CounterService {

  timesMovedToActive = 0;
  timesMovedToInactive = 0;

}
