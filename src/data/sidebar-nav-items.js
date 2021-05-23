export default function () {
  return [{
    title: 'Главная',
    to: {
      name: 'dashboard',
    },
    htmlBefore: '<i class="material-icons">dashboard</i>',
    htmlAfter: '',
  }, 
  {
    title: 'Пользователи',
    htmlBefore: '<i class="material-icons">person</i>',
    to: {
      name: 'users',
    },
  }, {
    title: 'Журнал',
    htmlBefore: '<i class="material-icons">sticky_note_2</i>',
    to: {
      name: 'history',
    },
  },{
    title: '1. Общие сведения',
    htmlBefore: '<i class="material-icons"> home_work</i>',
    to: {
      name: 'generaldetails',
    }, 
  }, {
    title: '2. Сведения о лаборатории',
    htmlBefore: '<i class="material-icons"> biotech</i>',
    to: {
      name: 'laboratories',
    }, 
  }, {
    title: '3.1. Атмосферный воздух',
    htmlBefore: '<i class="material-icons">fireplace</i>',
    to: {
      name: 'grams-per-second-limits',
    },
  },
  {
    title: '3.2. Водные ресурсы',
    htmlBefore: '<i class="material-icons">water</i>',
    to: {
      name: 'source-control-water',
    },
   },
   {
    title: '3.3. Отходы производства и потребления',
    htmlBefore: '<i class="material-icons">delete</i>',
    to: {
      name: 'source-control-waste',
    },
   },
   {
    title: '3.4. Мониторинг уровня загрязнения земель',
    htmlBefore: '<i class="material-icons">landscape</i>',
    to: {
      name: 'soil-monitoring',
    },
   },
   {
    title: '3.5.Радиационный мониторинг',
    htmlBefore: '<i class="material-icons">warning_amber</i>',
    to: {
      name: 'radiation-monitoring',
    },
   },

   {
    title: '4.1. Атмосферный воздух',
    htmlBefore: '<i class="material-icons">outlined_flag</i>',
    to: {
      name: 'air-impact-monitoring',
    },
   },
   {
    title: '4.2. Водные ресурсы',
    htmlBefore: '<i class="material-icons">water</i>',
    to: {
      name: 'water-impact-monitoring',
    },
   },
   {
    title: '4.3. Почвенный покров',
    htmlBefore: '<i class="material-icons">golf_course</i>',
    to: {
      name: 'soil-impact-monitoring',
    },
   },
 ];
}
