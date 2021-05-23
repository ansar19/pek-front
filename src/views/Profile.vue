<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <d-row no-gutters class="page-header py-4">
      <d-col lg="12" md="12">
        <d-card class="card-small">
          <!-- Form Example -->
          <d-card-header class="border-bottom">
            <h6 class="m-0">Профиль</h6>
          </d-card-header>
          <d-list-group flush>
            <d-list-group-item class="p-3">
              <d-row>
                <d-col>
                  <d-form>
                    <div class="mb-3 custom-control custom-switch">
                      <span class="custom-control-descriptionmr-3">Kazakh</span>
                      <d-checkbox inline v-model="isRuLocale" toggle>
                      </d-checkbox>
                      <span class="custom-control-description">Русский</span>
                    </div>
                  </d-form>
                </d-col>
              </d-row>
            </d-list-group-item>
          </d-list-group>
        </d-card>
      </d-col>
    </d-row>
  </d-container>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';
import localeFilter from '@/filters/localize.filter';

export default {
  data: () => ({
    isRuLocale: true,
  }),
  mounted() {
    this.isRuLocale = this.info.locale === 'ru-RU';
  },
  computed: {
    // ...mapGetters(['info']),
  },
  methods: {
    ...mapActions(['updateInfo']),
    async submitHandler() {
      if (this.$v.$invalid) {
        this.$v.$touch();
        return;
      }
      try {
        await this.updateInfo({
          //   name: this.name,
          //   companyName: this.companyName,
          //   companyType: this.companyType,
          //   companyBin: this.companyBin,
          //   companyHead: this.companyHead,
          //   companyPhone: this.companyPhone,
          //   companyFax: this.companyFax,
          //   companyEmail: this.companyEmail,
          //   companyBankAccount: this.companyBankAccount,
          //   companyBank: this.companyBank,
          //   companyAddress: this.companyAddress,
          locale: this.isRuLocale ? 'ru-RU' : 'kz-KZ',
        });
      } catch (e) {}
    },
  },
};
</script>