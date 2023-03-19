import { Component } from '@angular/core';
import { empty } from 'rxjs';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent {
allowNewServer=false;
serverCreationStatus='No server was created.'
serverName:any='';
userName:any='';
serverCreated=false;
showSecret=false;
log=[];
servers=['TestServer','TestServer 2']
constructor() {
setTimeout(()=>{
  this.allowNewServer=true;
},2000)
}

onCreateServer(){
  this.serverCreationStatus='Server was created! Name is '+this.serverName
  this.servers.push(this.serverName);
  this.serverCreated=true;
}
onUpdateServerName(event: Event){
console.log(event);
this.serverName=(<HTMLInputElement>event.target).value;
}
onAddUser(){
  
    this.userName='';
  
}
onToggleDetails(){
  this.showSecret=!this.showSecret;
  this.log.push(this.log.length+1);
}
}
