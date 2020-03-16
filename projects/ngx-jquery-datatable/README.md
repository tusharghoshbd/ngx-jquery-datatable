# NgxJqueryDatatable

**NgxJqueryDatatable** is an angular library for presenting large and complex data. This library make you easy to integrate jQuery Datatable in your angular component. This library supports all kind features of Datatable such as paging, ordering, search, scrolling and many more to a static HTML page.

## Demo
![](https://media.giphy.com/media/gFnYn9gI5rQBmNXqwl/giphy.gif)

 ## [Demo](https://stackblitz.com/edit/ngx-jquery-datatable?file=src/app/app.component.ts)

## Installation

As a prerequisite, you need [jQuery](https://code.jquery.com) library.

```angular
npm i @tusharghoshbd/jq-plugins

npm i @tusharghoshbd/ngx-jquery-datatable
```
Add datatable script in index.html page just after the jQuery library. you can see the [demo](https://stackblitz.com/edit/ngx-jquery-datatable?file=src/app/app.component.ts).

```<script src="node_modules/@tusharghoshbd/jq-plugins/Datatables/datatables.min.js"></script>```


## Usage

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
	</tr>
  </thead>
</ngx-jquery-datatable>
```

#### Ts file
```angular
option:any = {
  colReorder: true,
  data: [{ "id": "1", "name": "Brendan","phone": "1-724-406-2487"}],
  columns: [{ data: 'id' }, { data: 'name' }, { data: 'phone' }]
}
```

## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.



## License
[MIT](https://choosealicense.com/licenses/mit/)