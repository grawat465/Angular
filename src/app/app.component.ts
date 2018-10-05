import { Component } from '@angular/core';
import {Movie}  from './movie';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
 public title = 'webdev';
  govind: Movie[];

  constructor(){

    this.govind=[new Movie("Manto","surya films",15),
    new Movie("Pseudo","Yash raj films",10), new Movie("Pataka","Hirani Films"), new Movie("Ae dil hai mushkil","Johar Production",21)];
   
  }
  getdata(title:HTMLInputElement,link:HTMLInputElement){
    console.log(title.value);
    this.govind.push(new Movie(title.value, link.value));
   
     
         
       
    return true;
  }
  ngOnInit()
  {
   
  }
   Sort(){
      this.govind.sort(function (b,a) {
        return  b.votes-a.votes;
    })
  }
}
  

 
  
  

