import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-transactions',
  templateUrl: './transactions.component.html',
  styleUrls: ['./transactions.component.css']
})
export class TransactionsComponent implements OnInit {

  settings = {
    add: {
      addButtonContent: '<nb-icon icon="star"></nb-icon>',
      createButtonContent: '<nb-icon icon="heart-outline"></nb-icon>',
      cancelButtonContent: '<nb-icon icon="star"></nb-icon>',
      
    },
    edit: {
      editButtonContent: '<nb-icon icon="star"></nb-icon>',
      saveButtonContent: '<nb-icon icon="star"></nb-icon>',
      cancelButtonContent: '<nb-icon icon="star"></nb-icon>',
    },
  
    columns: {
      id: {
        title: 'ID'
      },
      name: {
        title: 'Full Name'
      },
      username: {
        title: 'User Name'
      },
      email: {
        title: 'Email'
      }
    }
  };
  data = [
    {
      id: 1,
      name: "Leanne Graham",
      username: "Bret",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      username: "Antonette",
      email: "Shanna@melissa.tv"
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      username: "Nicholas.Stanton",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
