import {Injectable} from '@angular/core';
import {ChatEngineCore} from 'chat-engine';

@Injectable({
    providedIn: 'root'
})
export class ChatEngineServiceService {

    instance: any;
    create: any;
    plugin: any;
    me: any = {state: {}};

    constructor() {
        this.instance = ChatEngineCore.prototype.create(
            {
                publishKey: 'pub-c-e2882756-a9de-45ee-b69e-26b094bc11dc',
                subscribeKey: 'sub-c-6f54763a-5154-11e9-bdf4-8e79f01390ff'
            },
            {
                debug: true,
                globalChannel: 'chat-engine-angular2-simple'
            });
        this.create = ChatEngineCore.prototype.create.bind(this);
        this.plugin = window['ChatEngineCore'].plugin;
    }
}
