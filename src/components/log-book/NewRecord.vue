<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small">
          <!-- Form Example -->
          <div class="card-header border-bottom">
            <h6 class="m-0">Новая запись</h6>
          </div>
          <d-card-body>
            <d-list-group flush>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <div class="row">
                        <div class="col-6">
                          <div class="form-group">
                            <label for="sampling-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="samplingDate" class="form-control" name="sampling-date">
                          </div>
                        </div>

                        <div class="col-6">
                          <div class="form-group">
                            <label for="sampling-date">Лаборатория:</label>
                            <v-select :options="laboratoriesList" label="laboratoryName" v-model="laboratoryName" />
                          </div>
                        </div>
                      </div>

                      <h4>3. Мониторинг эмиссий</h4>

                      <!-- air table -->
                      <h5>3.1. Атмосферный воздух</h5>
                      <div class="table mt-2">
                        <table class="meta-table">
                          <thead>
                            <tr>
                              <th class="align-middle" :class="sortedClass('emissionSourceName')"
                                @click="sortBy('emissionSourceName')">Наименование источников выброса (номер источника
                                выброса)</th>
                              <th class="align-middle" :class="sortedClass('polCode')" @click="sortBy('polCode')">Код и Наименование ЗВ
                              </th>
                              <th class="align-middle text-right">Установленный норматив (г/сек; т/год)
                              </th>
                              <th class="align-middle text-right"
                                :class="sortedClass('airEmissionSourcesControlMethod')"
                                @click="sortBy('airEmissionSourcesControlMethod')">Метод контроля
                              </th>
                              <th class="align-middle">Фактический результат мониторинга (г/сек; т/квартал, т/год)                                )</th>
                              <th class="align-middle">Превышение нормативов предельно допустимых выбросов</th>
                              <th class="align-middle">Исполнитель</th>
                              <th class="align-middle"> Мероприятия по устранению нарушения</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(pollutant, index) in sortedItems" :key="index">
                              <td data-label="Наименование источников выброса (номер источника выброса)"
                                class="align-middle">
                                {{ pollutant.emissionSourceName}} ({{ pollutant.emissionSourceNumber}})
                              </td>
                              <td data-label="Код и Наименование ЗВ" class="align-middle">
                                {{ pollutant.polCode }} - {{ pollutant.polName }}
                              </td>
                              <td data-label="Установленный норматив (г/сек; т/год)" class="text-right align-middle">
                                {{ pollutant.limit }}
                              </td>
                              <td data-label="Метод контроля" class="align-middle">
                                <div class="form-check">
                                  <label class="form-check-label">
                                    <input class="form-check-input" type="radio"
                                      v-model="pollutant.airEmissionSourcesControlMethod" value="instrumental">
                                    Инструментальный
                                  </label>
                                </div>
                                <div class="form-check">
                                  <label class="form-check-label">
                                    <input class="form-check-input" type="radio" value="calculated"
                                      v-model="pollutant.airEmissionSourcesControlMethod">
                                    Расчетный
                                  </label>
                                </div>
                              </td>
                              <td data-label="Фактический результат мониторинга (г/сек; т/квартал, т/год)"
                                class="align-middle">
                                <input type="number" class="form-control" v-model="pollutant.actual" />
                              </td>
                              <td data-label="Превышение нормативов предельно допустимых выбросов" class="align-middle">
                                {{(pollutant.limit - pollutant.actual)}}</td>
<td data-label="Превышение нормативов предельно допустимых выбросов" class="align-middle">
                                <div class="form-group">
                            <v-select :options="laboratoriesList" label="laboratoryName" v-model="pollutant.laboratoryName" />
                          </div>
</td>
                              <td data-label="Мероприятия по устранению нарушения" class="align-middle"><textarea
                                  class="form-control" rows="1" v-model="pollutant.actionItem"></textarea></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <!-- water table -->
                      <h5>3.2. Водные ресурсы</h5>
                      <div class="table mt-2">
                        <table class="meta-table table table-stripped table-bordered">
                          <thead>
                            <tr>
                              <th style="width: 20%;" class="align-middle">Наименование источников воздействия
                                (контрольные точки)</th>
                              <th style="width: 20%;" class="align-middle">Наименование загрязняющих веществ</th>
                              <th style="width: 10%;" class="align-middle">Установленный норматив (миллиграмм на
                                дециметр кубический; тонн в
                                год)</th>
                              <th style="width: 10%;" class="align-middle">Фактический результат мониторинга,
                                (миллиграмм на дециметр
                                кубический; тонн в квартал; тонн в год)</th>
                              <th style="width: 20%;" class="align-middle">Соблюдение либо превышение нормативов
                                предельно допустимых сбросов</th>
                              <th style="width: 20%;" class="align-middle">Мероприятия по устранению нарушения</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="waterEmissionSource, index in waterEmissionSourcesControl" :key="index">
                              <td data-label="Наименование источников воздействия (контрольные точки)"
                                class="align-middle">
                                {{ waterEmissionSourceName }}</td>
                              <td data-label="Наименование загрязняющих веществ" class="align-middle">
                                {{ waterEmissionSource.waterLimitPolName }}
                              </td>
                              <td data-label="Установленный норматив (миллиграмм на дециметр кубический; тонн в год)"
                                class="text-right align-middle">
                                {{ waterEmissionSource.waterSourceLimit }}

                              </td>
                              <td
                                data-label="Фактический результат мониторинга, (миллиграмм на дециметр кубический; тонн в квартал; тонн в год)"
                                class="align-middle">
                                <input type="number" class="form-control"
                                  v-model="waterEmissionSource.waterSourceActual" />
                              </td>
                              <td data-label="Соблюдение либо превышение нормативов предельно допустимых сбросов"
                                class="align-middle">
                                соблюдение</td>
                              <td data-label="Мероприятия по устранению нарушения" class="align-middle">
                                <textarea class="form-control" rows="1"
                                  v-model="waterEmissionSource.waterSourceControlMeasure"></textarea>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- END water table -->

                      <!-- waste table -->
                      <h5>3.3. Отходы производства и потребления</h5>
                      <div class="table mt-2">
                        <table class="meta-table table table-stripped table-bordered">
                          <thead>
                            <tr>
                              <th style="width: 20%;" class="align-middle">Наименование места хранения и захоронения
                                отходов (расположение) </th>
                              <th style="width: 20%;" class="align-middle">Виды отходов</th>
                              <th style="width: 10%;" class="align-middle">Норматив эмиссии (тонн в год)</th>
                              <th style="width: 20%;" class="align-middle">Фактические эмиссии (тонн в год)</th>
                              <th style="width: 30%;" class="align-middle">Мероприятия по утилизации/ переработке
                                отходов</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="wasteDisposalSite, index in wasteDisposalSites" :key="index">
                              <td data-label="Наименование места хранения и захоронения отходов">
                                {{ wasteEmissionSourceName }}</td>
                              <td data-label="Виды отходов">
                                {{ wasteDisposalSite.wasteLimitName }}
                              </td>
                              <td data-label="Норматив эмиссии (тонн в год)" class="text-right">
                                {{ wasteDisposalSite.wasteSourceLimit }}
                              </td>
                              <td data-label="Фактические эмиссии (тонн в год)">
                                <input type="number" class="form-control"
                                  v-model.number="wasteDisposalSite.wasteSourceActual" />
                              </td>
                              <td data-label="Мероприятия по утилизации / переработке отходов">
                                <textarea class="form-control" rows="1"
                                  v-model="wasteDisposalSite.wasteSourceActionItem"></textarea>
                              </td>
                            </tr>
                            <tr>
                              <td></td>
                              <td class="text-right">Итог:</td>
                              <td>{{ wasteSourceLimitsoillControlSubTotal }}</td>
                              <td>{{ wasteSourceActualsoillControlSubTotal }}</td>
                              <td></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- END waste table -->

                      <!-- soil pollution table -->
                      <h5>3.4. Мониторинг уровня загрязнения земель</h5>
                      <div class="table mt-2">
                        <table class="meta-table table table-stripped table-bordered">
                          <thead>
                            <tr>
                              <th style="width: 30%;" class="align-middle">Наименование источников воздействия
                                (контрольные точки) </th>
                              <th style="width: 30%;" class="align-middle">Наименование загрязняющих веществ</th>
                              <th style="width: 5%;" class="align-middle">Установленный норматив (мг на кг)</th>
                              <th style="width: 5%;" class="align-middle">Фактический результат мониторинга (мг на кг)
                              </th>
                              <th style="width: 5%;" class="align-middle">Соблюдение либо превышение нормативов
                                предельно допустимых концентраций фоновая концентрация</th>
                              <th style="width: 35%;" class="align-middle">Мероприятия по устранению нарушения</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="soilControlPoint, index in soilControlPoints" :key="index">
                              <td data-label="Наименование источников воздействия" class="align-middle">
                                {{ soilControlPointName }}</td>
                              <td data-label="Наименование ЗВ">
                                {{ soilControlPoint.soilPollutantName }}
                              </td>
                              <td data-label="Установленный норматив (мг / кг)" class="text-right">
                                {{ soilControlPoint.soilLimit }}
                              </td>
                              <td data-label="Фактический результат мониторинга (мг / кг)">
                                <input type="number" class="form-control"
                                  v-model.number="soilControlPoint.soilActual" />
                              </td>
                              <td data-label="Соблюдение либо превышение ПДК фоновая концентрация" class="align-middle">
                                {{ soillControlSubTotal(soilControlPoint) }}</td>
                              <td data-label="Мероприятия по устранению нарушения">
                                <textarea class="form-control" rows="1"
                                  v-model="soilControlPoint.soilControlMeasure"></textarea>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>

                      <!-- END soil pollution table -->

                      <!-- Radiation Limit table -->
                      <h5>3.5. Радиационный мониторинг</h5>
                      <div class="table mt-2">
                        <table class="meta-table table table-stripped table-bordered">
                          <thead>
                            <tr>
                              <th style="width: 30%;" class="align-middle">Наименование источников воздействия </th>
                              <th style="width: 10%;" class="align-middle">Установленный норматив (единица измерения в
                                микрозивертах в час*)</th>
                              <th style="width: 10%;" class="align-middle">Фактический результат мониторинга (единица
                                измерения в микрозивертах в час*)</th>
                              <th style="width: 10%;" class="align-middle">Соблюдение либо превышение нормативов
                                "Санитарно-эпидемиологические требования к обеспечению радиационной безопасности"</th>
                              <th style="width: 30%;" class="align-middle">Мероприятия по устранению нарушения </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="radiationControlPoint, index in radiationControlPoints" :key="index">
                              <td data-label="Наименование источников воздействия" class="align-middle">
                                {{ radiationControlPointName }}</td>
                              <td data-label="Установленный норматив (единица измерения в микрозивертах в час*)"
                                class="text-right align-middle">
                                {{ radiationControlPoint.radiationLimit }}
                              </td>
                              <td
                                data-label="Фактический результат мониторинга (единица измерения в микрозивертах в час*)"
                                class="align-middle">
                                <input type="number" class="form-control"
                                  v-model.number="radiationControlPoint.radiationActual" /></td>
                              <td
                                data-label="Соблюдение либо превышение нормативов Сан-эпид требования к обеспечению радиационной безопасности"
                                class="align-middle">{{ radiationControlSubTotal(radiationControlPoint) }}</td>
                              <td data-label="Мероприятия по устранению нарушения" class="align-middle">
                                <textarea class="form-control" rows="1"
                                  v-model="radiationControlPoint.radiationControlMeasure"></textarea>
                              </td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- END Radiation Limit table -->

                      <h4>4. Мониторинг воздействия на границе санитарно-защитной зоны</h4>

                      <!-- Air Impact Monitoring -->
                      <h5>4.1. Атмосферный воздух</h5>
                      <div class="table mt-2">
                        <table class="meta-table">
                          <thead class="vertical-align: middle;">
                            <tr>
                              <th style="width: 15%;" class="align-middle">
                                <label>Точки отбора проб</label>
                              </th>
                              <th style="width: 30%;" class="align-middle">
                                <label>Наименование загрязняющих веществ</label>
                              </th>
                              <th style="width: 15%;" class="align-middle">
                                <label>Норма ПДК (макс. разовых, мг/м3)</label>
                              </th>
                              <th style="width: 5%;" class="align-middle">
                                <label>Фактическая концентрация</label>
                              </th>
                              <th style="width: 5%;" class="align-middle">
                                <label>Наличие превышения ПДК, кратность</label>
                              </th>
                              <th style="width: 30%;" class="align-middle">
                                <label>Предложения по устранению нарушений и улучшению экологической обстановки</label>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(f,n) in airImpactsLimitsTable" :key="n" class="align-middle">
                              <td data-label="Точки отбора проб">{{ airImpactSamplePoint }}</td>
                              <td data-label="Наименование загрязняющих веществ">
                                {{ airImpactsLimitsTable[n].airPollutant.polCode }}
                                {{ airImpactsLimitsTable[n].airPollutant.polName }}
                              </td>
                              <td data-label="Норма ПДК (макс. разовых, мг/м3)" class="text-right align-middle">
                                {{ airImpactsLimitsTable[n].airPollutionLimit }}
                              </td>
                              <td data-label="Фактическая концентрация" class="align-middle">
                                <input class="form-control" :id="'pollutant-limit'+n"
                                  v-model.number="airImpactsLimitsTable[n].airPollutionActual" type="number"></td>
                              <td data-label="Наличие превышения ПДК, кратность" class="align-middle">
                                <input class="form-control" :id="'pollutant-limit'+n"
                                  v-model.number="airImpactsLimitsTable[n].airPollutionExcess" type="number"></td>
                              <td data-label="Предложения по устранению нарушений и улучшению экологической обстановки"
                                class="align-middle">
                                <textarea class="form-control" rows="1"
                                  v-model="airImpactsLimitsTable[n].airPollutionControlMeasure"></textarea></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- END Air impact monitoring -->

                      <!-- Water Impact Monitoring -->
                      <h5>4.2. Водные ресурсы</h5>
                      <div class="table mt-2">
                        <table class="meta-table">
                          <thead class="vertical-align: middle;">
                            <tr>
                              <th style="width: 20%;" class="align-middle">
                                <label>Точки отбора проб</label>
                              </th>
                              <th style="width: 20%;" class="align-middle">
                                <label>Наименование загрязняющих веществ</label>
                              </th>
                              <th style="width: 20%;" class="align-middle">
                                <label>Норма предельно допустимых концентраций (макс. разовых, мг/м3)</label>
                              </th>
                              <th style="width: 5%;" class="align-middle">
                                <label>Фактическая концентрация</label>
                              </th>
                              <th style="width: 5%;" class="align-middle">
                                <label>Наличие превышения ПДК, кратность</label>
                              </th>
                              <th style="width: 30%;" class="align-middle">
                                <label>Предложения по устранению нарушений и улучшению экологической обстановки</label>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(f,n) in waterImpactsLimitsTable" :key="n">
                              <td data-label="Точки отбора проб" class="align-middle">{{ waterImpactSamplePoint }}</td>
                              <td data-label="Наименование загрязняющих веществ" class="align-middle">
                                {{ waterImpactsLimitsTable[n].waterPollutant.waterPolCode }}
                                {{ waterImpactsLimitsTable[n].waterPollutant.waterPolName }}
                              </td>
                              <td data-label="Норма ПДК (макс. разовых, мг/м3)" class="text-right align-middle">
                                {{ waterImpactsLimitsTable[n].waterPollutionLimit }}
                              </td>
                              <td data-label="Фактическая концентрация" class="align-middle">
                                <input class="form-control" :id="'pollutant-limit'+n"
                                  v-model.number="waterImpactsLimitsTable[n].waterPollutionActual" type="number"></td>
                              <td data-label="Наличие превышения ПДК, кратность" class="align-middle">
                                <input class="form-control" :id="'pollutant-limit'+n"
                                  v-model.number="waterImpactsLimitsTable[n].waterPollutionExcess" type="number"></td>
                              <td data-label="Предложения по устранению нарушений и улучшению экологической обстановки"
                                class="align-middle">
                                <textarea class="form-control" rows="1"
                                  v-model="waterImpactsLimitsTable[n].waterPollutionControlMeasure"></textarea></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- END Water Impact Monitoring -->

                      <!-- Soil Monitoring -->
                      <h5>4.3. Почвенный покров</h5>
                      <div class="table mt-2">
                        <table class="meta-table table table-stripped table-bordered">
                          <thead class="vertical-align: middle;">
                            <tr>
                              <th style="width: 25%;" class="align-middle">
                                <label>Точки отбора проб</label>
                              </th>
                              <th style="width: 25%;" class="align-middle">
                                <label>Наименование загрязняющих веществ</label>
                              </th>
                              <th style="width: 20%;" class="align-middle">
                                <label>Норма ПДК (мг / кг)</label>
                              </th>
                              <th style="width: 5%;" class="align-middle">
                                <label>Фактическая концентрация</label>
                              </th>
                              <th style="width: 5%;" class="align-middle">
                                <label>Наличие превышения ПДК, кратность</label>
                              </th>
                              <th style="width: 20%;" class="align-middle">
                                <label>Предложения по устранению нарушений и улучшению экологической обстановки</label>
                              </th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr v-for="(f,n) in soilImpactsLimitsTable" :key="n">
                              <td data-label="Точки отбора проб" class="align-middle">{{ soilImpactSamplePoint }}</td>
                              <td data-label="Наименование загрязняющих веществ" class="align-middle">
                                {{soilImpactsLimitsTable[n].soilPollutant.soilPolCode}}
                                {{soilImpactsLimitsTable[n].soilPollutant.soilPolName}}
                              </td>
                              <td data-label="Норма ПДК (макс. разовых, мг/м3)" class="text-right align-middle">
                                {{ soilImpactsLimitsTable[n].soilPollutionLimit }}
                              </td>
                              <td data-label="Фактическая концентрация" class="align-middle">
                                <input class="form-control" :id="'pollutant-limit'+n"
                                  v-model.number="soilImpactsLimitsTable[n].soilPollutionActual" type="number"></td>
                              <td data-label="Наличие превышения ПДК, кратность" class="align-middle">
                                <input class="form-control" :id="'pollutant-limit'+n"
                                  v-model.number="soilImpactsLimitsTable[n].soilPollutionExcess" type="number"></td>
                              <td data-label="Предложения по устранению нарушений и улучшению экологической обстановки"
                                class="align-middle">
                                <textarea class="form-control" rows="1"
                                  v-model="soilImpactsLimitsTable[n].soilPollutionControlMeasure"></textarea></td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <!-- END Soil monitoring -->

                      <!-- Описание / комментарий -->
                      <div class="form-group">
                        <label for="description">{{
                          "Комментарий" | localize
                        }}</label>
                        <textarea class="form-control" id="description" v-model="description" rows="3"></textarea>

                        <!-- :class="{
                          invalid:
                            $v.description.$dirty && !$v.description.required,
                        }" -->
                        <!-- <span
                        v-if="$v.description.$dirty && !$v.description.required"
                        class="helper-text invalid"
                        >{{ "Message_EnterDescription" | localize }}</span
                      > -->
                      </div>
                      <!-- END Описание / комментарий -->
                    </d-form>
                  </d-col>
                </d-row>
              </d-list-group-item>
            </d-list-group>
          </d-card-body>
          <div class="card-footer border-top">
            <div class="d-flex">
              <router-link to="/history">Отменить</router-link>
              <button class="btn btn-success ml-auto" type="submit">
                Сохранить
              </button>
            </div>
          </div>
        </div>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import {
  en,
  ru
} from 'vuejs-datepicker/dist/locale';
import {
  mapGetters
} from 'vuex';
import localizeFilter from '@/filters/localize.filter';

let laboratoriesList = [{
    laboratoryId: "0123",
    laboratoryName: "Аналитическая лаборатория ТОО «Лаборатория Атмосфера»"
  },
  {
    laboratoryId: "0143",
    laboratoryName: "ТОО БГП"
  },
];

export default {
  data() {
    return {
      sort: {
        key: '',
        isAsc: false
      },
      // items: [
      //   { id: 1, name: 'taro', age: 20, airEmissionSourcesControlMethod: 'instrumental' },
      //   { id: 2, name: 'jiro', age: 15, airEmissionSourcesControlMethod: 'calculated' },
      //   { id: 3, name: 'saburo', age: 18, airEmissionSourcesControlMethod: 'instrumental' },
      //   { id: 4, name: 'shiro', age: 14, airEmissionSourcesControlMethod: 'calculated' },
      // ],
      samplingDate: new Date(),
      laboratoryName: '',
      airEmissionSourcesControl: [{
        id: 1,
        emissionSourceName: 'Строительные работы',
        airEmissionSourcesControlMethod: 'instrumental',
        laboratoryName: {},
        emissionSourceNumber: '6001',
          polCode: "0123",
          polName: "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)",
          actual: "0.002445",
          limit: "0.00489",
          actionItem: ""
        },
        {
          id: 2,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'calculated',
          laboratoryName: {},
        emissionSourceNumber: '6001',
          polCode: "0143",
          polName: "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)",
          actual: "0.0007685",
          limit: "0.001537",
          actionItem: ""
        },
        {
          id: 3,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'instrumental',
          laboratoryName: {},
        emissionSourceNumber: '6001',
          polCode: "2902",
          polName: "Взвешенные частицы (116)",
          actual: "0.1411605",
          limit: "0.282321",
          actionItem: ""
        },
        {
          id: 4,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'calculated',
          laboratoryName: {},
          emissionSourceNumber: '6001',
          polCode: "2754",
          polName: "Алканы С12-19 (Углеводороды предельные С12-19)",
          actual: "0.00094",
          limit: "0.00047",
          actionItem: ""
        },
        {
          id: 5,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'instrumental',
          laboratoryName: {},
        emissionSourceNumber: '6001',
          polCode: "0337",
          polName: "Углерод оксид (Угарный газ) (584)",
          actual: "0.00000045",
          limit: "0.0000009",
          actionItem: ""
        }
      ],
      waterEmissionSourcesControl: [{
          uid: 1,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот аммонийный",
          waterSourceLimit: "2",
          waterSourceActual: "1",
          waterSourceControlMeasure: ""
        },
        {
          uid: 2,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот нитратный",
          waterSourceLimit: "",
          waterSourceActual: "",
          waterSourceControlMeasure: ""
        },
        {
          uid: 3,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот нитритный",
          waterSourceLimit: "",
          waterSourceActual: "",
          waterSourceControlMeasure: ""
        },
        {
          uid: 4,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Синтетические поверхностно-активные вещества (СПАВ)",
          waterSourceLimit: "",
          waterSourceActual: "",
          waterSourceControlMeasure: ""
        }
      ],
      waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
      wasteDisposalSites: [{
          uid: 1,
          wasteLimitName: "Золошлаки",
          wasteSourceLimit: 838.4088,
          wasteSourceActual: 400.3322,
          quantity: 1,
          wasteSourceActionItem: "",        
        },
        {
          uid: 2,
          wasteLimitName: "Вскрышные породы",
          wasteSourceLimit: 82252700,
          wasteSourceActual: 822527,
          quantity: 1,
          wasteSourceActionItem: "",
        },
        {
          uid: 3,
          wasteLimitName: "Хвосты сульфидной флотации",
          wasteSourceLimit: 1811000,
          wasteSourceActual: 125800,
          quantity: 1,
          wasteSourceActionItem: "",
        },
        {
          uid: 4,
          wasteLimitName: "Углеродный продукт",
          wasteSourceLimit: 59000,
          wasteSourceActual: 28000,
          quantity: 1,
          wasteSourceActionItem: "",
        }
      ],
      wasteEmissionSourceName: "Внешний отвал",
      soilControlPoints: [{
          uid: 1,
          soilControlPointName: "Точка 1",
          soilPollutantName: 'Азот аммонийный',
          soilLimit: 0.25,
          soilActual: 0.025,
          soilControlMeasure: ''
        },
        {
          id: 2,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'Азот нитратный',
          soilLimit: 120,
          soilActual: 50,
          soilControlMeasure: ''
        },
        {
          id: 3,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'Азот нитритный',
          soilLimit: 56,
          soilActual: 32,
          soilControlMeasure: ''
        },
        {
          id: 4,
          soilControlPointName: 'Точка 1',
          soilPollutantName: 'Нефтепродукты',
          soilLimit: 44,
          soilActual: 11,
          soilControlMeasure: ''
        }
      ],
      soilControlPointName: "Точка 1",
      radiationControlPoints: [{
        uid: 1,
        radiationControlPointName: "Граница СЗЗ предприятия №1",
        radiationLimit: 0.25,
        radiationActual: 0.22,
        radiationControlMeasure: ''
      }],
      radiationControlPointName: "Граница СЗЗ предприятия №1",
      airImpactsLimitsTable: [{
          airPollutant: {
            polCode: "0123",
            polName: "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)"
          },
          airPollutionLimit: 0.23,
          airPollutionActual: 0.12,
          airPollutionExcess: '',
          airPollutionControlMeasure: '',
        },
        {
          airPollutant: {
            polCode: "0143",
            polName: "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)"
          },
          airPollutionLimit: 0.0023,
          airPollutionActual: 0.08,
          airPollutionExcess: '',
          airPollutionControlMeasure: '',
        }
      ],
      airImpactSamplePoint: 'Обобщенная граница СЗЗ предприятия №7',
      waterImpactSamplePoint: 'Запруда на ручье Алайгыр ГП5',
      waterImpactsLimitsTable: [{
          waterPollutant: {
            polCode: "0123",
            waterPolName: "Водородный показатель (рН)"
          },
          waterPollutionLimit: 0.23,
          waterPollutionActual: 0.12,
          waterPollutionExcess: '',
          waterPollutionControlMeasure: '',
        },
        {
          waterPollutant: {
            polCode: "0143",
            waterPolName: "Температура"
          },
          waterPollutionLimit: 0.0023,
          waterPollutionActual: 0.12,
          waterPollutionExcess: '',
          waterPollutionControlMeasure: '',
        },
        {
          waterPollutant: {
            polCode: "0143",
            waterPolName: "Азот аммонийный"
          },
          waterPollutionLimit: 0.0023,
          waterPollutionActual: 0.12,
          waterPollutionExcess: '',
          waterPollutionControlMeasure: '',
        },
        {
          waterPollutant: {
            polCode: "0143",
            waterPolName: "Биологическое потребление кислорода (БПК п)"
          },
          waterPollutionLimit: 0.0023,
          waterPollutionActual: 0.12,
          waterPollutionExcess: '',
          waterPollutionControlMeasure: '',
        },
      ],
      soilImpactSamplePoint: 'Обобщенная граница СЗЗ предприятия. Площадка № 1',
      soilImpactsLimitsTable: [{
          soilPollutant: {
            polCode: "0123",
            soilPolName: "Водородный показатель (рН) водной вытяжки"
          },
          soilPollutionLimit: 0.23,
          soilPollutionActual: 0.12,
          soilPollutionExcess: '',
          soilPollutionControlMeasure: '',

        },
        {
          soilPollutant: {
            polCode: "0143",
            soilPolName: "Ванадий (вал)"
          },
          soilPollutionLimit: 0.0023,
          soilPollutionActual: 0.12,
          soilPollutionExcess: '',
          soilPollutionControlMeasure: '',
        },
        {
          soilPollutant: {
            polCode: "0143",
            soilPolName: "Кадмий (вал)"
          },
          soilPollutionLimit: 0.0023,
          soilPollutionActual: 0.12,
          soilPollutionExcess: '',
          soilPollutionControlMeasure: '',
        },
        {
          soilPollutant: {
            polCode: "0143",
            soilPolName: "Марганец (вал)"
          },
          soilPollutionLimit: 0.0023,
          soilPollutionActual: 0.12,
          soilPollutionExcess: '',
          soilPollutionControlMeasure: '',
        },
        {
          soilPollutant: {
            polCode: "0143",
            soilPolName: "Медь (вал)"
          },
          soilPollutionLimit: 0.0023,
          soilPollutionActual: 0.12,
          soilPollutionExcess: '',
          soilPollutionControlMeasure: '',
        },
      ],
      description: '',
      ru: ru,
      en: en,
    };
  },
  methods: {
    sortedClass (key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc' }` : '';
    },
    sortBy (key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    soillControlSubTotal(soilControlPoint) {
      return (soilControlPoint.soilLimit - soilControlPoint.soilActual)
    },
    radiationControlSubTotal(radiationControlPoint) {
      return (radiationControlPoint.radiationLimit - radiationControlPoint.radiationActual)
    },
  },
  computed: {
    sortedItems () {
      const list = this.airEmissionSourcesControl.slice();  // Because the order of data is not rewritten at the time of sorting
      if (!!this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key]
          b = b[this.sort.key]

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
        });
      }
      
      return list;
    },
    laboratoriesList: () => laboratoriesList,
    wasteSourceLimitsoillControlSubTotal() {
      return this.wasteDisposalSites.reduce(
        (acc, item) => acc + (item.wasteSourceLimit * item.quantity),
        0
      );
    },
    wasteSourceActualsoillControlSubTotal() {
      return this.wasteDisposalSites.reduce(
        (acc, item) => acc + (item.wasteSourceActual * item.quantity),
        0
      );
    },
  },
};
</script>

<style lang="scss" scoped>
/* sort */
table {
  th.sorted {
    &.asc::after {
      display: inline-block;
      content: '▼';
    }
    &.desc::after {
      display: inline-block;
      content: '▲';
    }
  }
}
</style>
