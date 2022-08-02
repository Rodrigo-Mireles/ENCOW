import Inicio from './components/Inicio.svelte'
import Error  from './components/Error.svelte'
import Nosotros from './components/Nosotros.svelte'
import Noticias from './components/Noticias.svelte'
import Clientes from './components/Clientes.svelte'
import Contacto from './components/Contacto.svelte'
import Soluciones from './components/Soluciones.svelte'
import Galeria from './components/Galeria.svelte'
import Alianzas from './components/Alianzas.svelte'
import AutoDiag from './components/Autodiagnostico.svelte'

const routes = {
    '/':Inicio, 
    '/nosotros':Nosotros,
    '/noticias':Noticias,
    '/clientes':Clientes,
    '/contacto':Contacto,
    '/soluciones':Soluciones,
    '/galeria':Galeria,
    '/alianzas':Alianzas,
    '/autodiag':AutoDiag,
    '*':Error
     
}

export default routes