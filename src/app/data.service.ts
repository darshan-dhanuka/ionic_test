import { Injectable } from '@angular/core';
import { Component, Inject } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import {LOCAL_STORAGE, WebStorageService} from 'angular-webstorage-service';
@Injectable()
export class DataService1 {

  private messageSource = new BehaviorSubject('Hello');
  currentMessage = this.messageSource.asObservable();
  public data:any=[];
  constructor(@Inject(LOCAL_STORAGE) private storage: WebStorageService) { }
 
  changeMessage(message: string) {
    this.messageSource.next(message);
    this.saveInLocal('message',message);
  }
  saveInLocal(key, val): void {
    //console.log('inside saveinlocal===== key:' + key + 'value:' + val);
    this.storage.set(key, val);
    this.data[key]= this.storage.get(key);
   }
}
