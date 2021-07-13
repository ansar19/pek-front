import Vue from 'vue';
import Router from 'vue-router';

import Dashboard from './views/Dashboard.vue';
import Users from './views/Users.vue';
import History from './views/History.vue';
import NewRecord from './components/log-book/NewRecord.vue';
import EditRecord from './components/log-book/EditRecord.vue';
import GeneralDetails from './views/GeneralDetails.vue';
import EmissionPermit from './views/EmissionPermit.vue';
import Laboratories from './views/Laboratories.vue';
import AirEmissionSourceControl from './views/AirEmissionSourceControl.vue';
import SourceControlWater from './views/SourceControlWater.vue';
import SourceControlWaste from './views/SourceControlWaste.vue';
import SoilMonitoring from './views/SoilMonitoring.vue';
import RadiationMonitoring from './views/RadiationMonitoring.vue';
import AirImpactMonitoring from './views/AirImpactMonitoring.vue';
import WaterImpactMonitoring from './views/WaterImpactMonitoring.vue';
import SoilImpactMonitoring from './views/SoilImpactMonitoring.vue';
import OperationalMonitoring from './views/OperationalMonitoring.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  linkActiveClass: 'active',
  linkExactActiveClass: 'exact-active',
  scrollBehavior() {
    return {
      x: 0,
      y: 0
    };
  },
  routes: [{
      path: '/',
      redirect: '/dashboard',
    },
    {
      path: '/dashboard',
      name: 'dashboard',
      component: Dashboard,
    },
    {
      path: '/profile',
      name: 'Profile',
      component: () => import( /* webpackChunkName: "" */ './views/Profile.vue')
    },
    {
      path: '/users',
      name: 'users',
      component: Users,
    },
    {
      path: '/new-user/',
      name: 'NewUser',
      component: () => import('./components/user/NewUser.vue')
    },
    {
      path: '/show-user/',
      name: 'ShowUser',
      component: () => import('./components/user/ShowUser.vue')
    },
    {
      path: '/edit-user/',
      name: 'EditUser',
      component: () => import('./components/user/EditUser.vue')
    },
    {
      path: '/history',
      name: 'history',
      component: History,
    },
    {
      path: '/new-record',
      name: 'new-record',
      component: NewRecord,
    },
    {
      path: '/edit-record',
      name: 'edit-record',
      component: EditRecord,
    },
    {
      path: '/show-record',
      name: 'show-record',
      component: () => import('./components/log-book/ShowRecord.vue')
    },
    {
      path: '/generaldetails',
      name: 'generaldetails',
      component: GeneralDetails
    },
    {
      path: '/new-general-detail',
      name: 'new-general-detail',
      component: () => import( /* webpackChunkName: "" */ './components/generaldetails/NewGeneralDetail.vue')
    },
    {
      path: '/show-general-detail',
      name: 'show-general-detail',
      component: () => import( /* webpackChunkName: "" */ './components/generaldetails/ShowGeneralDetail.vue')
    },
    {
      path: '/edit-general-detail',
      name: 'edit-general-detail',
      component: () => import( /* webpackChunkName: "" */ './components/generaldetails/EditGeneralDetail.vue')
    },

    {
      path: '/emission-permits',
      name: 'emission-permits',
      component: EmissionPermit
    },
    {
      path: '/new-emission-permit',
      name: 'new-emission-permit',
      component: () => import( /* webpackChunkName: "" */ './components/emission-permit/NewEmissionPermit.vue')
    },
    {
      path: '/show-emission-permit',
      name: 'show-emission-permit',
      component: () => import( /* webpackChunkName: "" */ './components/emission-permit/ShowEmissionPermit.vue')
    },
    {
      path: '/edit-emission-permit',
      name: 'edit-emission-permit',
      component: () => import( /* webpackChunkName: "" */ './components/emission-permit/EditEmissionPermit.vue')
    },

    {
      path: '/laboratories',
      name: 'laboratories',
      component: Laboratories,
    },
    {
      path: '/new-laboratory/',
      name: 'new-laboratory',
      component: () => import('./components/laboratory/NewLaboratory.vue')
    },
    {
      path: '/show-laboratory/',
      name: 'show-laboratory',
      component: () => import('./components/laboratory/ShowLaboratory.vue')
    },
    {
      path: '/edit-laboratory/',
      name: 'edit-laboratory',
      component: () => import('./components/laboratory/EditLaboratory.vue')
    },
    {
      path: '/air-emission-source-control',
      name: 'air-emission-source-control',
      component: AirEmissionSourceControl,
    },
    {
      path: '/new-air-emission-source-control',
      name: 'new-air-emission-source-control',
      component: () => import('./components/air-emission-source-control/NewAirEmissionSourceControl.vue')
    },
    {
      path: '/show-air-emission-source-control',
      name: 'show-air-emission-source-control',
      component: () => import('./components/air-emission-source-control/ShowAirEmissionSourceControl.vue')
    },
    {
      path: '/edit-air-emission-source-control',
      name: 'edit-air-emission-source-control',
      component: () => import('./components/air-emission-source-control/EditAirEmissionSourceControl.vue')
    },
    {
      path: '/source-control-water',
      name: 'source-control-water',
      component: SourceControlWater,
    },
    {
      path: '/new-source-control-water',
      name: 'new-source-control-water',
      component: () => import('./components/source-control-water/NewSourceControlWater.vue')
    },
    {
      path: '/edit-source-control-water',
      name: 'edit-source-control-water',
      component: () => import('./components/source-control-water/EditSourceControlWater.vue')
    },
    {
      path: '/show-source-control-water',
      name: 'show-source-control-water',
      component: () => import('./components/source-control-water/ShowSourceControlWater.vue')
    },
    {
      path: '/source-control-waste',
      name: 'source-control-waste',
      component: SourceControlWaste,
    },
    {
      path: '/new-source-control-waste',
      name: 'new-source-control-waste',
      component: () => import('./components/source-control-waste/NewSourceControlWaste.vue')
    },
    {
      path: '/edit-source-control-waste',
      name: 'edit-source-control-waste',
      component: () => import('./components/source-control-waste/EditSourceControlWaste.vue')
    },
    {
      path: '/show-source-control-waste',
      name: 'show-source-control-waste',
      component: () => import('./components/source-control-waste/ShowSourceControlWaste.vue')
    },
    {
      path: '/soil-monitoring',
      name: 'soil-monitoring',
      component: SoilMonitoring,
    },
    {
      path: '/new-soil-monitoring',
      name: 'new-soil-monitoring',
      component: () => import('./components/soil-monitoring/NewSoilMonitoring.vue')
    },
    {
      path: '/edit-soil-monitoring',
      name: 'edit-soil-monitoring',
      component: () => import('./components/soil-monitoring/EditSoilMonitoring.vue')
    },
    {
      path: '/show-soil-monitoring',
      name: 'show-soil-monitoring',
      component: () => import('./components/soil-monitoring/ShowSoilMonitoring.vue')
    },
    {
      path: '/radiation-monitoring',
      name: 'radiation-monitoring',
      component: RadiationMonitoring,
    },
    {
      path: '/new-radiation-monitoring',
      name: 'new-radiation-monitoring',
      component: () => import('./components/radiation-monitoring/NewRadiationMonitoring.vue')
    },
    {
      path: '/edit-radiation-monitoring',
      name: 'edit-radiation-monitoring',
      component: () => import('./components/radiation-monitoring/EditRadiationMonitoring.vue')
    },
    {
      path: '/show-radiation-monitoring',
      name: 'show-radiation-monitoring',
      component: () => import('./components/radiation-monitoring/ShowRadiationMonitoring.vue')
    },

    {
      path: '/air-impact-monitoring',
      name: 'air-impact-monitoring',
      component: AirImpactMonitoring,
    },
    {
      path: '/new-air-impact-monitoring',
      name: 'new-air-impact-monitoring',
      component: () => import('./components/air-impact-monitoring/NewAirImpactMonitoring.vue')
    },
    {
      path: '/edit-air-impact-monitoring',
      name: 'edit-air-impact-monitoring',
      component: () => import('./components/air-impact-monitoring/EditAirImpactMonitoring.vue')
    },
    {
      path: '/show-air-impact-monitoring',
      name: 'show-air-impact-monitoring',
      component: () => import('./components/air-impact-monitoring/ShowAirImpactMonitoring.vue')
    },

    {
      path: '/water-impact-monitoring',
      name: 'water-impact-monitoring',
      component: WaterImpactMonitoring,
    },
    {
      path: '/new-water-impact-monitoring',
      name: 'new-water-impact-monitoring',
      component: () => import('./components/water-impact-monitoring/NewWaterImpactMonitoring.vue')
    },
    {
      path: '/edit-water-impact-monitoring',
      name: 'edit-water-impact-monitoring',
      component: () => import('./components/water-impact-monitoring/EditWaterImpactMonitoring.vue')
    },
    {
      path: '/show-water-impact-monitoring',
      name: 'show-water-impact-monitoring',
      component: () => import('./components/water-impact-monitoring/ShowWaterImpactMonitoring.vue')
    },

    {
      path: '/soil-impact-monitoring',
      name: 'soil-impact-monitoring',
      component: SoilImpactMonitoring,
    },
    {
      path: '/new-soil-impact-monitoring',
      name: 'new-soil-impact-monitoring',
      component: () => import('./components/soil-impact-monitoring/NewSoilImpactMonitoring.vue')
    },
    {
      path: '/edit-soil-impact-monitoring',
      name: 'edit-soil-impact-monitoring',
      component: () => import('./components/soil-impact-monitoring/EditSoilImpactMonitoring.vue')
    },
    {
      path: '/show-soil-impact-monitoring',
      name: 'show-soil-impact-monitoring',
      component: () => import('./components/soil-impact-monitoring/ShowSoilImpactMonitoring.vue')
    },

    {
      path: '/operational-monitoring',
      name: 'operational-monitoring',
      component: OperationalMonitoring,
    },
    {
      path: '/new-operational-monitoring', // - настройка
      name: 'new-operational-monitoring',
      component: () => import('./components/operational-monitoring/NewOperationalMonitoring.vue')
    },
    {
      path: '/edit-operational-monitoring', // редактирование настроики
      name: 'edit-operational-monitoring',
      component: () => import('./components/operational-monitoring/EditOperationalMonitoring.vue')
    },
    {
      path: '/show-operational-monitoring', // отчет / результат
      name: 'show-operational-monitoring',
      component: () => import('./components/operational-monitoring/ShowOperationalMonitoring.vue')
    },
    {
      path: '*',
      meta: {
        layout: 'default',
        auth: false
      },
      component: () => import('./views/Errors.vue')
    },
  ],
});
