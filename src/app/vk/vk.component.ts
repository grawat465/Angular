import { Component, OnInit, Input } from '@angular/core';
import { Movie } from '../movie';
import { setRootDomAdapter } from '@angular/platform-browser/src/dom/dom_adapter';

@Component({
  selector: 'app-vk',
  templateUrl: './vk.component.html',
  styleUrls: ['./vk.component.css']
})
export class VkComponent implements OnInit {
 @Input() bhuwan:Movie;
  constructor() { }

  ngOnInit() {
    
    
  }
upvote(){
  this.bhuwan.upvote();
}

downvote(){
  this.bhuwan.downvote();
}

}

