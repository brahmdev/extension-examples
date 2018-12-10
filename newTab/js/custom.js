document.addEventListener("DOMContentLoaded", function() {
        //chrome.management.getAll(getAllCallback);
		getAllGoogleServices();
		getAllSocialApps();
		getICloudApps();
 });
	  
$(document).ready(function () {
	$('#sidebarCollapse').on('click', function () {
		$('#sidebar').toggleClass('active');
	});
	
	$('#apps-menu').on('click', function () {
		$('#apps-modal').modal('toggle');
	});

	$('#social-apps-menu').on('click', function () {
		$('#social-apps-modal').modal('toggle');
	});

	$('#icloud-apps-menu').on('click', function () {
		$('#icloud-apps-modal').modal('toggle');
	});

	//$('#sidebarCollapse').trigger('click');
	
	//console.log("**************** ",cjgShortcuts.mostPopular);
	//console.log("List**********	 ",cjgShortcuts.list["59"]);
});

var getAllCallback = function(list) {
  var apps = document.getElementById("apps");
  for(var i in list) {
    // we don't want to do anything with extensions yet.
    var extInf = list[i];
      var app = document.createElement("div");
 if(extInf.isApp && extInf.enabled) {
      var img = new Image();
      img.className = "image";
      img.src = find128Image(extInf.icon);
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
};

var getAllGoogleServices = function() {
  var services = document.getElementById("google-services");
  for(let i in cjgShortcuts.mostPopular) {
    // we don't want to do anything with extensions yet.
    var extInf = cjgShortcuts.list[i];
    if(extInf !== undefined && extInf.u !== undefined && extInf.u.indexOf("google") > 1) {
      var service = document.createElement("div");

      var anchor = document.createElement("a");
      anchor.setAttribute("href",  extInf.u);
      anchor.setAttribute("target", "_blank");	    
      var img = new Image();
      img.className = "image";
	  img.id = "img_" +  extInf.i18n;
      img.src = "img/48/" + extInf.icon + "_48dp.svg";
      img.setAttribute("title", extInf.name);   
      anchor.appendChild(img);

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.name;
      service.className = "service";
      service.appendChild(anchor);
      service.appendChild(name);
      services.appendChild(service);
    }
  }
  
};

var getAllSocialApps = function() {
  var socialApps = document.getElementById("social-apps");
  for(let i in socialMedia.socialApps) {
    // we don't want to do anything with extensions yet.
    var extInf = socialMedia.socialApps[i];
    if(extInf !== undefined && extInf.url !== undefined && extInf.category === 'messenger') {
      var socialApp = document.createElement("div");

      var anchor = document.createElement("a");
      anchor.setAttribute("href",  extInf.url);
      anchor.setAttribute("target", "_blank");	    
      var img = document.createElement("div");;
      img.className = "social-image";
      img.id = "img_" +  extInf.i18n;
      //img.src = "img/48/" + extInf.icon + "_48dp.svg";
      img.setAttribute("title", extInf.name);
      img.setAttribute("style", "background:url('" + extInf.icon +"') round;")   
      anchor.appendChild(img);

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.title;
      socialApp.className = "social-app";
      socialApp.appendChild(anchor);
      socialApp.appendChild(name);
      socialApps.appendChild(socialApp);
    }
  }
};

var getICloudApps = function() {
  var iCloudApps = document.getElementById("icloud-apps");
  for(let i in socialMedia.socialApps) {
    // we don't want to do anything with extensions yet.
    var extInf = socialMedia.socialApps[i];
    if(extInf !== undefined && extInf.url !== undefined && extInf.category === 'icloud-service') {
      var icloudApp = document.createElement("div");

      var anchor = document.createElement("a");
      anchor.setAttribute("href",  extInf.url);
      anchor.setAttribute("target", "_blank");	    
      var img = document.createElement("div");;
      img.className = "icloud-image";
      img.id = "img_" +  extInf.i18n;
      //img.src = "img/48/" + extInf.icon + "_48dp.svg";
      img.setAttribute("title", extInf.name);
      img.setAttribute("style", "background:url('" + extInf.icon +"') round;")   
      anchor.appendChild(img);

      var name = document.createElement("div");
      name.className = "name";
      name.textContent = extInf.title;
      icloudApp.className = "icloud-app";
      icloudApp.appendChild(anchor);
      icloudApp.appendChild(name);
      iCloudApps.appendChild(icloudApp);
    }
  }
};

var find128Image = function(icons) {
  for(var icon in icons) {
    if(icons[icon].size == "128") {
      return icons[icon].url;
    }
  }

  return "/noicon.png";
};

