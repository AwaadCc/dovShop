import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageItem } from './shared/storage-item';
import { OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ServeService {
  addList: StorageItem[];
  sourceList: StorageItem[];
  arr: StorageItem[] = [];
  constructor(private storage: Storage,
    private http:HttpClient) { this.init(); }

  async init() {
    this.storage.create();
  }

  addedItems(data) {
    return this.addedItems=data;
  }

  getsourcelist() {
    return this.sourceList
  }

  getSourceData(str) {
    return this.http.get(str);
  }

}
