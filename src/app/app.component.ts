import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {


  title = 'blog';




  listPost = [
    {
      title: 'Mon premier post',
  	  content: 'Lorem ipsum dolor sit amet, oblique intellegam efficiantur in his, audiam perfecto eam in. At dicam nostrud docendi cum, ut cum saperet laoreet, putent facilisis ne eam. Veritus deseruisse reformidans ut usu, vel te iusto ludus putant, putant petentium deseruisse ne vel.',
  	  loveIts: 2,
  	  created_at:  new Date()
    },
    {
      title: 'Mon deuxième post',
  	  content: 'Lorem ipsum dolor sit amet, cum natum quidam et. Eam eu labore impetus, ex ludus qualisque expetendis sit. In everti theophrastus est, at est duis nusquam accommodare, in vel delenit dignissim. Admodum mnesarchum mel cu, solet vulputate sententiae vix cu.',
  	  loveIts: -3,
  	  created_at: new Date()
    },
    {
      title: 'Encore un post',
  	  content: 'Lorem ipsum dolor sit amet, aperiam facilisi ne pri, et modus maiorum suscipiantur usu. At vix assum congue primis, vel tale quaestio tractatos an, eu pro choro ornatus deseruisse.',
  	  loveIts: 0,
  	  created_at:  new Date()
    }
  ];

onLove(){
	
	console.log('on allume tous');
}

onDontLove(){
	
	console.log('on allume tous');
}


}
