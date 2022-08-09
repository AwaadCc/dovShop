import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageItem } from '../shared/storage-item';
import { ServeService } from '../serve.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.page.html',
  styleUrls: ['./tab4.page.scss'],
})
export class Tab4Page implements OnInit {
  public searchInput='';
  Filter: string;
  list: StorageItem[] = [];
  searchList: string[] = [];
  items: string[];
  deflist: string[] = [];
  constructor(private storage: Storage, 
    private serve: ServeService,
    private iab:InAppBrowser) { }

  ngOnInit() {}

  ionViewDidEnter() {
    this.getData();
    this.getDefData();
  }

  notext() {
    if(this.Filter) {
      return false
    } else {
      return true
    }
  }

  ionViewDidLeave() {
    this.list = [];
    this.searchList = [];
    this.items = [];
  }

  getItems(ev) { 
    this.items = this.searchList;
    // set val to the value of the ev target
    var val = ev.target.value;
    // if the value is an empty string don't filter the items

  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

  getDefData() {
    this.serve.getSourceData('https://wayofvod.com/dovshop/home.json').subscribe(data => {
      this.deflist = data['cards'];
      // console.log(this.deflist);
    })
  }

  getData() {
    this.storage.get('source').then(res => {
      this.list = res;
      if(!this.list) {

      } else {
        for(let i = 0; i<this.list.length; i++) {
          for(let j = 0; j<this.list[i].packages.length; j++) {
            this.searchList.push(this.list[i].packages[j]);
          }
        }
      //console.log(this.searchList);
      }
    })
  }

}
