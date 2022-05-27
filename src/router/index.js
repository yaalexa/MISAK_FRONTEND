import Vue from 'vue'
import VueRouter from 'vue-router'

import Home from '../views/home/Casa.vue'
//import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/material/Dashboard.vue';
import welcome from '../views/Library.vue';

import Editar from '../views/material/Editar.vue';
import Nuevo from '../views/material/Nuevo.vue';
// componentes para tipo de material


import CrearEditorial from '../views/Editorial/Crear.vue';
import EditarEditorial from '../views/Editorial/Editar';
import MostrarEditorial from '../views/Editorial/Mostrar.vue';

//para usuarios
import Usuarios from '../views/usuarios/usuarios.vue';
import Unuevo from '../views/usuarios/unuevo.vue';
import actualizarusuarios from '../views/usuarios/actualizarUsuario.vue';

//para nivel educativo

import CrearNivelEdicativo from '../views/NivelEducation/Crear.vue';
import EditarNivelEdicativo from '../views/NivelEducation/Editar.vue';
import MostrarNivelEdicativo from '../views/NivelEducation/Mostrar.vue';

import Library from '../views/Library.vue';
//eduard rol
import Rol from '../views/Rol.vue';
import Rol2 from '../views/Rol2.vue';
import Mostrar from '../views/Rol/Mostrar.vue';
import EditarRol from '../views/Rol/EditarRol.vue';
import CrearRol from '../views/Rol/CrearRol.vue';

//para autores
import CrearAutores from '../views/Autores/Crear.vue';
import EditarAutores from '../views/Autores/Editar.vue';
import MostrarAutores from '../views/Autores/Mostrar.vue';

//para tipo material
import CrearTipoMaterial from '../views/TipoMaterial/Crear.vue';
import EditarTipoMaterial from '../views/TipoMaterial/Editar.vue';
import MostrarTipoMaterial from '../views/TipoMaterial/Mostrar.vue';
//para Areas
import CrearAreas from '../views/Areas/Crear.vue';
import EditarAreas from '../views/Areas/Editar.vue';
import MostrarAreas from '../views/Areas/Mostrar.vue';

//para Areas
import mostarUU from '../views/UsuarioU/comunero.vue';
//reportes
import Reportes from '../views/reportes/vista.vue';
import ReportesDescargas from '../views/reportes/Descargas.vue';
import ReportesVisualizacion from '../views/reportes/Visualizacion.vue';

import Bar from '@/components/charts/Bar.vue';
import LineChartGenerator from '@/components/charts/Line.vue';
import Doughnut from '@/components/charts/Doughnut.vue';

import Casa from '../views/Home.vue';

//ver pdf
import Pdf from '../views/UsuarioU/Pdf';
// daniel cruz
import Autormaterial from '../views/autormaterial/Mostrar.vue';
import AsignarAutores from '../views/autormaterial/Nuevo.vue';
// carlos
import Nivelmaterial from '../views/NivelMaterial/Mostrar.vue';
import AsignarMaterial from '../views/NivelMaterial/Nuevo.vue';
import Cultura from '../views/home/Cultura.vue'
import Nosotros from '../views/home/Nosotros.vue'
Vue.use(VueRouter)

const routes = [{
        path: '/usuarios',
        name: '/usuarios',
        component: Usuarios
    },
    {
        path: '/actualizarusuarios/:id',
        name: '/actualizarusuarios',
        component: actualizarusuarios
    },
    {
        path: '/unuevo',
        name: '/unuevo',
        component: Unuevo
    },
    {
        path: '/',
        name: 'Home',
        component: Home
    },
    {
        path: '/welcome',
        name: 'welcome',
        component: welcome
    },
    {
        path: '/Library',
        name: 'Library',
        component: Library
    },
    {
        path: '/Register',
        name: 'Register',
        component: Register
    },
    {
        path: '/dashboard',
        name: 'Dashboard',
        component: Dashboard
    },
    {
        path: '/editar/:id',
        name: 'Editar',
        component: Editar
    },
    {
        path: '/nuevo',
        name: 'Nuevo',
        component: Nuevo
    },
    {
      name: 'CrearEditorial',
      path: '/CrearEdit',
      component: CrearEditorial
    },
    {
    name: 'EditarEditorial',
    path: '/Editar/:id',
    component: EditarEditorial
    },
    {
    name: 'MostrarEditorial',
    path: '/Editorial',
    component: MostrarEditorial
    },
    {
      name: 'CrearNivelEducativo',
      path: '/CrearNivelEducativo',
      component: CrearNivelEdicativo
    },
    {
    name: 'EditarNivelEducativo',
    path: '/Editar/:id',
    component: EditarNivelEdicativo
    },
    {
    name: 'MostrarNivelEducativo',
    path: '/NivelEducativo',
    component: MostrarNivelEdicativo
    },
{
  name: 'Mostrar',
  path: '/mostrar',
  component: Mostrar
},
{
  path: '/editarrol/:id',
  name: 'EditarRol',
  component: EditarRol
},
{
  path: '/crearrol',
  name: 'CrearRol',
  component: CrearRol
},
{
  path: '/rol2',
  name: 'rol2',
  component: Rol2
},
{
  name: 'CrearAutor',
  path: '/CrearAutor',
  component: CrearAutores
},
{
  name: 'EditarAutor',
  path: '/Editar/:id',
  component: EditarAutores
},
{
  name: 'MostrarAutor',
  path: '/Autores',
  component: MostrarAutores
},
{
  name: 'CrearTipoMaterial',
  path: '/CrearTipoMaterial',
  component: CrearTipoMaterial
},
{
name: 'EditarTipoMaterial',
path: '/EditarTipoMaterial/:id',
component: EditarTipoMaterial
},
{
name: 'MostrarTipoMaterial',
path: '/TipoMaterial',
component: MostrarTipoMaterial
},
{
  name: 'CrearAreas',
  path: '/Crear',
  component: CrearAreas
},
{
name: 'EditarAreas',
path: '/Editar/:id',
component: EditarAreas
},
{
name: 'MostrarAreas',
path: '/Areas',
component: MostrarAreas
},
{
  name: 'mostarUU',
  path: '/UsuarioU',
  component: mostarUU
  },
  {
    name: 'VistaReporte',
    path: '/vistaReporte',
    component: Reportes
  },
  {
    name: 'Descargas',
    path: '/Descargas',
    component: ReportesDescargas
  },
  {
    name: 'Visualizacion',
    path: '/Visualizacion',
    component: ReportesVisualizacion
  },
  {
    name: 'Grafica',
    path: '/Grafica',
    component: Bar
  },
  {
    name:'GraficaLinea',
    path: '/GraficaLinea',
    component: LineChartGenerator
  },
  {
    name:'Doughnut',
    path: '/Doughnut',
    component: Doughnut
  },
  {
    name:'Casa',
    path:'/Casa',
    component: Casa
  },
  {
    name: 'Pdf',
    path: '/Pdf/:id,:pr',
    component: Pdf
},
{
  name: 'autormaterial',
  path: '/autormaterial/:id,:name',
  component: Autormaterial
},
{
  name: 'AsignarAutores',
  path: '/AsignarAutores/:id',
  component: AsignarAutores
},
{
  name: 'nivelmaterial',
  path: '/nivelmaterial/:id,:name',
  component: Nivelmaterial
},
{
  name: 'AsignarMaterial',
  path: '/AsignarMaterial/:id',
  component: AsignarMaterial
},
{
  name:'Cultura',
  path:'/Cultura',
  component: Cultura
},
{
  name:'Nosotros',
  path:'/Nosotros',
  component: Nosotros
}

]

const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
})

export default router