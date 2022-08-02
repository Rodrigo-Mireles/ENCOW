<script>
  import Header from "../components/Header.svelte";
  import Footer from "../components/Footer.svelte";
  let src = '/img/inicio/inicio.jpg'
  let name = 'imgprincipal'
</script>

<Header />

<!-- main -->
<div id="imagen">
  <img {src} alt={name}>
</div>
<div class="container-fluid" />
<!-- /main-->

<Footer />

<style>
  #imagen img {
    width: 100%;
    height: 60%;
  }
</style>
