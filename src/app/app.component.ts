import { Component } from '@angular/core';
 import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name = 'suraj';
  visible=true;
  counter=0;
  mystring="";
 
  	myFavLang = [
  		{'name':'html', 'type':'front'},
		{'name':'bootstrap', 'type':'front'},
  		{'name':'php', 'type':'back'},

];
  myfunction(event){
      this.mystring+=event.target.value;
  }
  
}
