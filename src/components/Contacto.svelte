<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
</script>

<Header/>

<!-- main -->
<form name="formulario-contacto">

  <label for="nombre">Nombre:</label>
  <input type="text" name="nombre" id="nombre" >
  <br />
  <label for="email">Email:</label>

  <input type="email" name="email" id="email" > 
  <br/>
  <label for="mensaje">Mensaje:</label>
  <textarea name= "mensaje" id="mensaje" cols="30" rows="10"></textarea>
  <br />
  <input id="enviarCorreo" type="submit" value="Enviar" >
</form>

<!-- main -->

<Footer/>