// Entry point for the build script in your package.json
import "@hotwired/turbo-rails"
import "./controllers"
import * as bootstrap from "bootstrap"
import "./custom" 
import jquery from "jquery"


//import "trix"
//import "@rails/actiontext"


window.jQuery = jquery 
window.$ = jquery

$(function(){
    
    console.log("Hello from jquery")

        $(".province").click(function() {
          var province_id = $(".province_select").val();
          $.get(
            `http://localhost:3000/cities/${province_id}/province`,
            function(data, status) {
              $(".city_select").empty();
              for (var index = 0; index < data.length; index++) {
                if (data[index].id === void 0) {
                  return;
                }
                $(".city_select").append(`<option value="${data[index].id}"> ${data[index].city_name} </option>`);
              }
            }
          );
        });
      
})
