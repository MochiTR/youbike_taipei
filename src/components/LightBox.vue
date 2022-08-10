<template>
<transition name='lbox'>
    <div class='wrap' v-if='isOpen'>
    <img :src="img">
    <button class="closeBtn" @click="closeLightbox">{{close}}</button>
    </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      img: 'https://images.unsplash.com/photo-1659983732775-51adb59b0263?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      close: 'X'
    }
  },
  methods: {
    showLightbox () {
      this.isOpen = true
    },
    closeLightbox () {
      this.isOpen = false
    }
  }
}

</script>

<style lang="scss">
.wrap {
  position:fixed;
  background-color: rgba(0, 0, 0, 0.7);
  height: 100%;
  width: 100%;
  top:0;
  left:0;
  z-index:333;
  display:flex;
}
img {
  margin:auto;
  justify-content: center;
  align-items: center;
  position:relative;
}
.closeBtn {
  position:absolute;
  top:0;
  right:0;
  padding:1em;
  color:white;
  font-size: 24px;
  cursor: pointer;
  background: transparent;
  border-style: none;
}
.lbox-enter-from,.lbox-leave-to {
  opacity:0;
}
.lbox-enter-active,.lbox-leave-active {
  transition:opacity 0.6s;
}
.lbox-enter-to,.lbox-leave-from {
  opacity:1;
}
</style>
