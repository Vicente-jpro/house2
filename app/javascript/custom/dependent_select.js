$(document).ready(function() {
  $('.province_select').on('change', function() {
    var province_id = $(this).val();
    var cities_select = $(this).closest('form').find('.city_select');
    
    if (province_id) {
      $.ajax({
        url: '/cities/province',
        type: 'GET',
        data: { id: province_id },
        dataType: 'json',
        success: function(cities) {
          cities_select.empty();
          cities_select.append($('<option>').val('').text('Select a city'));
          
          $.each(cities, function(index, city) {
            cities_select.append($('<option>').val(city.id).text(city.city_name));
          });
        },
        error: function(xhr, status, error) {
          console.error('Error loading cities:', error);
        }
      });
    } else {
      cities_select.empty();
      cities_select.append($('<option>').val('').text('Select a city'));
    }
  });
});
