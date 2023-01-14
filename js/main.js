
const swiper = new Swiper('.swiper', {
  // Optional parameters
  loop: true,
  slidesPerView: 1,
  spaceBetween: 20,
  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },
  breakpoints: {
    751: {
      slidesPerView: 2,
    }
  }
});

$('.st').on('click', function(){
  $('.st').toggleClass('st_active');
  $('.odin_k').removeClass('odin_k_active')
  $('.two_k').removeClass('two_k_active')
  $('.three_k').removeClass('three_k_kactive')
});

$('.st').on('click', function(){
  $('.st_block').toggleClass('st_block_active');
  $('.odin_k_block').removeClass('odin_k_block_active')
  $('.two_k_block').removeClass('two_k_block_active')
  $('.three_k_block').removeClass('three_k_block_active')
});

$('.odin_k').on('click', function(){
  $('.odin_k').toggleClass('odin_k_active');
  $('.st').removeClass('st_active')
  $('.two_k').removeClass('two_k_active')
  $('.three_k').removeClass('three_k_kactive')
});

$('.odin_k').on('click', function(){
  $('.odin_k_block').toggleClass('odin_k_block_active');
  $('.st_block').removeClass('st_block_active')
  $('.two_k_block').removeClass('two_k_block_active')
  $('.three_k_block').removeClass('three_k_block_active')
});


$('.two_k').on('click', function(){
  $('.two_k').toggleClass('two_k_active');
  $('.st').removeClass('st_active')
  $('.odin_k').removeClass('odin_k_active')
  $('.three_k').removeClass('three_k_kactive')
});

$('.two_k').on('click', function(){
  $('.two_k_block').toggleClass('two_k_block_active');
  $('.st_block').removeClass('st_block_active')
  $('.odin_k_block').removeClass('odin_k_block_active')
  $('.three_k_block').removeClass('three_k_block_active')
});

$('.three_k').on('click', function(){
  $('.three_k').toggleClass('three_k_kactive');
  $('.st').removeClass('st_active')
  $('.odin_k').removeClass('odin_k_active')
  $('.two_k').removeClass('two_k_active')
});

$('.three_k').on('click', function(){
  $('.three_k_block').toggleClass('three_k_block_active');
  $('.st_block').removeClass('st_block_active')
  $('.odin_k_block').removeClass('odin_k_block_active')
    $('.two_k_block').removeClass('two_k_block_active')
});








// var swiper_list = $("[data-slider-id]");
// $(swiper_list).each(function() {
//     let swiper_slider_id = $(this).attr('data-slider-id');
//     var swiper = new Swiper("swiper1", {
//       loop: true,
//       directionvertical'
//       spaceBetween: 20,
//       slidesPerView: 1,
//       pagination: {
//         el: '.swiper-pagination1',
//          clickable: true,
//       },
//     });
// });



let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: 37.23162916129921, lng: -8.628349424799032 },
    zoom: 14,
    styles:[
      {
        "featureType": "administrative",
        "elementType": "all",
        "stylers": [
          {
            "saturation": "-100"
          }
        ]
      },
      {
        "featureType": "administrative.province",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "off"
          }
        ]
      },
      {
        "featureType": "landscape",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": 65
          },
          {
            "visibility": "on"
          }
        ]
      },
      {
        "featureType": "poi",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "lightness": "50"
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road",
        "elementType": "all",
        "stylers": [
          {
            "saturation": "-100"
          }
        ]
      },
      {
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "road.arterial",
        "elementType": "all",
        "stylers": [
          {
            "lightness": "30"
          }
        ]
      },
      {
        "featureType": "road.local",
        "elementType": "all",
        "stylers": [
          {
            "lightness": "40"
          }
        ]
      },
      {
        "featureType": "transit",
        "elementType": "all",
        "stylers": [
          {
            "saturation": -100
          },
          {
            "visibility": "simplified"
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "geometry",
        "stylers": [
          {
            "hue": "#ffff00"
          },
          {
            "lightness": -25
          },
          {
            "saturation": -97
          }
        ]
      },
      {
        "featureType": "water",
        "elementType": "labels",
        "stylers": [
          {
            "lightness": -25
          },
          {
            "saturation": -100
          }
        ]
      }
    ]
  });
}
window.initMap = initMap;
