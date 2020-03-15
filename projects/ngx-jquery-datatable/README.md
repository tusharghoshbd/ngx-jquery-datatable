# NgxJqueryDatatable

**NgxJqueryDatatable** is an angular library for presenting large and complex data. This library make you easy to integrate jQuery Datatable in your angular component. This library supports all kind features of Datatable such as paging, ordering, search, scrolling and many more to a static HTML page.

## Demo
![](https://media.giphy.com/media/gFnYn9gI5rQBmNXqwl/giphy.gif)

 [Demo](https://stackblitz.com/edit/ngx-jquery-datatable?file=src/app/app.component.ts).

## Installation
```angular
npm i @tusharghoshbd/ngx-jquery-datatable
```

## Usage

#### App Module
```angular
import { NgxJqueryDatatableModule } from 'ngx-jquery-datatable';

imports: [
  NgxJqueryDatatableModule 
],
```
#### Html file
```angular
<ngx-jquery-datatable 
  [options]="option"
  paginationLength="true" tableClass="table table-striped"
  width="100%">
  <thead>
	<tr>
		<th data-hide="phone">ID</th>
		<th>Name</th>
		<th>Phone</th>
		<th>Company</th>
	</tr>
  </thead>
</ngx-jquery-datatable>
```

#### Ts file
```angular
option: any;
constructor() { }

ngOnInit() {
  this.option = {
	colReorder: true,
	data: [],
	columns: []
  }
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)