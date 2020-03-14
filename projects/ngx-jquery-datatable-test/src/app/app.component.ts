import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
    option: any;
    //@ViewChild(DatatableComponent) datatableComponent: DatatableComponent;
    constructor() { }
  
    ngOnInit() {
      this.option = {
        colReorder: true,
        data: [],
        columns: [{ data: 'id' }, { data: 'name' }, { data: 'phone' }, { data: 'company' }, { data: 'zip' }, { data: 'city' }, { data: 'date' }]
      }
  
      setTimeout(()=>{
        this.option = {
          colReorder: true,
          data: [
            {
              "id": "3",
              "name": "Brendan",
              "phone": "1-724-406-2487",
              "company": "Enim Commodo Limited",
              "zip": "98611",
              "city": "Norman",
              "date": "02/13/14"
            },
            {
              "id": "4",
              "name": "Warren",
              "phone": "1-412-485-9725",
              "company": "Odio Etiam Institute",
              "zip": "10312",
              "city": "Sautin",
              "date": "01/01/13"
            }
          ],
          columns: [{ data: 'id' }, { data: 'name' }, { data: 'phone' }, { data: 'company' }, { data: 'zip' }, { data: 'city' }, { data: 'date' }]
        }
        
      },3000);
      // setTimeout(() => {
      //   this.datatableComponent.render()
      // }, 4000);
  
    }
}
