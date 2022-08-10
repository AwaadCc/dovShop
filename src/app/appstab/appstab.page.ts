import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { StorageItem } from '../shared/storage-item';
import { ServeService } from '../serve.service';
import { Storage } from '@ionic/storage';
import SwiperCore, { SwiperOptions, Virtual }  from 'swiper';
import { EventsParams } from 'swiper/angular';
import { IonicSlides, IonContent } from '@ionic/angular';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';

SwiperCore.use([IonicSlides, Virtual])

@Component({
  selector: 'app-appstab',
  templateUrl: './appstab.page.html',
  styleUrls: ['./appstab.page.scss'],
  encapsulation: ViewEncapsulation.None

})
export class AppstabPage implements OnInit {
  list: StorageItem[] = [];
  applist: string[] = [];
  fixedlist: string[] = [];
  constructor(private storage:Storage,
    private serve:ServeService,
    private iab:InAppBrowser) { }

  ngOnInit() {

  }

  async ionViewDidEnter() {
    this.getData();
    this.getFixedData();
  }

  ionViewDidLeave() {
    this.list = [];
    this.applist = [];
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

  getFixedData() {
    this.serve.getSourceData('https://wayofvod.com/dovshop/home.json').subscribe(data => {
      this.fixedlist = data['cards'];
      //console.log(this.fixedlist);
    })
  }

  getData() {
    this.storage.get('source').then(res => {
      this.list = res;
      if(!this.list) {
        
      } else {
        for(let i = 0; i<this.list.length; i++) {
          for(let j = 0; j<this.list[i].packages.length; j++) {
            this.applist.push(this.list[i].packages[j]);
          }
        }
        //console.log(this.list);
      }
    })
  }

}
