    // Map Style

function getMapStyle(){
	var styles = [
  {
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#1a597b"
      }
    ]
  },
  {
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#8ec3b9"
      }
    ]
  },
  {
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a3646"
      }
    ]
  },
  {
    "featureType": "administrative.country",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "administrative.land_parcel",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#64779e"
      }
    ]
  },
  {
    "featureType": "administrative.province",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#4b6878"
      }
    ]
  },
  {
    "featureType": "landscape.man_made",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#334e87"
      }
    ]
  },
  {
    "featureType": "landscape.natural",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#6f9ba5"
      }
    ]
  },
  {
    "featureType": "poi",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a597b"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "poi.park",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#3C7680"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#304a7d"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "road",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a597b"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#2c6675"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "geometry.stroke",
    "stylers": [
      {
        "color": "#255763"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#b0d5ce"
      }
    ]
  },
  {
    "featureType": "road.highway",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#023e58"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#98a5be"
      }
    ]
  },
  {
    "featureType": "transit",
    "elementType": "labels.text.stroke",
    "stylers": [
      {
        "color": "#1a597b"
      }
    ]
  },
  {
    "featureType": "transit.line",
    "elementType": "geometry.fill",
    "stylers": [
      {
        "color": "#283d6a"
      }
    ]
  },
  {
    "featureType": "transit.station",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#3a4762"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "geometry",
    "stylers": [
      {
        "color": "#0e1626"
      }
    ]
  },
  {
    "featureType": "water",
    "elementType": "labels.text.fill",
    "stylers": [
      {
        "color": "#4e6d70"
      }
    ]
  }
];
return styles;
}


// Map
var map;
var markersArray = [];

function initMap(center, elementId, markers, icon, zoom = 4) {
  var haightAshbury = new google.maps.LatLng(center.lat, center.lng);
  var mapOptions = {
    zoom: zoom,
    center: haightAshbury,
    disableDefaultUI: true,
		styles:getMapStyle(),
  };
  map =  new google.maps.Map(document.getElementById(elementId), mapOptions);
	$.each(markers, function (key, value){
			addMarker(value.latitude, value.longitude, value.name, value.content, icon)
	})
}

function addMarker(latitude, longitude, name, content, icon) {
	var infowindow = new google.maps.InfoWindow({
    content: content,
  });
  var marker = new google.maps.Marker({
    position: { lat: parseInt(latitude), lng: parseInt(longitude) },
    map: map,
    title:name,
    icon: icon,

  });
  marker.addListener("click", () => {
    infowindow.open({
      anchor: marker,
      map,
      shouldFocus: false,
    });
  });
  markersArray.push(marker);
}

function deleteOverlays() {
  if (markersArray) {
    for (i in markersArray) {
      markersArray[i].setMap(null);
    }
    markersArray.length = 0;
  }
}



// Validation

function ValidateDOB(dateStr) {
    var lblError = '';

    //Get the date from the TextBox.
    var dateString = dateStr;
    var regex = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (regex.test(dateString)) {
        var parts = dateString.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        // lblError = "Eligibility 18 years ONLY."
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 18) {
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() == 18) {

            //CD: 11/06/2018 and DB: 15/07/2000. Will turned 18 on 15/07/2018.
            if (dtCurrent.getMonth() < dtDOB.getMonth()) {
                return false;
            }
            if (dtCurrent.getMonth() == dtDOB.getMonth()) {
                //CD: 11/06/2018 and DB: 15/06/2000. Will turned 18 on 15/06/2018.
                if (dtCurrent.getDate() < dtDOB.getDate()) {
                    return false;
                }
            }
        }
        lblError = "";
        return true;
    } else {
        // lblError = "Enter date in dd/MM/yyyy format ONLY."
        console.log('DOB Invalid Format', dateStr)
        return false;
    }
}

$(document).ready(function(){
	function removeErrors(form, error){
		$(form).find('.invalid').removeClass('invalid');
		$(error).html('');
		$(error).addClass('d-none');
	}
	function addError(message, error, item){
		$(item).addClass('invalid');
		$(error).html(message);
		$(error).removeClass('d-none');
		$('.customScroll .signupForm').scrollTop(0)
	}

	$('.validate input[type="submit"], .validate button:not(.ignore-validation)').on('click', function(e){
		e.preventDefault();
		var flag = true;
		var form = $(this).parents('.form');
		var error = $(form).find('.alert.alert-danger');
		var message = '';
		var errorfields = [];
		removeErrors(form, error);
		if(!$(this).hasClass('back')){
			$(form).find('.required').each(function(index, item){
				let attrName = $(item).attr('name');
        let fieldName = $(item).data('field');
        if (fieldName == '' || fieldName == null || fieldName == undefined) {
          fieldName = attrName;
        }
        if(errorfields[attrName] != attrName){
  				if($(item).attr('type') == 'radio' || $(item).attr('type') == 'checkbox'){

  					if ($(form).find('input[name="'+attrName+'"]:checked').length < 1) {

  							if(message != ''){
  								message = message + ',<br>';
  							}

                if($(item).data('required') != '' && $(item).data('required') != null && $(item).data('required') != undefined){
                  message = message + $(item).data('required');
                }
                else{
    							message = message + fieldName.replace(/[\[\]']+/g,'').replace(/_/g, " ") + ' is required';
                }

  							addError(message, error, item);
  							errorfields[attrName] = attrName;

  							flag = false;
  						}
  					}
  				else{
  					if($(item).val() == ''){
  						if(message != ''){
  							message = message + ',<br>';
  						}
              if($(item).data('required') != '' && $(item).data('required') != null && $(item).data('required') != undefined){
                message = message + $(item).data('required');
              }
              else{
    						message = message +  fieldName.replace(/[\[\]']+/g,'').replace(/_/g, " ")  + ' is required';
              }
  						addError(message, error, item);
              errorfields[attrName] = attrName;
  						flag = false;
  					}
  				}
        }
			})

			if ($(form).find('input.password').length > 0) {
				let pswd = $(form).find('input.password').val();
        let spChars = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
				if ( !pswd.match(/[A-z]/) || !pswd.match(/[A-Z]/) || !pswd.match(/\d/) || !spChars.test(pswd)|| pswd.length < 8) {
						if(message != ''){
							message = message + ',<br>';
						}
				    message = message +  `<b>Password should have: </b><ul> <li>Minimum 8 characters</li><li>At least one special character</li><li>At least one uppercase</li><li>At least one lowercase</li><li>At least one number</li></ul>`;

						addError(message, error, $(form).find('input.password'));
						flag = false;
				}

			}
      if($(form).find('.min-max').length > 0){
        $(form).find('.min-max').each(function(index, item){
          let attrName = $(item).attr('name');
          let fieldName = $(item).data('field');
          if (fieldName == '' || fieldName == null || fieldName == undefined) {
            fieldName = attrName;
          }
         let min = ($(item).attr('min') != undefined && $(item).attr('min') != null) ? $(item).attr('min') : '';
         let max = ($(item).attr('max') != undefined && $(item).attr('max') != null) ? $(item).attr('max') : '';
         if(min != ''){
            if($(item).val() < min ){
              if(message != ''){
                message = message + ',<br>';
              }
              message = message +  fieldName.replace(/[\[\]']+/g,'').replace(/_/g, " ")  + ' should be minimum ' + min;
              addError(message, error, item);
              errorfields[attrName] = attrName;
              flag = false;
            }
         }
         if(max != ''){
            if($(item).val() > max ){
              if(message != ''){
                message = message + ',<br>';
              }
              message = message +  fieldName.replace(/[\[\]']+/g,'').replace(/_/g, " ")  + ' should be maximum ' + max;
              addError(message, error, item);
              errorfields[attrName] = attrName;
              flag = false;
            }
         }
        })
      }
      if($(form).find('.dob_validate').length > 0){
        let year = $('.dob_validate').find('.year').val();
        let day = $('.dob_validate').find('.day').val();
        let month = $('.dob_validate').find('.month').val();
        if (day < 10) {
          day = String(0) + String(day);
        }
        if (month < 10) {
          month = String(0) + String(month);
        }
        let dob = day + '/' + month + '/' + year;
        if(!ValidateDOB(dob)){
          if(message != ''){
              message = message + ',<br>';
            }
            message = message +  `You must be at least 18 years old to join PlayOn`;

            addError(message, error, $(form).find('input.password'));
            flag = false;

        }
      }

		}
		if(flag == true){
			if ($(this).attr('type') != 'button') {
        if($(this).parents('form').hasClass('dont-submit')){
          $(this).parents('form').trigger("formnext")
        }
        else{
          $(this).attr('disabled', 'disabled');
          $(this).addClass('disabled');
          $(this).parents('form').submit();
        }
			}
			else{
				$(this).trigger("next")
			}
		}
	});





// Sidebar Dropdown
	$('.u-menu .have-child > a').on('click',function(e){
		e.preventDefault();
		$(this).parent('.have-child').toggleClass('show');
	})

})


// Password

$('.showPwd').on('click', function(){
	let field = $(this).parent('span').prev('input.password');
	if($(field).attr('type') == 'text')
		$(field).attr('type', 'password');
	else
		$(field).attr('type', 'text');
})

// Modal
$('.modal').on('show.bs.modal', function(){
	$('.modal.show').modal('hide')
})
// Popover
$(function () {
  $('[data-toggle="popover"]').popover()
})
// Select2
$(document).ready(function() {
	$('.select2').each(function(index, item){
		$(item).select2({
			'width': '100%',
			'placeholder' : $(item).attr('placeholder')
		});
	})
});
// Image Upload
 function readURL(input, preview, multiple) {
 	    $(preview).html('');
 			if(multiple == true){
 				if (input.files && input.files[0]) {
			   for (i = 0; i <= input.files.length; i++) {
			   	var reader = new FileReader();
            reader.onload = function(e) {
		            $(preview).append($('<img src="' + e.target.result +'">'));
		            $(preview).hide();
		            $(preview).fadeIn(650);
		        }
		        reader.readAsDataURL(input.files[i]);
         }
      	}
 			}

	    if (input.files && input.files[0]) {
	        var reader = new FileReader();
	        reader.onload = function(e) {
	            $(preview).html($('<img src="' + e.target.result +'">'));
	            $(preview).hide();
	            $(preview).fadeIn(650);
	        }
	        reader.readAsDataURL(input.files[0]);
	    }
	}

	$(".imgUpload").change(function() {
			let multiple = false;
			var attr = $(this).attr('multiple');
			if (typeof attr !== 'undefined' && attr !== false) {
				multiple = true;
			}
	    readURL(this, $(this).data('preview'), multiple);
	});


	$(document).ready(function(){
		// ALert On Delete
		$(document).on('click','.delete', function(e){
			let item = $(this);
			e.preventDefault();
			Swal.fire({
			  title: 'Are you sure?',
			  text: "You won't be able to revert this!",
			  icon: 'warning',
			  showCancelButton: true,
			  confirmButtonColor: '#3085d6',
			  cancelButtonColor: '#d33',
			  confirmButtonText: ($(this).data('action') != '' && $(this).data('action') != undefined && $(this).data('action') != null) ? $(this).data('action') : 'Yes, delete it!',
			}).then((result) => {
			  if (result.isConfirmed) {
			  	$(item).parents('form').submit();
			  }
			})
		})
// Header Dropodown
		$('header#masthead .headUser-menu').on('click',function(e){
			e.stopPropagation();
			$(this).find('.dropdown-user').toggleClass('show');
			$('body').addClass('custom-dropdown-open');
		})

		$('body').click( function(){
			if($('body').hasClass('custom-dropdown-open')){
				$('header#masthead .headUser-menu .dropdown-user').removeClass('show');
				$('.custom-dropdown-open').removeClass('show');
			}
		})
	});


	$(document).ready(function() {
      // will first fade out the loading animation
      $("#preloader").fadeOut();


  });



  // General Style For Custom Dropdown



	// Custom Dropdown

	var current_item = $('select.flag_dropdown option:selected').text();
	var current_flag = $('select.flag_dropdown option:selected').data('flag');
	//Create dropdown

	var html = '<div class="select-selected"><img src="' + current_flag +'">' + current_item + '</div><div class="select-hide optionsholder"><input type"text" class="searchdropdown" placeholder="Search Country Name"/>  <div class="select-items ">';

	$('select.flag_dropdown option').each(function(){

	   var val = $(this).attr('value');
	   var txt = $(this).text();
	   var flag = $(this).data('flag');
	   html += '<div><img src="' + flag +'">' + txt + '</div>';

	});

	html += '</div></div>';

	$('.custom-select').append(html);
	$(document).on('click','.select-selected',function(){
	   $(this).toggleClass('select-arrow-active');
	   $('.optionsholder').toggleClass('select-hide');
	   if(!$('.optionsholder').hasClass('select-hide')){
	   		$("body").find('.optionsholder').find('.searchdropdown').trigger('focus').val('');
				$('.select-items div').removeClass('d-none');
	   }
	});

	$(document).on('keyup','.searchdropdown', function(e){
		let val = $(this).val();
		$('.select-items div').removeClass('d-none');
		$('.select-items div').each(function(index, item){
			if (!$(item).text().toLowerCase().includes(val.toLowerCase())) {
				$(this).addClass('d-none');
			}
		})
	})

	$(document).on('click','.select-items div',function(){
	   var selected_val = $(this).text();
	   var selected_html = $(this).html();
	   $('.select-selected').html( selected_html );
	   $('select.flag_dropdown option').each(function(){
	      if( $(this).text() ==  selected_val )
	      {
	         $('select').val($(this).attr('value'));
	      }
	   });

	   $('.select-selected').removeClass('select-arrow-active');
	   $('.optionsholder').addClass('select-hide');
	});

  function AjaxRequest(url,data)
  {
      var res;
      $.ajax({
          url: url,
          data: data,
          async: false,
          error: function() {
          console.log('error');
          },
          dataType: 'json',
          success: function(data) {
          res= data;

          },
          type: 'POST'
          });

      return res;
  }

    function sendMessage(collection_name,sender,message,attachment ,receiver, chat_id )
  {
        defaultFirestore.collection(collection_name).add({
            sender: sender,
            chat_id: chat_id,
            send: true,
            receiver : receiver,
            message: message,
            sendAt: new Date(),
            images: attachment,
        })
            .then(() => {
            //   alert('')
              // getUserMsg(collection_name,sender,message,attachment,receiver );

                    // }
                // alert("Document successfully written!");
            $('.my_message').val('');  
            $(".pip_before").remove();
            $("#before_upload").val('');
            attachment = [];
                // $('#holder').html('');
                // $("#thumbnail").val('');
                // $(".mainAttacmentSet").hide();
            })
            .catch((error) => {
                alert("Error writing document: ", error);
            });
      }

  function getUserMsg(collection_name,sender,message,attachment,receiver )
      {
         var userData;
             $.ajax({
            url: url('/chatMsg'),
            type: "POST",
            data: {collection : collection_name ,
                 sender : sender,
                 message : message,
                 receiver : receiver ,
                 attachment:attachment,
                 _token: '{{csrf_token()}}'
                 },
            async: false,
            datatype: "json",
            success:function(data) {
               userData = data;
            }
        });
        return userData;
  }

 

  function convertUnixTime(unix) {
    let a = new Date(unix * 1000),
        year = a.getFullYear(),
        months = ['January','February','March','April','May','June','July','August','September','October','November','December'],
        month = months[a.getMonth()],
        date = a.getDate(),
        hour = a.getHours(),
        min = a.getMinutes() < 10 ? '0' + a.getMinutes() : a.getMinutes(),
        sec = a.getSeconds() < 10 ? '0' + a.getSeconds() : a.getSeconds();
    return `${month} ${date}, ${year}, ${hour}:${min}:${sec}`;
  }

