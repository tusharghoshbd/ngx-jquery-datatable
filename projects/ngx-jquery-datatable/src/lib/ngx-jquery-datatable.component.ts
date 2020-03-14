import { Component, OnInit, Input, ElementRef, SimpleChanges} from '@angular/core';

import "script-loader!jquery/dist/jquery.min.js";
import "script-loader!@tusharghoshbd/jq-plugins/Datatables/datatables.min.js";

declare var $: any;

@Component({
  selector: 'ngx-jquery-datatable',
  template: `
    <table class="dataTable responsive {{tableClass}}" width="{{width}}">
        <ng-content></ng-content>
    </table>
  `,
  styles: ["../assets/js/jquery.dataTables.min.css"]
})
export class NgxJqueryDatatableComponent implements OnInit {

    @Input() public options: any;
    @Input() public filter: any;
    @Input() public detailsFormat: any;
  
    @Input() public paginationLength: boolean;
    @Input() public columnsHide: boolean;
    @Input() public tableClass: string;
    @Input() public width: string = "100%";
    _dataTable:any;
    constructor(private el: ElementRef) {}
  
    ngOnChanges(changes: SimpleChanges) {
      console.log(changes);
      if(this._dataTable)
        this.render();
    }
    ngOnInit() {
        console.log(this.paginationLength)
      this.render();
    }

  
    render() {
      console.log(this.options);
      let element:any;
      if(!this._dataTable)
        element= $(this.el.nativeElement.children[0]);
      else
        element= $(this.el.nativeElement.children[0].children[1]);
      console.log(element);
      let options = this.options || {};
  
      let toolbar = "";
      if (options.buttons) toolbar += "B";
      if (this.paginationLength) toolbar += "l";
      if (this.columnsHide) toolbar += "C";
  
      if (typeof options.ajax === "string") {
        let url = options.ajax;
        options.ajax = {
          url: url
          // complete: function (xhr) {
          //
          // }
        };
      }
  
      options = $.extend(options, {
        dom:
          "<'dt-toolbar'<'col-xs-12 col-sm-6'f><'col-sm-6 col-xs-12 hidden-xs text-right'" +
          toolbar +
          ">r>" +
          "t" +
          "<'dt-toolbar-footer'<'col-sm-6 col-xs-12 hidden-xs'i><'col-xs-12 col-sm-6'p>>",
        oLanguage: {
          sSearch:
            "<span class='input-group-addon'><i class='glyphicon glyphicon-search'></i></span> ",
          sLengthMenu: "_MENU_"
        },
        autoWidth: false,
        retrieve: true,
        responsive: true,
        initComplete: (settings, json) => {
          element
            .parent()
            .find(".input-sm")
            .removeClass("input-sm")
            .addClass("input-md");
        }
      });
  
      if(!this._dataTable)
        this._dataTable = element.DataTable(options);
      else{
        this._dataTable.destroy();
        this._dataTable = element.DataTable(options);
        //this._dataTable.draw();
        
      }
    }

}
