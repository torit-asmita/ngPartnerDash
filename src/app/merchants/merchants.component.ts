import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-merchants',
  templateUrl: './merchants.component.html',
  styleUrls: ['./merchants.component.css']
})
export class MerchantsComponent implements OnInit {

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
        title: 'Shop Name'
      },
      phone: {
        title: 'Contact Number'
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
      phone: "9999",
      email: "Sincere@april.biz"
    },
    {
      id: 2,
      name: "Ervin Howell",
      phone: "67867687",
      email: "Shanna@melissa.tv"
    },
    
    // ... list of items
    
    {
      id: 11,
      name: "Nicholas DuBuque",
      phone: "78787867",
      email: "Rey.Padberg@rosamond.biz"
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
