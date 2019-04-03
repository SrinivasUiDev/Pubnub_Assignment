import {Component, OnInit} from '@angular/core';
import {ChatEngineServiceService} from '../chat-engine-service.service';

@Component({
    selector: 'app-usercomponent',
    templateUrl: './usercomponent.component.html',
    styleUrls: ['./usercomponent.component.scss']
})
export class UsercomponentComponent implements OnInit {
    private ce: any;

    constructor(private chatEngine: ChatEngineServiceService) {
        this.ce = chatEngine;
    }

    getUsers(obj) {
        let users: any = [];
        if (obj) {
            Object.keys(obj).forEach((key) => {
                users.push(obj[key]);
            });
        }
        return users;
    }

    ngOnInit() {
    }

}
