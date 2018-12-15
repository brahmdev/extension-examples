function populateRulesData() {
    var userData =  getUserData();
    var table = $('#example').DataTable( {
      data :  userData,
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
      "order": [[1, 'asc']],
      "bDestroy": true
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
            "id": 1,
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
   