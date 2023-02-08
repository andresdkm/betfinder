import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule} from '@angular/forms';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {RouterModule} from '@angular/router';

import {HomeComponent} from './home.component';

import {SectionsModule} from '../sections/sections.module';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import {environment} from '../../environments/environment';
import { MatProgressBarModule } from '@angular/material/progress-bar';

const config: SocketIoConfig = {url: environment.socket + '?token=' + sessionStorage.getItem('token') , options: {}};

@NgModule({
    imports: [
        CommonModule,
        BrowserModule,
        FormsModule,
        RouterModule,
        SectionsModule,
        SocketIoModule.forRoot(config),
        MatProgressBarModule,
    ],
    declarations: [HomeComponent],
    exports: [HomeComponent],
    providers: []
})
export class HomeModule {
}
