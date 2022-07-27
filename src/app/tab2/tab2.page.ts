import { Component, ElementRef, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { IonModal, LoadingController } from '@ionic/angular';
import { v4 as uuidv4 } from 'uuid';
import { StorageItem } from '../shared/storage-item';
import { ServeService } from '../serve.service';
import { AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { OverlayEventDetail } from '@ionic/core/components';
import { InAppBrowser } from '@awesome-cordova-plugins/in-app-browser/ngx';


@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {
  @ViewChild(IonModal) modal: IonModal;
  message = 'This modal example uses triggers to automatically open a modal when the button is clicked.';
  name: string;
  isModalOpen = false;
  isModalOpen2 = false;
  arr: StorageItem[] = [];
  state: any;
  alertData: string;
  sourceList: StorageItem[];
  addList: StorageItem[];
  emptyItem: StorageItem;
  urlList: string[] = [];
  list: any;
  deflist: string[] = [];
  constructor(private storage: Storage,
    private alertController: AlertController,
    private http:HttpClient, 
    private serve: ServeService,
    private loadingCtrl: LoadingController,
    private iab:InAppBrowser) {  }

  ngOnInit() {
  }

  async ionViewDidEnter() {
    this.loadData();
    this.getDefSource();
  }

  async ionViewDidLeave() {
    this.sourceList = [];
  }

  
  async showLoading() {
    const loading = await this.loadingCtrl.create({
      message: 'Installing Source...',
      duration: 1000,
      spinner: 'circles'
    });
    setTimeout(() => {
      this.loadData();
    }, 1000)
    loading.present();
  }

  async showLoading2(i: any) {
    const loading = await this.loadingCtrl.create({
      message: 'Removing Sources...',
      duration: 1000,
      spinner: 'circles'
    });
    
    loading.present();
    setTimeout(() => {
      this.removeItem(i);
      // window.location.reload();
    }, 1000)

  }

  openModal(i: any) {
    this.setOpen(true);
    this.list = this.sourceList[i].packages;
    //console.log(this.list);
  }

  setOpen(isOpen: boolean) {
    this.isModalOpen = isOpen;
  }

  setOpen2(isOpen: boolean) {
    this.isModalOpen2 = isOpen;
  }

  getSourceData() {
    return this.http.get(this.alertData);
  }

  onWillDismiss(event: Event) {
    const ev = event as CustomEvent<OverlayEventDetail<string>>;
    if (ev.detail.role === 'confirm') {
      this.message = `Hello`;
    }
  }

  getDefSource() {
    this.serve.getSourceData('https://awaadcc.github.io/dovshop/home.json').subscribe(data => {
      this.deflist = data['topapps'];
      //console.log(this.deflist)
    })
  }

  removeItem(i: any) {
    //this.storage.remove('source');
    //this.sourceList = null;
    this.sourceList.splice(i, 1);
    this.storage.set('source', this.sourceList);
    this.urlList.splice(i, 1);
    this.storage.set('url', this.urlList);

  }

  getData(str) {
    this.loadData();
    this.serve.getSourceData(str).subscribe(data => {
      this.addList = data['sources'];
     
      //console.log(this.addList);
      const item = <StorageItem>this.addList[0];
      console.log("this.arr after push call");
       this.arr.push(item);
      console.log(this.arr);
      this.storage.set('source', this.arr);
    })
  }

  loadData() {
    this.storage.get('source').then(res => {
      if(!res) {
        this.sourceList = [];
        this.arr = [];
      } else {
        this.sourceList = res;
        this.arr = res;
        console.log("this.arr after load data call");
        console.log(this.arr);
      }
    })
    this.storage.get('url').then(res => console.log(res));
  }

  async addSource() {
    const alert = await this.alertController.create({
      header: 'Add Source',
      subHeader: 'Enter dovShop Package URL',
      buttons: [{
            text: 'Cancel',
            role: 'cancel',
            cssClass: 'secondary',
            handler: () => {
                console.log('Confirm Cancel');
            }
        }, 
        {
            text: 'Ok',
            handler: (aData) => { //takes the data 
                this.alertData = aData.source;
                this.getData(this.alertData);
                this.showLoading();
                this.urlList.push(this.alertData);
                this.storage.set('url', this.urlList);
            }
        }],
      inputs: [
        {
          type: 'url',
          name: 'source',
          value: 'https://'
        }
      ]
    });

    await alert.present();
  }

  openBrowser(url) {
    const browser = this.iab.create(url, '_blank', 'location=yes,toolbarposition=top,toolbartranslucent=no');
  }

}
