const app = {

  init() {
    $('form').on('submit', function(e){
      e.preventDefault();
      let input = {
        text: $('textarea').val()
      }
      app.send(input);
    });
  },

  send(input) {
    $.ajax({
      url: '/',
      type: 'POST',
      data: JSON.stringify(input),
      contentType: 'application/json',
      success: (data) => {
        console.log('data------> ', data);
      },
      error(error) {
        console.error('error: ', error)
      }
    })
  },

  fetch() {
    $.ajax({
      url: '/',
      type: 'GET',
      data: {},
      success: (data) => {
        console.log('data: ', data);
      },
      error: (data) => {
        console.error('error: ', error);
      }
    })
  }
}

$(document).ready(function() {
  app.init();
});