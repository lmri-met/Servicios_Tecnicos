// static/script.js

$(document).ready(function() {
    var contadorDirecciones = 0;
  
    $('#agregar-direccion').click(function() {
      contadorDirecciones++;
      var html = `
        <div class="form-group">
          <label for="direccion${contadorDirecciones}">Dirección ${contadorDirecciones}:</label>
          <input type="text" class="form-control" id="direccion${contadorDirecciones}" name="direccion${contadorDirecciones}">
          <span class="remove-field text-danger" data-index="${contadorDirecciones}">Eliminar</span>
        </div>
      `;
      $('#direcciones-container').append(html);
    });
  
    $('#direcciones-container').on('click', '.remove-field', function() {
      var index = $(this).data('index');
      $(`#direccion${index}`).closest('.form-group').remove();
    });
  });
  