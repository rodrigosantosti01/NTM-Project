import {Component,NgModule} from '@angular/core';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';


@Component ({
 selector: 'joke',
 template: '<h1> Qual o ar mais talentoso? </h1> <p> O artista. </p>'
})

class JokeComponent{

}

@NgModule({
  imports: [BrowserModule],
  declarations: [JokeComponent],
  bootstrap: [JokeComponent]
})

export class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);