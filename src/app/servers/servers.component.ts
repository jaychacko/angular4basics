import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  allowNewserver =false;
  serverCreationStatus= "no server is created" ;
  serverName='';
  serverngif=false;

  
  constructor() { 
    setTimeout(()=> {

      this.allowNewserver = true
      
    }, 2000);
  }

  ngOnInit() {
  }
  onCreateServer = ()=>{
    this.serverngif = true;
     return this.serverCreationStatus =  'Server is created and its name is '+this.serverName
  }
    onUpdateServernName= (event:any)  =>{
        console.log(event)
        this.serverName =event.target.value
    }

}
