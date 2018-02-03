import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { MovieProvider } from '../../providers/movie/movie';

/**
 * Generated class for the FeedPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-feed',
  templateUrl: 'feed.html',
  providers:[
    MovieProvider
  ]
})
export class FeedPage {


  public  objeto_feed = {
      titulo:'Vagner Barreto',
      data:'November 5, 1955',
      descricao:'Estou criando um App incrível com Ionic!!!!!!!!!!!!!',
      qntd_likes:12,
      qntd_comments:4,
      time_comment:'1h ago'
  }

  public lista_filmes = new Array<any>();

  public nomeUsuario:string = "Vagner Barreto";
  constructor(
    public navCtrl: NavController,
    public navParams: NavParams ,
    private movieProvider : MovieProvider) {
  }

  public somaDoisNumeros(num1:number , num2:number): void{
    alert(num1 + num2);
  }

  ionViewDidLoad() {

      this.movieProvider.getLastestMovies().subscribe(
        data => {
          const response = (data as any);
          const objeto_retorno = JSON.parse(response._body);
          this.lista_filmes = objeto_retorno.results;
          console.log(objeto_retorno);
        }, error =>{
          console.log(error);
        }
      )
  }

}
