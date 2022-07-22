import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { SwiperModule } from 'swiper/angular';
import { AppstabPageRoutingModule } from './appstab-routing.module';

import { AppstabPage } from './appstab.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SwiperModule,
    AppstabPageRoutingModule
  ],
  declarations: [AppstabPage]
})
export class AppstabPageModule {}
