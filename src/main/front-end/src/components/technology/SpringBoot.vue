<template>
  <div>
    <h1>Spring Boot</h1>
    <p class="description">{{ description }}</p>
    <div>In development mode, front end requests are passed to back end via <a href="https://github.com/chimurai/http-proxy-middleware" target="_blank">http-proxy-middleware</a></div>
    <div class="mt-5">
      <router-link to="starter" class="btn btn-primary">Back</router-link>
    </div>
  </div>
</template>

<script>
import service from '../../services/'

export default {
  name: 'spring-boot',
  data () {
    return {
      description: ''
    }
  },
  beforeRouteEnter (to, from, next) {
    service.getTechnologyDetails('spring-boot').then((data) => {
      next(vm => {
        vm.description = data.description
      })
    })
  }
}
</script>

<style scoped>

</style>
