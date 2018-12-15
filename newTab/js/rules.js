var editor;


function populateRulesData() {

    // Object that will contain the local state
    var userData = {};
 
    // Create or update the userData localStorage entry
    const storedValue = chrome.storage.local.get(['userData'], function(result) {});
    console.log("value is *** ", storedValue);
    chrome.storage.local.get(['userData'], function(result) {
        userData = storedValue === undefined ? {} : storedValue;
    });
    
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
            }
 
            // Store the latest `userData` object for next reload
            var obj = {};
            obj[userData] = userData;
            chrome.storage.local.set({[userData]: JSON.stringify(userData)}, function() {
                console.log('Value is set to ' + JSON.stringify(userData));
            });

            // Show Editor what has changed
            successCallback( output );
        }
    } );

    //var userData =  getUserData();
    var table = $('#example').DataTable( {
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
          { "data": "url" }
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
          // This row is already open - close it
          row.child.hide();
          tr.removeClass('shown');
      }
      else {
          // Open this row
          row.child( $(
              createChild()
            ) ).show();
          tr.addClass('shown');
      }
   } );
}

function getUserData() {
  
    var data = [];
    var userData = {};
  
    /*for(var i in someData) {
  
        var item = someData[i];
  */
      data.push({ 
            "DT_RowId": "1",
            "name" : "Example Site",
            "url"  : 'http://example.com' 
        });
   // }
  
    userData.data = data;
  
    return data;
  }

function createChild() {
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
         <textarea class="form-control" rows="5" id="comment" placeholder="Enter you custom HTML for override"></textarea>
       </div>
       <div class="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab">
         <textarea class="form-control" rows="5" id="comment" placeholder="Enter you custom HTML for override"></textarea>
       </div>
       <div class="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab">
         <textarea class="form-control" rows="5" id="comment" placeholder="Enter you custom HTML for override"></textarea>
       </div>
     </div>`;
   return childElement;
   }
   