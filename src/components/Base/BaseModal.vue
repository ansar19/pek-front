<template>
  <d-modal @close="toggleModal">
    <d-modal-header>
      <d-modal-title>{{ title }}</d-modal-title>
    </d-modal-header>
    <d-modal-body>
      <slot></slot>
      <div v-if="error">{{ error.message }}</div>
    </d-modal-body>
    <d-modal-footer>
      <button class="btn-success btn-small btn mr-2" @click="add">
        Создать
        <spinner v-if="loading" />
        <i v-else class="material-icons right">send</i>
      </button>
      <button class="btn-light btn-small btn" @click="toggleModal">
        Отменить
      </button>
    </d-modal-footer>
  </d-modal>
</template>

<script>
export default {
  name: 'BaseModal',
  props: {
    title: {
      type: String,
      required: true,
    },
    toggleModal: {
      type: Function,
      required: true,
    },
    add: {
      type: Function,
      required: true,
    },
    loading: {
      type: Boolean,
      required: false,
    },
    error: {
      type: Object,
      required: false,
    },
  },
};
</script>
