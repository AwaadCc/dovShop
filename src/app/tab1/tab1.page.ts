import { Component, ViewChild, OnInit } from '@angular/core';
import { IonModal } from '@ionic/angular';
import { OverlayEventDetail } from '@ionic/core/components';
import { Storage } from '@ionic/storage';
import { HttpClient } from '@angular/common/http';
import { StorageItem } from '../shared/storage-item';
import { ServeService } from '../serve.service';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';
import SwiperCore, { Virtual } from 'swiper';
import { IonicSlides, IonContent } from '@ionic/angular';

SwiperCore.use([IonicSlides, Virtual])

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page {
  @ViewChild(IonModal) modal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  isModalOpen = false;
  isModalOpen2 = false;
  isModalOpen3 = false;
  cardlist: StorageItem[] = [];
  toollist: StorageItem[] = [];
  toplist: StorageItem[] = [];
  applist: StorageItem[] = [];
  constructor(private http:HttpClient,
              private serve:ServeService,
              private storage:Storage,
              private iab:InAppBrowser) {}

  async ngOnInit() {
  }

  async ionViewDidEnter() {
    this.getData();
  }

  async ionViewDidLeave() {
    this.cardlist = [];
    this.toollist = [];
    this.toplist = [];
    this.applist = [];
  }

  getData() {
    this.getHomeList().subscribe(data => {
      this.toollist = data['tools'];
    });
    this.getHomeList().subscribe(data => {
      this.cardlist = data['cards'];
    })
    this.getHomeList().subscribe(data => {
      this.toplist = data['topapps'];
    })
    this.storage.get('source').then(res => {
      const list = res;
      if(!list) {
        console.log("empty");
      } else {
        for(let i = 0; i<list.length; i++) {
          for(let j = 0; j<list[i].packages.length; j++) {
            this.applist.push(list[i].packages[j]);
          }
        }
      }
    });
  }

  cancel() {
    this.modal.dismiss(null, 'cancel');
  }

  confirm() {
    this.modal.dismiss(this.name, 'confirm');
  }
  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }
  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }
  setOpen3(isOpen: boolean) {
    this.isModalOpen3 = isOpen;
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello, ${ev.detail.data}!`;
    }
  }

  getHomeList() {
    return this.http.get('https://awaadcc.github.io/dovshop/home.json');
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

  slides = Array.from({ length: 1000 }).map(
    (el, index) => `Slide ${index + 1}`
  );

}
