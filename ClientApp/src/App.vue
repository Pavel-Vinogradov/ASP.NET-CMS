<template>
<div id="app">
  <HelloWorld/>
</div>
</template>

<script lang="ts">
import HelloWorld from '@/components/HelloWorld.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: { HelloWorld }
})
export default class App extends Vue {
  
}
</script>
