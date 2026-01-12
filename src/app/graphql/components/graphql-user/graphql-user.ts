import { Component } from '@angular/core';
import { Apollo } from 'apollo-angular';
import { GET_USERS, ADD_USER } from '../../queries/query';
@Component({
  selector: 'app-graphql-user',
  imports: [],
  templateUrl: './graphql-user.html',
  styleUrl: './graphql-user.css'
})
export class GraphqlUser {
 users: any[] = [];
  
  constructor(private apollo: Apollo) {}

  ngOnInit(): void {
    this.apollo.watchQuery({
      query: GET_USERS
    }).valueChanges.subscribe((result: any) => {
      this.users = result?.data?.users;
    });
  }

  addUser() {
    this.apollo.mutate({
      mutation: ADD_USER,
      variables: {
        name: 'New User',
        email: 'newuser@example.com'
      }
    }).subscribe((result) => {
      console.log('User added', result.data);
    });
  }

}
