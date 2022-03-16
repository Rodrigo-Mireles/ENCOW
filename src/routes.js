import Inicio from './Principal/Inicio.svelte'
import Error  from './Principal/Error.svelte'
import Nosotros from './Principal/Nosotros.svelte'
import Noticias from './Principal/Noticias.svelte'
import Clientes from './Principal/Clientes.svelte'
import Contacto from './Principal/Contacto.svelte'
import Soluciones from './Principal/Soluciones.svelte'
import Galeria from './Principal/Galeria.svelte'
import Alianzas from './Principal/Alianzas.svelte'

const routes = {
    '/':Inicio, 
    '/nosotros':Nosotros,
    '/noticias':Noticias,
    '/clientes':Clientes,
    '/contacto':Contacto,
    '/soluciones':Soluciones,
    '/galeria':Galeria,
    '/alianzas':Alianzas,
    '*':Error
     
}

export default routes