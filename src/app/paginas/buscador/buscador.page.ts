import { HttpClient } from '@angular/common/http';
import { Component, inject, OnInit } from '@angular/core';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.page.html',
  styleUrls: ['./buscador.page.scss'],
})
export class BuscadorPage implements OnInit {
  //injetar a biblioteca do httpclient -modo 1
  
  constructor(private http: HttpClient) { }

 //private http  = inject(HttpClient);
  apiLink =  'https://pokeapi.co/api/v2/pokemon/'
  pokemon: any = null
  ngOnInit() {
  }

  getPokemon(obj: any){
    this.http.get(this.apiLink+obj.target.value)
    .subscribe({
      //sucesso
      next: (data: any)=> {
        console.log(data)
        console.log(data.name)
        console.log(data.id)
        console.log(data.sprites.otther['official-artwork'].front_default)
        this.pokemon = data
      },
      error: (err)=>{
        console.log(err)
        if(err.status==404){
          alert('pokemon não encontrado')
        }
      }
    })
  }

}
