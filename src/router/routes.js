import Login from '../views/Login.vue';
import Dashboard from '../views/Dashboard.vue';
import Users from '../views/Users.vue';
import History from '../views/History.vue';
import NewRecord from '../components/log-book/NewRecord.vue';
import EditRecord from '../components/log-book/EditRecord.vue';
import GeneralDetails from '../views/GeneralDetails.vue';
import EmissionPermit from '../views/EmissionPermit.vue';
import Laboratories from '../views/Laboratories.vue';
import AirEmissionSourceControl from '../views/AirEmissionSourceControl.vue';
import SourceControlWater from '../views/SourceControlWater.vue';
import SourceControlWaste from '../views/SourceControlWaste.vue';
import SoilMonitoring from '../views/SoilMonitoring.vue';
import RadiationMonitoring from '../views/RadiationMonitoring.vue';
import AirImpactMonitoring from '../views/AirImpactMonitoring.vue';
import WaterImpactMonitoring from '../views/WaterImpactMonitoring.vue';
import SoilImpactMonitoring from '../views/SoilImpactMonitoring.vue';
import OperationalMonitoring from '../views/OperationalMonitoring.vue';
import SamplingMaps from '../views/SamplingMaps.vue';


export const routes = [
  {
    path: '/',
    redirect: '/dashboard',
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      layout: 'full-screen',
      requiresAuth: false,
      guest: true
    }
  },
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/profile',
    name: 'Profile',
    component: () => import( /* webpackChunkName: "" */ '../views/Profile.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/users',
    name: 'users',
    component: Users,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-user/',
    name: 'NewUser',
    component: () => import('../components/user/NewUser.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-user/',
    name: 'ShowUser',
    component: () => import('../components/user/ShowUser.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-user/',
    name: 'EditUser',
    component: () => import('../components/user/EditUser.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/history',
    name: 'history',
    component: History,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-record',
    name: 'new-record',
    component: NewRecord,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-record',
    name: 'edit-record',
    component: EditRecord,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-record',
    name: 'show-record',
    component: () => import('../components/log-book/ShowRecord.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/generaldetails',
    name: 'generaldetails',
    component: GeneralDetails,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-general-detail',
    name: 'new-general-detail',
    component: () => import( /* webpackChunkName: "" */ '../components/generaldetails/NewGeneralDetail.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-general-detail',
    name: 'show-general-detail',
    component: () => import( /* webpackChunkName: "" */ '../components/generaldetails/ShowGeneralDetail.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-general-detail',
    name: 'edit-general-detail',
    component: () => import( /* webpackChunkName: "" */ '../components/generaldetails/EditGeneralDetail.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/emission-permits',
    name: 'emission-permits',
    component: EmissionPermit,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-emission-permit',
    name: 'new-emission-permit',
    component: () => import( /* webpackChunkName: "" */ '../components/emission-permit/NewEmissionPermit.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-emission-permit',
    name: 'show-emission-permit',
    component: () => import( /* webpackChunkName: "" */ '../components/emission-permit/ShowEmissionPermit.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-emission-permit',
    name: 'edit-emission-permit',
    component: () => import( /* webpackChunkName: "" */ '../components/emission-permit/EditEmissionPermit.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/laboratories',
    name: 'laboratories',
    component: Laboratories,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-laboratory/',
    name: 'new-laboratory',
    component: () => import('../components/laboratory/NewLaboratory.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-laboratory/',
    name: 'show-laboratory',
    component: () => import('../components/laboratory/ShowLaboratory.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-laboratory/',
    name: 'edit-laboratory',
    component: () => import('../components/laboratory/EditLaboratory.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/air-emission-source-control',
    name: 'air-emission-source-control',
    component: AirEmissionSourceControl,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-air-emission-source-control',
    name: 'new-air-emission-source-control',
    component: () => import('../components/air-emission-source-control/NewAirEmissionSourceControl.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-air-emission-source-control',
    name: 'show-air-emission-source-control',
    component: () => import('../components/air-emission-source-control/ShowAirEmissionSourceControl.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-air-emission-source-control',
    name: 'edit-air-emission-source-control',
    component: () => import('../components/air-emission-source-control/EditAirEmissionSourceControl.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/source-control-water',
    name: 'source-control-water',
    component: SourceControlWater,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-source-control-water',
    name: 'new-source-control-water',
    component: () => import('../components/source-control-water/NewSourceControlWater.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-source-control-water',
    name: 'edit-source-control-water',
    component: () => import('../components/source-control-water/EditSourceControlWater.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-source-control-water',
    name: 'show-source-control-water',
    component: () => import('../components/source-control-water/ShowSourceControlWater.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/source-control-waste',
    name: 'source-control-waste',
    component: SourceControlWaste,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-source-control-waste',
    name: 'new-source-control-waste',
    component: () => import('../components/source-control-waste/NewSourceControlWaste.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-source-control-waste',
    name: 'edit-source-control-waste',
    component: () => import('../components/source-control-waste/EditSourceControlWaste.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-source-control-waste',
    name: 'show-source-control-waste',
    component: () => import('../components/source-control-waste/ShowSourceControlWaste.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/soil-monitoring',
    name: 'soil-monitoring',
    component: SoilMonitoring,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-soil-monitoring',
    name: 'new-soil-monitoring',
    component: () => import('../components/soil-monitoring/NewSoilMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-soil-monitoring',
    name: 'edit-soil-monitoring',
    component: () => import('../components/soil-monitoring/EditSoilMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-soil-monitoring',
    name: 'show-soil-monitoring',
    component: () => import('../components/soil-monitoring/ShowSoilMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/radiation-monitoring',
    name: 'radiation-monitoring',
    component: RadiationMonitoring,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-radiation-monitoring',
    name: 'new-radiation-monitoring',
    component: () => import('../components/radiation-monitoring/NewRadiationMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-radiation-monitoring',
    name: 'edit-radiation-monitoring',
    component: () => import('../components/radiation-monitoring/EditRadiationMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-radiation-monitoring',
    name: 'show-radiation-monitoring',
    component: () => import('../components/radiation-monitoring/ShowRadiationMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/air-impact-monitoring',
    name: 'air-impact-monitoring',
    component: AirImpactMonitoring,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-air-impact-monitoring',
    name: 'new-air-impact-monitoring',
    component: () => import('../components/air-impact-monitoring/NewAirImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-air-impact-monitoring',
    name: 'edit-air-impact-monitoring',
    component: () => import('../components/air-impact-monitoring/EditAirImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-air-impact-monitoring',
    name: 'show-air-impact-monitoring',
    component: () => import('../components/air-impact-monitoring/ShowAirImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/water-impact-monitoring',
    name: 'water-impact-monitoring',
    component: WaterImpactMonitoring,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-water-impact-monitoring',
    name: 'new-water-impact-monitoring',
    component: () => import('../components/water-impact-monitoring/NewWaterImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-water-impact-monitoring',
    name: 'edit-water-impact-monitoring',
    component: () => import('../components/water-impact-monitoring/EditWaterImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-water-impact-monitoring',
    name: 'show-water-impact-monitoring',
    component: () => import('../components/water-impact-monitoring/ShowWaterImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/soil-impact-monitoring',
    name: 'soil-impact-monitoring',
    component: SoilImpactMonitoring,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-soil-impact-monitoring',
    name: 'new-soil-impact-monitoring',
    component: () => import('../components/soil-impact-monitoring/NewSoilImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-soil-impact-monitoring',
    name: 'edit-soil-impact-monitoring',
    component: () => import('../components/soil-impact-monitoring/EditSoilImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-soil-impact-monitoring',
    name: 'show-soil-impact-monitoring',
    component: () => import('../components/soil-impact-monitoring/ShowSoilImpactMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },

  {
    path: '/operational-monitoring',
    name: 'operational-monitoring',
    component: OperationalMonitoring,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/new-operational-monitoring', // - настройка
    name: 'new-operational-monitoring',
    component: () => import('../components/operational-monitoring/NewOperationalMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/edit-operational-monitoring', // редактирование настроики
    name: 'edit-operational-monitoring',
    component: () => import('../components/operational-monitoring/EditOperationalMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/show-operational-monitoring', // отчет / результат
    name: 'show-operational-monitoring',
    component: () => import('../components/operational-monitoring/ShowOperationalMonitoring.vue'),
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '/views/sampling-maps',
    name: 'sampling-maps',
    component: SamplingMaps,
    meta: {
      requiresAuth: true
    }
  },
  {
    path: '*',
    meta: {
      layout: 'default',
      auth: false
    },
    component: () => import('../views/Errors.vue'),
    meta: {
      requiresAuth: true
    }
  },
]
