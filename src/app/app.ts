import { Component, inject, signal } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router, RouterOutlet } from '@angular/router';
import { Toaster } from './shared/toaster/toaster';
import { Fullname } from './shared/pipes/fullname';
import { BgColorDirective} from "./shared/directives/bgcolor";
import { Title,Meta } from '@angular/platform-browser';
import { filter, map, mergeMap } from 'rxjs';
import { GraphqlUser } from './graphql/components/graphql-user/graphql-user';
import { provideApollo,  } from 'apollo-angular';
import { HttpLink,  } from 'apollo-angular/http';
import { InMemoryCache } from '@apollo/client/core';
import { provideHttpClient } from '@angular/common/http';
@Component({
  selector: 'app-root',
  imports: [RouterOutlet,Toaster,Fullname,BgColorDirective,GraphqlUser ],
  templateUrl: './app.html',
  styleUrl: './app.css',
  providers:[
    // provideHttpClient(),
    provideApollo(() => {
      const httpLink = inject(HttpLink); // inject HttpLink inside factory
      return {
        cache: new InMemoryCache(),
        link: httpLink.create({ uri: 'http://localhost:4000/graphql' }),
      };
    }),]
})
export class App {
  protected readonly title = signal('robo-angular');
  constructor(private meta:Meta,private titleService:Title,private route:Router,private router:ActivatedRoute){
    //  this.router.data.subscribe((data:any)=>{
    //   console.log(data,"data")
    //    this.titleService.setTitle(data.title);
    //  })
     this.route.events
    .pipe(
      filter(event => event instanceof NavigationEnd),
      map(() => {
        let route = this.router;
        while (route.firstChild) route = route.firstChild;
        return route;
      }),
      mergeMap(route => route.data)
    )
    .subscribe(data => {
      this.titleService.setTitle(data['title'] || 'MyApp');
      this.meta.updateTag({name:data['info'],content:data['info']});
    });
  }

}
