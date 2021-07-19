<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <div class="card card-small">
          <!-- Form -->
          <div class="card-header border-bottom">
            <h6 class="m-0">Редактировать запись</h6>
          </div>
          <d-card-body>
            <d-list-group flush>
              <d-list-group-item class="p-3">
                <d-row>
                  <d-col>
                    <d-form>
                      <h4>3. Мониторинг эмиссий</h4>
                      <!-- air table -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>3.1. Атмосферный воздух</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="air-emissionSource-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="airEmissionSourceMonitoringDate" class="form-control"
                              name="air-emissionSource-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table">
                              <thead>
                                <tr>
                                  <th :class="sortedClass('emissionSourceName')" @click="sortBy('emissionSourceName')">
                                    Наименование источников выброса (номер
                                    источника
                                    выброса)</th>
                                  <th :class="sortedClass('air_pollutant.polCode')" @click="sortBy('air_pollutant.polCode')">
                                    Код и
                                    Наименование ЗВ
                                  </th>
                                  <th class="text-right">Установленный норматив (г/сек; т/год)
                                  </th>
                                  <th class="text-right"
                                    :class="sortedClass('airEmissionSourcesControlMethod')"
                                    @click="sortBy('airEmissionSourcesControlMethod')">Метод контроля
                                  </th>
                                  <th>Фактический результат мониторинга (г/сек; т/квартал, т/год) )
                                  </th>
                                  <th>Превышение нормативов предельно допустимых выбросов</th>
                                  <th>Исполнитель</th>
                                  <th> Мероприятия по устранению нарушения</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(pollutant, index) in sortedAirEmissionItems" :key="index">
                                  <td data-label="Наименование источников выброса (номер источника выброса)">
                                    {{ pollutant.emissionSourceName}} ({{ pollutant.emissionSourceNumber}})
                                  </td>
                                  <td data-label="Код и Наименование ЗВ">
                                    {{ pollutant.air_pollutant.polCode }} - {{ pollutant.air_pollutant.polName }}
                                  </td>
                                  <td data-label="Установленный норматив (г/сек; т/год)"
                                    class="text-right align-middle">
                                    {{ pollutant.air_limit }}
                                  </td>
                                  <td data-label="Метод контроля">
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
                                  <td data-label="Фактический результат мониторинга (г/сек; т/квартал, т/год)">
                                    <input type="number" class="form-control" v-model="pollutant.air_actual" />
                                  </td>
                                  <td data-label="Превышение нормативов предельно допустимых выбросов">
                                    {{(pollutant.air_limit - pollutant.air_actual)}}</td>
                                  <td data-label="Исполнитель">
                                    <div class="form-group">
                                      <v-select :options="laboratoriesList" label="laboratoryName"
                                        v-model="pollutant.laboratory" />
                                    </div>
                                  </td>
                                  <td data-label="Мероприятия по устранению нарушения"><textarea class="form-control"
                                      rows="1" v-model="pollutant.actionItem"></textarea></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- <pre>{{sortedAirEmissionItems}}</pre> -->
                        </div>
                      </accordion>
                      <!-- END air table -->

                      <!-- water table -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>3.2. Водные ресурсы</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="water-emissionSource-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="waterEmissionSourceMonitoringDate" class="form-control"
                              name="water-emissionSource-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table table table-stripped table-bordered">
                              <thead>
                                <tr>
                                  <th style="width: 20%;">Наименование источников воздействия
                                    (контрольные точки)</th>
                                  <th style="width: 20%;">Наименование загрязняющих веществ</th>
                                  <th style="width: 10%;">Установленный норматив (мг/дм3; тонн в
                                    год)</th>
                                  <th style="width: 10%;">Фактический результат мониторинга,
                                    (мг/дм3; тонн в квартал; тонн в год)</th>
                                  <th style="width: 10%;" class="align-middle text-right"
                                    :class="sortedClass('waterSourcesControlMethod')"
                                    @click="sortBy('waterSourcesControlMethod')">Метод контроля
                                  </th>
                                  <th style="width: 10%;">Соблюдение либо превышение нормативов
                                    ПДС</th>
                                  <th style="width: 20%;">Исполнитель</th>
                                  <th style="width: 20%;">Мероприятия по устранению нарушения</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(waterEmissionSource, index) in sortedWaterItems" :key="index">
                                  <td data-label="Наименование источников воздействия (контрольные точки)">
                                    {{ waterEmissionSource.waterEmissionSourceName }}</td>
                                  <td data-label="Наименование загрязняющих веществ">
                                    {{ waterEmissionSource.waterLimitPolName }}
                                  </td>
                                  <td data-label="Установленный норматив (мг/дм3; тонн в год)"
                                    class="text-right align-middle">
                                    {{ waterEmissionSource.waterSourceLimit }}
                                  </td>
                                  <td
                                    data-label="Фактический результат мониторинга, (мг/дм3; тонн в квартал; тонн в год)">
                                    <input type="number" class="form-control"
                                      v-model="waterEmissionSource.waterSourceActual" />
                                  </td>
                                  <td data-label="Метод контроля">
                                    <div class="form-check">
                                      <label class="form-check-label">
                                        <input class="form-check-input" type="radio"
                                          v-model="waterEmissionSource.waterSourcesControlMethod" value="instrumental">
                                        Инструментальный
                                      </label>
                                    </div>
                                    <div class="form-check">
                                      <label class="form-check-label">
                                        <input class="form-check-input" type="radio" value="calculated"
                                          v-model="waterEmissionSource.waterSourcesControlMethod">
                                        Расчетный
                                      </label>
                                    </div>
                                  </td>
                                  <td data-label="Соблюдение либо превышение нормативов ПДС">
                                    соблюдение</td>
                                  <td data-label="Исполнитель">
                                    <div class="form-group">
                                      <v-select :options="laboratoriesList" label="laboratoryName"
                                        v-model="waterEmissionSource.laboratory" />
                                    </div>
                                  </td>
                                  <td data-label="Мероприятия по устранению нарушения">
                                    <textarea class="form-control" rows="1"
                                      v-model="waterEmissionSource.waterSourceControlMeasure"></textarea>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                          <!-- <pre>{{sortedWaterItems}}</pre> -->
                        </div>
                      </accordion>
                      <!-- END water table -->

                      <!-- waste table -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>3.3. Отходы производства и потребления</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="waste-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="wasteMonitoringDate" class="form-control"
                              name="waste-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table table table-stripped table-bordered">
                              <thead>
                                <tr>
                                  <th style="width: 20%;">Наименование места хранения и захоронения
                                    отходов (расположение) </th>
                                  <th style="width: 20%;">Виды отходов</th>
                                  <th style="width: 10%;">Норматив эмиссии (тонн в год)</th>
                                  <th style="width: 20%;">Фактические эмиссии (тонн в год)</th>
                                  <th style="width: 30%;">Мероприятия по утилизации/ переработке
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
                        </div>
                      </accordion>
                      <!-- END waste table -->

                      <!-- soil pollution table -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>3.4. Мониторинг уровня загрязнения земель</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="soil-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="soilMonitoringDate" class="form-control"
                              name="soil-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table table table-stripped table-bordered">
                              <thead>
                                <tr>
                                  <th style="width: 30%;">Наименование источников воздействия
                                    (контрольные точки) </th>
                                  <th style="width: 30%;">Наименование загрязняющих веществ</th>
                                  <th style="width: 5%;">Установленный норматив (мг на кг)</th>
                                  <th style="width: 5%;">Фактический результат мониторинга (мг на
                                    кг)
                                  </th>
                                  <th style="width: 5%;">Соблюдение либо превышение нормативов
                                    предельно допустимых концентраций фоновая концентрация</th>
                                  <th style="width: 35%;">Мероприятия по устранению нарушения</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="soilControlPoint, index in soilControlPoints" :key="index">
                                  <td data-label="Наименование источников воздействия">
                                    {{ soilControlPointName }}</td>
                                  <td data-label="Наименование ЗВ">
                                    {{ soilControlPoint.soilPollutantName }}
                                  </td>
                                  <td data-label="Установленный норматив (мг / кг)" class="text-right align-middle">
                                    {{ soilControlPoint.soilLimit }}
                                  </td>
                                  <td data-label="Фактический результат мониторинга (мг / кг)">
                                    <input type="number" class="form-control"
                                      v-model.number="soilControlPoint.soilActual" />
                                  </td>
                                  <td data-label="Соблюдение либо превышение ПДК фоновая концентрация">
                                    {{ soillControlSubTotal(soilControlPoint) }}</td>
                                  <td data-label="Мероприятия по устранению нарушения">
                                    <textarea class="form-control" rows="1"
                                      v-model="soilControlPoint.soilControlMeasure"></textarea>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </accordion>
                      <!-- END soil pollution table -->

                      <!-- Radiation Limit table -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>3.5. Радиационный мониторинг</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="radiation-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="radiationMonitoringDate" class="form-control"
                              name="radiation-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table table table-stripped table-bordered">
                              <thead>
                                <tr>
                                  <th style="width: 30%;">Наименование источников воздействия </th>
                                  <th style="width: 10%;">Установленный норматив (единица измерения
                                    в
                                    микрозивертах в час*)</th>
                                  <th style="width: 10%;">Фактический результат мониторинга
                                    (единица
                                    измерения в микрозивертах в час*)</th>
                                  <th style="width: 10%;">Соблюдение либо превышение нормативов
                                    "Санитарно-эпидемиологические требования к обеспечению радиационной безопасности"
                                  </th>
                                  <th style="width: 30%;">Мероприятия по устранению нарушения </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="radiationControlPoint, index in radiationControlPoints" :key="index">
                                  <td data-label="Наименование источников воздействия">
                                    {{ radiationControlPointName }}</td>
                                  <td data-label="Установленный норматив (единица измерения в микрозивертах в час*)"
                                    class="text-right align-middle">
                                    {{ radiationControlPoint.radiationLimit }}
                                  </td>
                                  <td
                                    data-label="Фактический результат мониторинга (единица измерения в микрозивертах в час*)">
                                    <input type="number" class="form-control"
                                      v-model.number="radiationControlPoint.radiationActual" /></td>
                                  <td
                                    data-label="Соблюдение либо превышение нормативов Сан-эпид требования к обеспечению радиационной безопасности">
                                    {{ radiationControlSubTotal(radiationControlPoint) }}</td>
                                  <td data-label="Мероприятия по устранению нарушения">
                                    <textarea class="form-control" rows="1"
                                      v-model="radiationControlPoint.radiationControlMeasure"></textarea>
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </accordion>
                      <!-- END Radiation Limit table -->

                      <h4>4. Мониторинг воздействия на границе санитарно-защитной зоны</h4>
                      <!-- Air Impact Monitoring -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>4.1. Атмосферный воздух</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="air-impact-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="airImpactMonitoringDate" class="form-control"
                              name="air-impact-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table">
                              <thead class="vertical-align: middle;">
                                <tr>
                                  <th style="width: 15%;">
                                    <label>Точки отбора проб</label>
                                  </th>
                                  <th style="width: 30%;">
                                    <label>Наименование загрязняющих веществ</label>
                                  </th>
                                  <th style="width: 15%;">
                                    <label>Норма ПДК (макс. разовых, мг/м3)</label>
                                  </th>
                                  <th style="width: 5%;">
                                    <label>Фактическая концентрация</label>
                                  </th>
                                  <th style="width: 5%;">
                                    <label>Наличие превышения ПДК, кратность</label>
                                  </th>
                                  <th style="width: 30%;">
                                    <label>Предложения по устранению нарушений и улучшению экологической
                                      обстановки</label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(f,n) in airImpactsLimitsTable" :key="n">
                                  <td data-label="Точки отбора проб">{{ airImpactSamplePoint }}</td>
                                  <td data-label="Наименование загрязняющих веществ">
                                    {{ airImpactsLimitsTable[n].air_pollutant.polCode }}
                                    {{ airImpactsLimitsTable[n].air_pollutant.polName }}
                                  </td>
                                  <td data-label="Норма ПДК (макс. разовых, мг/м3)" class="text-right align-middle">
                                    {{ airImpactsLimitsTable[n].airPollutionLimit }}
                                  </td>
                                  <td data-label="Фактическая концентрация">
                                    <input class="form-control" :id="'pollutant-limit'+n"
                                      v-model.number="airImpactsLimitsTable[n].airPollutionActual" type="number"></td>
                                  <td data-label="Наличие превышения ПДК, кратность">
                                    <input class="form-control" :id="'pollutant-limit'+n"
                                      v-model.number="airImpactsLimitsTable[n].airPollutionExcess" type="number"></td>
                                  <td
                                    data-label="Предложения по устранению нарушений и улучшению экологической обстановки">
                                    <textarea class="form-control" rows="1"
                                      v-model="airImpactsLimitsTable[n].airPollutionControlMeasure"></textarea></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </accordion>
                      <!-- END Air impact monitoring -->

                      <!-- Water Impact Monitoring -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>4.2. Водные ресурсы</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="water-impact-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="waterImpactMonitoringDate" class="form-control"
                              name="water-impact-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table">
                              <thead class="vertical-align: middle;">
                                <tr>
                                  <th style="width: 20%;">
                                    <label>Точки отбора проб</label>
                                  </th>
                                  <th style="width: 20%;">
                                    <label>Наименование загрязняющих веществ</label>
                                  </th>
                                  <th style="width: 20%;">
                                    <label>Норма предельно допустимых концентраций (макс. разовых, мг/м3)</label>
                                  </th>
                                  <th style="width: 5%;">
                                    <label>Фактическая концентрация</label>
                                  </th>
                                  <th style="width: 5%;">
                                    <label>Наличие превышения ПДК, кратность</label>
                                  </th>
                                  <th style="width: 30%;">
                                    <label>Предложения по устранению нарушений и улучшению экологической
                                      обстановки</label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(f,n) in waterImpactsLimitsTable" :key="n">
                                  <td data-label="Точки отбора проб">{{ waterImpactSamplePoint }}
                                  </td>
                                  <td data-label="Наименование загрязняющих веществ">
                                    {{ waterImpactsLimitsTable[n].waterPollutant.waterPolCode }}
                                    {{ waterImpactsLimitsTable[n].waterPollutant.waterPolName }}
                                  </td>
                                  <td data-label="Норма ПДК (макс. разовых, мг/м3)" class="text-right align-middle">
                                    {{ waterImpactsLimitsTable[n].waterPollutionLimit }}
                                  </td>
                                  <td data-label="Фактическая концентрация">
                                    <input class="form-control" :id="'pollutant-limit'+n"
                                      v-model.number="waterImpactsLimitsTable[n].waterPollutionActual" type="number">
                                  </td>
                                  <td data-label="Наличие превышения ПДК, кратность">
                                    <input class="form-control" :id="'pollutant-limit'+n"
                                      v-model.number="waterImpactsLimitsTable[n].waterPollutionExcess" type="number">
                                  </td>
                                  <td
                                    data-label="Предложения по устранению нарушений и улучшению экологической обстановки">
                                    <textarea class="form-control" rows="1"
                                      v-model="waterImpactsLimitsTable[n].waterPollutionControlMeasure"></textarea></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </accordion>
                      <!-- END Water Impact Monitoring -->

                      <!-- Soil Monitoring -->
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>4.3. Почвенный покров</span>
                        </span>
                        <div slot="content">
                          <div class="form-group">
                            <label for="soil-impact-monitoring-date">Дата проведения мониторинга:</label>
                            <input type="date" v-model="soilImpactMonitoringDate" class="form-control"
                              name="soil-impact-monitoring-date">
                          </div>
                          <div class="table mt-2">
                            <table class="meta-table table table-stripped table-bordered">
                              <thead class="vertical-align: middle;">
                                <tr>
                                  <th style="width: 25%;">
                                    <label>Точки отбора проб</label>
                                  </th>
                                  <th style="width: 25%;">
                                    <label>Наименование загрязняющих веществ</label>
                                  </th>
                                  <th style="width: 20%;">
                                    <label>Норма ПДК (мг / кг)</label>
                                  </th>
                                  <th style="width: 5%;">
                                    <label>Фактическая концентрация</label>
                                  </th>
                                  <th style="width: 5%;">
                                    <label>Наличие превышения ПДК, кратность</label>
                                  </th>
                                  <th style="width: 20%;">
                                    <label>Предложения по устранению нарушений и улучшению экологической
                                      обстановки</label>
                                  </th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="(f,n) in soilImpactsLimitsTable" :key="n">
                                  <td data-label="Точки отбора проб">{{ soilImpactSamplePoint }}
                                  </td>
                                  <td data-label="Наименование загрязняющих веществ">
                                    {{soilImpactsLimitsTable[n].soilPollutant.soilPolCode}}
                                    {{soilImpactsLimitsTable[n].soilPollutant.soilPolName}}
                                  </td>
                                  <td data-label="Норма ПДК (макс. разовых, мг/м3)" class="text-right align-middle">
                                    {{ soilImpactsLimitsTable[n].soilPollutionLimit }}
                                  </td>
                                  <td data-label="Фактическая концентрация">
                                    <input class="form-control" :id="'pollutant-limit'+n"
                                      v-model.number="soilImpactsLimitsTable[n].soilPollutionActual" type="number"></td>
                                  <td data-label="Наличие превышения ПДК, кратность">
                                    <input class="form-control" :id="'pollutant-limit'+n"
                                      v-model.number="soilImpactsLimitsTable[n].soilPollutionExcess" type="number"></td>
                                  <td
                                    data-label="Предложения по устранению нарушений и улучшению экологической обстановки">
                                    <textarea class="form-control" rows="1"
                                      v-model="soilImpactsLimitsTable[n].soilPollutionControlMeasure"></textarea></td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </accordion>
                      <!-- END Soil monitoring -->

                      <!-- Operational monitoring -->
                      <h4>Операционный мониторинг</h4>
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>Операционный контроль</span>
                        </span>
                        <div slot="content">
                          <div class="table mt-2">
                            <table class="meta-table table table-stripped table-bordered">
                              <thead>
                                <tr>
                                  <th style="width: 20%;">Источник</th>
                                  <th style="width: 20%;">Контролируемые процессы и параметры, ед. измерения</th>
                                  <th style="width: 20%;">Количество по проекту (ПДВ, ОВОС, ПДС)
                                    (год)</th>
                                  <th style="width: 20%;">Количество по факту на месяц</th>
                                  <th style="width: 20%;">Остаток</th>
                                </tr>
                              </thead>
                              <tbody>
                                <tr v-for="oml, index in operationalMonitoringList" :key="index">
                                  <td data-label="Источник">{{oml.source}}</td>
                                  <td data-label="Контролируемые процессы и параметры, ед. измерения">
                                    {{oml.controlledProcessParameter.controlledProcessParameterName}},
                                    {{oml.unitOfMeasurement.uomName}}
                                  </td>
                                  <td data-label="Количество по проекту">
                                    {{oml.limitQty}}
                                  </td>
                                  <td data-label="Количество по факту на месяц">
                                    <input type="number" class="form-control" v-model="oml.actualQty" />
                                  </td>
                                  <td data-label="Остаток">
                                    {{ residualSubtotal(oml.limitQty, oml.actualQty) }}
                                  </td>
                                </tr>
                              </tbody>
                            </table>
                          </div>
                        </div>
                      </accordion>
                      <!-- END Operational monitoring -->

                      <!-- Internal control -->
                      <h4>Внутренние проверки</h4>
                      <accordion :init-open="false">
                        <span slot="toggle-text">
                          <span>Внутренние проверки</span>
                        </span>
                        <div slot="content">
                          <h4>Инспекция</h4>
                          <div class="form-group">
                            <label for="inspected-area">Участок проверки</label>
                            <input type="text" v-model="inspected_area" class="form-control">
                          </div>

                          <div class="form-group">
                            <label for="inspection-date">Дата проведения:</label>
                            <input type="date" v-model="inspection_date" class="form-control"
                              name="inspection-date">
                          </div>

                          <table class="meta-table table-stripped table-bordered">
                            <thead>
                              <tr>
                                <th style="width: 5;">Категория</th>
                                <th style="width: 25%;">Описание</th>
                                <th style="width: 35%;">Ответы
                                <th style="width: 35;">Комментарий</th>
                              </tr>
                            </thead>
                            <tbody>
                              <tr v-for="(inspectionResult, index) in inspection_results" :key="index">
                                <td data-label="Категория"> {{inspectionResult.question.question_category_name}}</td>
                                <td data-label="Описание">{{ inspectionResult.question.question_title }}</td>
                                <td data-label="Ответы">
                                  <v-select :options="response_options" label="response_title"
                                    :value="inspectionResult.response"
                                    @input="response => updateInspectionResult(inspectionResult, response)" />
                                </td>
                                <td data-label="Комментарий"> <textarea class="form-control"
                                    v-model="inspectionResult.comment"></textarea></td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </accordion>
                      <!-- END Internal control -->

                      <!-- Описание / комментарий -->
                      <div class="form-group">
                        <label for="description">{{
                          "Выводы" | localize
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
import accordion from '@/components/common/Accordion.vue'
const response_options = [{
    response_title: "Не применимо",
    response_answer: "not_applicable"
  },
  {
    response_title: "Соответствует",
    response_answer: "compliance"
  },
  {
    response_title: "Не соотвествует",
    response_answer: "non_compliance"
  }
];

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
  components: {
    accordion
  },
  props: ['initOpen'],
  data() {
    return {
      sort: {
        key: '',
        isAsc: false
      },
      airEmissionSourceMonitoringDate: new Date(),
      airEmissionSourcesControl: [{
          id: 1,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'instrumental',
          laboratory: {},
          emissionSourceNumber: '6001',
          air_pollutant: {
            polCode: "0123",
            polName: "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)",
          },
          air_actual: 0.002445,
          air_limit: 0.00489,
          actionItem: ""
        },
        {
          id: 2,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'calculated',
          laboratory: {},
          emissionSourceNumber: '6001',
          air_pollutant: {
            polCode: "0143",
            polName: "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)",
          },
          air_actual: 0.0007685,
          air_limit: 0.001537,
          actionItem: ""
        },
        {
          id: 3,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'calculated',
          laboratory: {},
          emissionSourceNumber: '6001',
          air_pollutant: {
            polCode: "2902",
          polName: "Взвешенные частицы (116)",
          },
          air_actual: 0.1411605,
          air_limit: 0.282321,
          actionItem: ""
        },
        {
          id: 4,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'calculated',
          laboratory: {},
          emissionSourceNumber: '6001',
          air_pollutant: {
            polCode: "2754",
            polName: "Алканы С12-19 (Углеводороды предельные С12-19)",
          },
          air_actual: 0.00094,
          air_limit: 0.00047,
          actionItem: ""
        },
        {
          id: 5,
          emissionSourceName: 'Строительные работы',
          airEmissionSourcesControlMethod: 'instrumental',
          laboratory: {},
          emissionSourceNumber: '6001',
          air_pollutant: {
            polCode: "0337",
            polName: "Углерод оксид (Угарный газ) (584)",
          },
          air_actual: 0.00000045,
          air_limit: 0.0000009,
          actionItem: ""
        }
      ],
      waterEmissionSourceMonitoringDate: new Date(),
      waterEmissionSourcesControl: [{
          uid: 1,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот аммонийный",
          waterSourceLimit: 28,
          waterSourceActual: 1,
          waterSourcesControlMethod: 'instrumental',
          laboratory: {},
          waterSourceControlMeasure: ""
        },
        {
          uid: 2,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот нитратный",
          waterSourceLimit: 22,
          waterSourceActual: "",
          waterSourcesControlMethod: 'instrumental',
          laboratory: {},
          waterSourceControlMeasure: ""
        },
        {
          uid: 3,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Азот нитритный",
          waterSourceLimit: 32,
          waterSourceActual: "",
          waterSourcesControlMethod: 'instrumental',
          laboratory: {},
          waterSourceControlMeasure: ""
        },
        {
          uid: 4,
          waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
          waterLimitPolName: "Синтетические поверхностно-активные вещества (СПАВ)",
          waterSourceLimit: 35,
          waterSourceActual: "",
          waterSourcesControlMethod: 'calculated',
          laboratory: {},
          waterSourceControlMeasure: ""
        }
      ],
      waterEmissionSourceName: "выпуск ВП 10 (х/б сточные воды до очистных сооружений)",
      wasteMonitoringDate: new Date(),
      wasteEmissionSourceName: "Внешний отвал",
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
      soilControlPointName: "Точка 1",
      soilMonitoringDate: new Date(),
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
      radiationControlPointName: "Граница СЗЗ предприятия №1",
      radiationMonitoringDate: new Date(),
      radiationControlPoints: [{
        uid: 1,
        radiationControlPointName: "Граница СЗЗ предприятия №1",
        radiationLimit: 0.25,
        radiationActual: 0.22,
        radiationControlMeasure: ''
      }],
      airImpactSamplePoint: 'Обобщенная граница СЗЗ предприятия №7',
      airImpactMonitoringDate: new Date(),
      airImpactsLimitsTable: [{
          air_pollutant: {
            polCode: "0123",
            polName: "Железо (II, III) оксиды (диЖелезо триоксид, Железа оксид) /в пересчете на (274)"
          },
          airPollutionLimit: 0.23,
          airPollutionActual: 0.12,
          airPollutionExcess: '',
          airPollutionControlMeasure: '',
        },
        {
          air_pollutant: {
            polCode: "0143",
            polName: "Марганец и его соединения /в пересчете на марганца (IV) оксид/ (327)"
          },
          airPollutionLimit: 0.0023,
          airPollutionActual: 0.08,
          airPollutionExcess: '',
          airPollutionControlMeasure: '',
        }
      ],
      waterImpactSamplePoint: 'Запруда на ручье Алайгыр ГП5',
      waterImpactMonitoringDate: new Date(),
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
      soilImpactMonitoringDate: new Date(),
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
      operationalMonitoringList: [{
        "id": 1,
        "source": "0001 — Дымовая труба печи ЭЛОУ-АВТ",
        "controlledProcessParameter": {
          "controlledProcessParameterName": "Расход",
          "controlledProcessParameter": "consumption"
        },
        "unitOfMeasurement": {
          "uomName": "т/год",
          "controlledProcessParameter": "tperyear"
        },
        "limitQty": "456",
        actualQty: 0,
        "responsible": {
          "userId": "001",
          "userFullName": "Иванов Иван Иванович",
          "poistion": "Начальник ДУО"
        }
      }, {
        "id": 2,
        "source": "0001 — Дымовая труба печи ЭЛОУ-АВТ",
        "controlledProcessParameter": {
          "controlledProcessParameterName": "Производительность",
          "controlledProcessParameter": "productivity"
        },
        "unitOfMeasurement": {
          "uomName": "час/год",
          "controlledProcessParameter": "hour_year"
        },
        "limitQty": "8000",
        actualQty: 0,
        "responsible": {
          "userId": "001",
          "userFullName": "Иванов Иван Иванович",
          "poistion": "Начальник ДУО"
        }
      }],
      inspected_area: '',
      inspection_date: new Date(),
      inspection_results: [{
          uid: 1,
          question: {
            question_title: 'Отсутствуют следы протечек, проливов, разливов?',
            question_category: 'spill',
            question_category_name: 'Разливы, проливы, утечки',
          },
          response: {},
          comment: ''
        },
        {
          uid: 2,
          question: {
            question_title: 'Маркировка контейнеров в наличии и не повреждена',
            question_category: 'waste',
            question_category_name: 'Отходы',
          },
          response: {},
          comment: ''
        },
        {
          uid: 3,
          question: {
            question_title: 'Контейнеры для отходов в хорошем состоянии и не повреждены?',
            question_category: 'waste',
            question_category_name: 'Отходы',
          },
          response: {},
          comment: ''
        },
        {
          uid: 4,
          question: {
            question_title: 'Наблюдается черный дым от установок / оборудования?',
            question_category: 'air',
            question_category_name: 'Воздух',
          },
          response: {},
          comment: ''
        }
      ],
      description: '',
      ru: ru,
      en: en,
    };
  },
  methods: {
    sortedClass(key) {
      return this.sort.key === key ? `sorted ${this.sort.isAsc ? 'asc' : 'desc' }` : '';
    },
    sortBy(key) {
      this.sort.isAsc = this.sort.key === key ? !this.sort.isAsc : false;
      this.sort.key = key;
    },
    soillControlSubTotal(soilControlPoint) {
      return (soilControlPoint.soilLimit - soilControlPoint.soilActual)
    },
    radiationControlSubTotal(radiationControlPoint) {
      return (radiationControlPoint.radiationLimit - radiationControlPoint.radiationActual)
    },
    residualSubtotal(limitQty, actualQty) {
      return limitQty - actualQty;
    },
    updateInspectionResult(inspectionResult, response) {
      inspectionResult.response = response;
    },
  },
  computed: {
    sortedAirEmissionItems() {
      const list = this.airEmissionSourcesControl.slice(); // Because the order of data is not rewritten at the time of sorting
      if (!!this.sort.key) {
        list.sort((a, b) => {
          a = a[this.sort.key]
          b = b[this.sort.key]

          return (a === b ? 0 : a > b ? 1 : -1) * (this.sort.isAsc ? 1 : -1)
        });
      }

      return list;
    },
    sortedWaterItems() {
      const list = this.waterEmissionSourcesControl.slice(); // Because the order of data is not rewritten at the time of sorting
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
    response_options: () => response_options,
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
