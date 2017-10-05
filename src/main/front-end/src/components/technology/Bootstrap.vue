<template>
  <div>
    <div>
      <h1>Bootstrap</h1>
      <p class="description">{{ description }}</p>
      <div>Imported by adding to the <code>entry</code> property of webpack.</div>
      <pre>entry: {<br/>  app: './src/main.js', <br/>  style: ['bootstrap/dist/css/bootstrap.css']<br/>}</pre>
      <div class="mt-5">
        <router-link to="starter" class="btn btn-primary">Back</router-link>
      </div>
    </div>
  </div>
</template>

<script>
import service from '../../services/'

export default {
  name: 'bootstrap',
  data () {
    return {
      description: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    service.getTechnologyDetails('bootstrap').then((data) => {
      next(vm => {
        vm.description = data.description
      })
    })
  }
}
</script>

<style scoped>
pre {
  margin-top: 10px;
}
</style>
