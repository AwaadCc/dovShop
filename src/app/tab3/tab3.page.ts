import { Component } from '@angular/core';
import { Storage } from '@ionic/storage';
import { StorageItem } from '../shared/storage-item';
import { ServeService } from '../serve.service';
import { LoadingController, AlertController } from '@ionic/angular';
import { HttpClient } from '@angular/common/http';
import { Tab2Page } from '../tab2/tab2.page';
import { OverlayEventDetail } from '@ionic/core/components';


@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  alist: StorageItem[];
  clist: StorageItem[] = [];
  flist: string[] = [];
  imgList: string[] = [];
  toplist: string[] = [];
  tempa: StorageItem[] = [];
  tempa2: string[] = [];
  arr: StorageItem[] = [];
  image: string;
  name: "image";
  urlList: string[] = [];
  constructor(private storage: Storage, 
   private serve: ServeService, 
    private loadingCtrl:LoadingController, 
    private alertController:AlertController,
    private http:HttpClient) {}

  async ngOnInit() {}

  getData() {
    this.storage.get('url').then(res => {
      this.urlList = res;
      // console.log(this.urlList);
    });
    this.storage.get('source').then(res => {
      this.alist = res;
      if(!this.alist) {

      } else {
          for(let i = 0; i<this.alist.length; i++) {
            this.clist.push(this.alist[i]);
            this.imgList.push(this.clist[i].image);
            this.toplist.push(this.clist[i].changelog[1]);
            this.flist.push(this.clist[i].changelog[0]);
          }
          for(let i = 0; i<this.clist.length; i++) {
            for(let j = 2; j<this.clist[i].changelog.length; j++) {
              this.flist.push(this.clist[i].changelog[j]);
              //console.log(this.imgList);
            }
          for(let i = 0; i<this.clist.length; i++) {
            for(let j = 2; j<this.clist[i].changelog.length; j++)
              this.imgList.push(this.clist[i].changelog[0]);        
          }
        }
      }
    })
  }

 ionViewDidEnter() {
  this.getData();
 }
 ionViewDidLeave() {
    this.alist = [];
    this.clist = [];
    this.imgList = [];
    this.toplist = [];
    this.flist = [];
 }

  isEmpty() {
    return this.flist.length == 0;
  }

  async refresh() {
    const loading = await this.loadingCtrl.create({
      message: 'Updating Sources',
      duration: 1000,
      spinner: 'circles'
    })
    loading.present();
    setTimeout(() => {
      this.doRefresh();
      this.doneRefresh();
    }, 1500)
  }

  doRefresh() {
    //TODO: MAKE doRefresh()  SO DATA IS RETRIEVED FROM URL(S) AGAIN
    //      IN ORDER TO INPLEMENT REALTIME SOURCE REFRESH
  }

  async doneRefresh() {
    const alert = await this.alertController.create({
      subHeader: 'Sources have been updated',
      buttons: [{
            text: 'Ok',
            handler: () => {
                console.log('Confirm Ok');
            }
        }]
    });

    await alert.present();
  }

}
