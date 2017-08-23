import {Component} from '@angular/core';

@Component({
    selector:'app-server',
    templateUrl:'./server.component.html',
    styles:[`.online{color:blue}`]
})
export class ServerComponent {
    serverId:number =10;
    serverStatus:string = 'offline';

    constructor(){
        
    }

}