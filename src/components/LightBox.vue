<template>
<transition name='lbox'>
    <div class='wrap' v-if='isOpen'>
    <iframe style="border:0" loading="lazy" allowfullscreen :src=location></iframe>
    <button class="closeBtn" @click="closeLightbox">{{close}}</button>
    </div>
</transition>
</template>

<script>
export default {
  data () {
    return {
      isOpen: false,
      location: '',
      close: 'X'
    }
  },
  methods: {
    showLightbox (lat, lng) {
      this.isOpen = true
      this.location = `https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&key=AIzaSyAucCX8isjeQUPofy-p-eGIf51oyFwrebA`
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
iframe {
  margin:auto;
  justify-content: center;
  align-items: center;
  position:relative;
  width:60%;
  height:60%;
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
