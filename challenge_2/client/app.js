const app = {

  init() {
    $('form').on('submit', function(e){
      e.preventDefault();
      let input = {
        text: $('textarea').val()
      }
      app.send(JSON.stringify(input));
    });
  },

  send(input) {
    $.ajax({
      url: '/',
      type: 'POST',
      data: input,
      contentType: 'application/json',
      success: (data) => {
        app.fetch();
      },
      error(error) {
        console.error('error: ', error)
      }
    })
  },

  fetch() {
    $.ajax({
      url: '/input',
      type: 'GET',
      data: {},
      success: (data) => {
        $('#output').html(`${data}`);
      },
      error: (error) => {
        console.error('error: ', error);
      }
    })
  }
}

$(document).ready(() =>
  app.init()
);