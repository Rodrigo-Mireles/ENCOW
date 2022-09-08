<script>
</script>

<!-- main -->
<!-- <form name="formulario-contacto">
  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre" />
  <br />
  <label for="email">Email:</label>

  <input type="email" name="email" id="email" />
  <br />
  <label for="mensaje">Mensaje:</label>
  <textarea name="mensaje" id="mensaje" cols="30" rows="10" />
  <br />
  <input id="enviarCorreo" type="submit" value="Enviar" />
</form> -->
<div class="container">
  <div class="row">
      <div class="col-md-12">
          <div class="well well-sm">
              <form class="form-horizontal" method="post">
                  <fieldset>
                      <legend class="text-center header">Contactanos</legend>

                      <div class="form-group">
                          <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                          <div class="col-md-8">
                              <input id="fname" name="name" type="text" placeholder="Nombre y Apellido" class="form-control">
                          </div>
                      </div>
                     <!--  <div class="form-group">
                          <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-user bigicon"></i></span>
                          <div class="col-md-8">
                              <input id="lname" name="name" type="text" placeholder="Apellidos" class="form-control">
                          </div>
                      </div> -->

                      <div class="form-group">
                          <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-envelope-o bigicon"></i></span>
                          <div class="col-md-8">
                              <input id="email" name="email" type="text" placeholder="Correo" class="form-control">
                          </div>
                      </div>

                      <div class="form-group">
                          <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-phone-square bigicon"></i></span>
                          <div class="col-md-8">
                              <input id="phone" name="phone" type="text" placeholder="Celular" class="form-control">
                          </div>
                      </div>

                      <div class="form-group">
                          <span class="col-md-1 col-md-offset-2 text-center"><i class="fa fa-pencil-square-o bigicon"></i></span>
                          <div class="col-md-8">
                              <textarea class="form-control" id="message" name="message" placeholder="Introduzca su masaje para nosotros aquí. Nos pondremos en contacto con usted dentro de 2 días hábiles." rows="7"></textarea>
                          </div>
                      </div>

                      <div class="form-group">
                          <div class="col-md-12 text-center">
                              <button type="submit" class="btn btn-primary btn-lg">Submit</button>
                          </div>
                      </div>
                  </fieldset>
              </form>
          </div>
      </div>
  </div>
</div>

<!-- main -->
<style>
  .header {
    color: #1e5372d9 ;
    font-size: 27px;
    padding: 10px;
}

.bigicon {
    
    font-size: 35px;
    color: #0a184ed9;
}
</style>
