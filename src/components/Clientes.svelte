<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  let src = '/img/clientes/clientes.jpg'
  let name = 'clientes'
</script>

<Header/>

<!-- <main> -->
<!-- <solucionesa> -->
<div id="clientes" class="container-fluid" style="padding-left: 0;">
  <div class="row">
  <div class="col">
    <clientes> 
      <h2><b>&nbsp;NUESTROS CLIENTES</b></h2>
    </clientes>
  <div class="row">
    <img src={src} alt={name}>
  </div>
  </div>
  </div>
</div>
<!-- </nosotrosa> -->
<!-- </main> -->

<Footer/>