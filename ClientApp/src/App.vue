<template>
  <div  id="app">
    <keep-alive>
      <router-view/>
    </keep-alive>
       
       
  </div>

</template>

<script lang="ts">

import {Component, Vue} from 'vue-property-decorator'

import Admin from "@/views/admin.vue";

@Component({
  components: {Admin}
})

export default class App extends Vue {
  private clipped = true
  private drawer = true
  private miniVariant = false
  private right = true
}
</script>
