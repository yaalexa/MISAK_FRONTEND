import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Register from '../views/Register.vue'
import Dashboard from '../views/material/Dashboard.vue';
import welcome from '../views/welcome.vue';

import Editar from '../views/material/Editar.vue';
import Nuevo from '../views/material/Nuevo.vue';
 // componentes para tipo de material


import CrearEditorial from '../views/Editorial/Crear.vue';
import EditarEditorial from '../views/Editorial/Editar';
import MostrarEditorial from '../views/Editorial/Mostrar.vue';

//para usuarios
import Usuarios from'../views/usuarios/usuarios.vue';
import Unuevo from'../views/usuarios/unuevo.vue';
import actualizarusuarios from'../views/usuarios/actualizarUsuario.vue';

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
Vue.use(VueRouter)

const routes = [
  {
    path:'/usuarios',
    name:'/usuarios',
    component: Usuarios
  },
  {
    path:'/actualizarusuarios/:id',
    name:'/actualizarusuarios',
    component: actualizarusuarios
  },
  {
    path:'/unuevo',
    name:'/unuevo',
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
  name: 'MostrarRol',
  path: '/rol',
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

]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router

