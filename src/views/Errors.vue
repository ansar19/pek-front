<template>
  <d-container fluid class="main-content-container px-4 pb-4">
    <!-- Error -->
    <div class="error">
      <div class="error__content">
        <h2>500</h2>
        <h3>Something went wrong!</h3>
        <p>There was a problem on our end. Please try again later.</p>
        <d-button pill>
          <router-link class="text-white" to="/">
            &larr; Return back
          </router-link>
        </d-button>
      </div>
    </div>
  </d-container>
</template>

<script>
export default {
  methods: {
    goBack () {
      this.$router.go(-1)
    },
  },
}
</script>