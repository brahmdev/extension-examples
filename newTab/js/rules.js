var table;
var editor;

function bindEvent(rowData) {
    $('#html_save').on('click', function () {
        rowData.html = $('#html_txtarea_' + rowData.DT_RowId)[0].value;
        var userData = {};
        userData[rowData.DT_RowId] = rowData;
        setValueInStorage(userData);
    });

    $('#js_save').on('click', function () {
        rowData.js = $('#js_txtarea_' + rowData.DT_RowId)[0].value;
        var userData = {};
        userData[rowData.DT_RowId] = rowData;
        setValueInStorage(userData);
    });

    $('#css_save').on('click', function () {
        rowData.css = $('#css_txtarea_' + rowData.DT_RowId)[0].value;
        var userData = {};
        userData[rowData.DT_RowId] = rowData;
        setValueInStorage(userData);
    });
}

function populateRulesData() {

    if ( ! $.fn.DataTable.isDataTable( '#example' ) ) {
        // Object that will contain the local state
        var userData = {};
    
        // get the userData chromeStorage entry
        chrome.storage.sync.get(['userData'], function(result) {
            userData = $.isEmptyObject(result) ? initRuleTable(result) : initRuleTable(result.userData);
            console.log("store value is: ", userData);            
        });
    }   
}

function initRuleTable(userData) {
    // Set up the editor
    editor = new $.fn.dataTable.Editor( {
        table: "#example",
        fields: [ {
                label: "Name:",
                name: "name"
            }, {
                label: "URL:",
                name: "url"
            }
        ],
        ajax: function ( method, url, d, successCallback, errorCallback ) {
            var output = { data: [] };
 
            if ( d.action === 'create' ) {
                // Create new row(s), using the current time and loop index as
                // the row id
                var dateKey = +new Date();
 
                $.each( d.data, function (key, value) {
                    var id = dateKey+''+key;
 
                    value.DT_RowId = id;
                    userData[ id ] = value;
                    value.html = "";
                    value.js = "";
                    value.css = "";
                    output.data.push( value );
                } );
            }
            else if ( d.action === 'edit' ) {
                // Update each edited item with the data submitted
                $.each( d.data, function (id, value) {
                    value.DT_RowId = id;
                    $.extend( userData[ id ], value );
                    output.data.push( userData[ id ] );
                } );
            }
            else if ( d.action === 'remove' ) {
                // Remove items from the object
                $.each( d.data, function (id) {
                    delete userData[ id ];
                } );
                chrome.storage.sync.set({userData}, function() {
                    console.log('Value is set to ' + JSON.stringify(userData));
                });
            }
 
            // Store the latest `userData` object for next reload
            setValueInStorage(userData);

            successCallback( output );
        }
    } );

    //var userData =  getUserData();
    table = $('#example').DataTable( {
        dom: "Bfrtip",
     // data :  userData,
        data: $.map( userData, function (value, key) {
         return value;
        } ),
      "columns": [
          {
              "className":      'details-control',
              "orderable":      false,
              "data":           null,
              "defaultContent": ''
          },
          { "data": "name" },
          { "data": "url" },
          { "data": "html" },
          { "data": "js" },
          { "data": "css" }
      ],
      "columnDefs": [
           { "visible": false,  "targets": [ 3, 4, 5 ] }
        ],
      "scrollY": "300px",
      "scrollCollapse": true,
      "order": [[1, 'asc']],
      "bDestroy": true,
        select: true,
       buttons: [
            { extend: "create", editor: editor },
            { extend: "edit",   editor: editor },
            { extend: "remove", editor: editor }
        ]

  } );
   
  // Add event listener for opening and closing details
  $('#example tbody').on('click', 'td.details-control', function () {
    var tr = $(this).closest('tr');
    var row = table.row( tr );

    if ( row.child.isShown() ) {
        row.child.hide();
        tr.removeClass('shown');     
        }
    else
        {
        //Below line does the trick :)
        if ( table.row( '.shown' ).length) {
            $('.details-control', table.row( '.shown' ).node()).click();
        }
        row.child( createChild(row.data().DT_RowId) ).show();
        tr.addClass('shown');
        bindEvent(row.data());
        assignValues(row.data());
    }
   } );
}

function assignValues(rowData) {
    $('#html_txtarea_' + rowData.DT_RowId).val(rowData.html);
    $('#js_txtarea_' + rowData.DT_RowId).val(rowData.js);
    $('#css_txtarea_' + rowData.DT_RowId).val(rowData.css);
}

function setValueInStorage(userData) {
    chrome.storage.sync.get(['userData'], function(result) {
        if ($.isEmptyObject(result)) {
            userData = userData;
        } else {
            Object.keys(userData)
            .forEach(function eachKey(key) { 
                result.userData[key] = userData[key];
            });
            userData =  {};
            userData = result.userData;
        }
        
        //userData = $.isEmptyObject(result) ? userData : (result.userData[userData.DT_RowId] = userData);
        console.log("store value is: ", result);
        chrome.storage.sync.set({userData}, function() {
            console.log('Value is set to ' + JSON.stringify(userData));
        });
    // initRuleTable(result);
        
    });
    
}

function createChild(rowId) {
    var childElement = `
       <nav>
       <div class="nav nav-tabs" id="nav-tab" role="tablist">
         <a class="nav-item nav-link active" id="nav-home-tab" data-toggle="tab" href="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">HTML</a>
         <a class="nav-item nav-link" id="nav-profile-tab" data-toggle="tab" href="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">JavaScript</a>
         <a class="nav-item nav-link" id="nav-contact-tab" data-toggle="tab" href="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">CSS</a>
       </div>
     </nav>
     <div class="tab-content" id="nav-tabContent">
       <div class="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab">
         <textarea class="form-control" rows="5" id="html_txtarea_` + rowId + `" placeholder="Enter you custom HTML for override"></textarea>
         <button type="button" id="html_save" class="btn btn-primary pull-right">Save HTML</button>
       </div>
       <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
         <textarea class="form-control" rows="5" id="js_txtarea_` + rowId + `" placeholder="Enter you custom HTML for override"></textarea>
         <button type="button" id="js_save" class="btn btn-primary pull-right">Save JS</button>
       </div>
       <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
         <textarea class="form-control" rows="5" id="css_txtarea_` + rowId + `" placeholder="Enter you custom HTML for override"></textarea>
         <button type="button" id="css_save" class="btn btn-primary pull-right">Save CSS</button>
       </div>
     </div>`;
   return childElement;
   }
   