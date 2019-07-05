import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.scss']
})
export class PostComponent implements OnInit {

@Input() postTitle: string ;
@Input() postContent: string;
@Input() postDate: Date;
@Input() postcounter: number ;

  constructor() { }

  ngOnInit() {
  }



   getColor() {
    if(this.postcounter > 0) {
      return 'green';
    } else if(this.postcounter < 0) {
      return 'red';
    }else{
    return 'black';
    }
}

onLove(){
	
	this.postcounter ++;
}

onDontLove(){
	
	this.postcounter --;

}
}
