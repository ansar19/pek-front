
<template>
  <div>
    <d-alert
      dismissible
      :show="timeUntilDismissed"
      :theme="theme"
      @alert-dismissed="timeUntilDismissed = 0"
      @alert-dismiss-countdown="handleTimeChange"
    >
      {{ message }}
    </d-alert>
  </div>
</template>

<script>
export default {
  name: 'AlertSelfDismissing',
  props: ['message', 'theme'],
  data() {
    return {
      duration: 5,
      timeUntilDismissed: 0,
    };
  },
  methods: {
    handleTimeChange(time) {
      this.timeUntilDismissed = time;
    },
    showAlert() {
      this.timeUntilDismissed = this.duration;
    },
  },
};
</script>
