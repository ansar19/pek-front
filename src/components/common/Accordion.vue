<template>
  <div id="accordion">
    <div class="accordion">
      <div class="toggle" @click="toggle">
        <i class="fa fa-minus-circle" v-if="open"></i>
        <i class="fa fa-plus-circle" v-else></i>
        <slot name="toggle-text"></slot>
      </div>
      <transition name="slide">
        <div class="content" v-show="open">
          <slot name="content"></slot>
        </div>
      </transition>
    </div>
  </div>
</template>

<script>
export default {
  name: 'accordion',
  props: ['initOpen'],
  data() {
    return {
      open: false
    }
  },
  methods: {
    toggle() {
      this.open = !this.open
    }
  },
  created() {
    this.open = !!this.initOpen
  }
}
</script>

<style>
/* .container {
  padding: 1rem 2%;
} */

.toggle {
  align-items: center;
  background: #17c671;
  border-radius: 4px;
  color: #FFF;
  cursor: pointer;
  display: flex;
  justify-content: flex-start;
  padding: 0.5rem 1.2rem;
  margin-bottom: 2px;
}

.toggle i {
  font-size: 1.2rem;
  margin-right: .6rem;
}

.title {

  margin: 0px;

}

.content {
  /* background: #F8F8F8; */
  border-radius: 4px;
  /* padding: 1rem 1.2rem; */
}

.content > * {
  line-height: 1.8;
  margin: 0;
  opacity: 1;
  padding: 0;
  visibility: visible;
}

.slide-enter-active,
.slide-leave-active {
  transition:
    padding-top .3s ease-out,
    padding-bottom .3s ease-out;
}

.slide-enter-active > * {
  transition:
    line-height .3s ease-out,
    opacity .1s linear .1s,
    visibility .1s linear .1s;
}

.slide-leave-active > * {
  transition:
    line-height .3s ease-out,
    opacity .1s linear,
    visibility .1s linear;
}

.slide-enter,
.slide-leave-to {
  padding-top: 0;
  padding-bottom: 0;
}

.slide-enter > *,
.slide-leave-to > * {
  line-height: 0;
  opacity: 0;
  visibility: hidden;
}
</style>
