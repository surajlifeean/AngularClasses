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
 
  	myFavLang = {
  		'FrontEnd':['html','bootstrap','Angular'],
  		'BackEnd': ['php','python','j2ee']
  	};
  
}
