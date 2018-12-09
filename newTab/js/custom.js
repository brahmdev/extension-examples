document.addEventListener("DOMContentLoaded", function() {
        chrome.management.getAll(getAllCallback);
      });
	  
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
});

var getAllCallback = function(list) {
  var apps = document.getElementById("apps");
  for(var i in list) {
    // we don't want to do anything with extensions yet.
    var extInf = list[i];
    if(extInf.isApp && extInf.enabled) {
      var app = document.createElement("div");

      var img = new Image();
      img.className = "image";
      img.src = find128Image(extInf.icons);
      img.setAttribute("title", extInf.name);   
      img.addEventListener("click", (function(ext) {
	    return function() {
	        chrome.management.launchApp(ext.id);
	    };
	})(extInf));

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.name;
      app.className = "app";
      app.appendChild(img);
      app.appendChild(name);
      apps.appendChild(app);
    }
  }
 
/*	var img = new Image();
      img.className = "image";
      img.src = "/swagger.png";
      img.setAttribute("style", "cursor:pointer");
      img.setAttribute("title", extInf.name);
      img.addEventListener("click", (function(ext) {
            return function() {
                window.open("https://inspector.swagger.io", "_blank");
            };
        })(extInf));


      var name = document.createElement("div");
      name.className = "name";
      name.textContent = 'Swagger Inspector';
      name.setAttribute("style", "display:block;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;width:125px;text-align:center;");
      app.className = "app";
      app.appendChild(img);
      app.appendChild(name);
      apps.appendChild(app);
*/
};

var find128Image = function(icons) {
  for(var icon in icons) {
    if(icons[icon].size == "128") {
      return icons[icon].url;
    }
  }

  return "/noicon.png";
};

