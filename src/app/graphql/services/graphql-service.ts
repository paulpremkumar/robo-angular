import { Injectable } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { InMemoryCache, ApolloClient } from '@apollo/client/core';
import { HttpLink } from 'apollo-angular/http';
@Injectable({
  providedIn: 'root'
})
export class GraphqlService {
   private apolloCreated = false;
 constructor(private apollo: Apollo, private httpLink: HttpLink) {
 this.createAppollo();
 }
 createAppollo(){
   if (this.apolloCreated) return;
   try{
    // Create a new client
const client = new ApolloClient({
  link: this.httpLink.create({ uri: 'http://localhost:4000/graphql' }),
  cache: new InMemoryCache(),
});

// Assign it to Apollo
this.apollo.create({ link: client.link, cache: client.cache });

   }catch (err:any) {
    if (!err.message.includes('already created')) {
      throw err;
    }
  }
   
 }


}
