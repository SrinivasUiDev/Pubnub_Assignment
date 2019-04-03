import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {ChatEngineCore} from 'chat-engine';
import {ChatEngineServiceService} from './chat-engine-service.service';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {LoginComponent} from './login/login.component';
import {UsercomponentComponent} from './usercomponent/usercomponent.component';

@NgModule({
    declarations: [
        AppComponent,
        LoginComponent,
        UsercomponentComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule
    ],
    providers: [ChatEngineServiceService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
