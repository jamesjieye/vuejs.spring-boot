<template>
  <div class="starter">
    <h1>Welcome to <code>{{ starter }}</code> starter</h1>
    <ul class="list-unstyled">
      <li class="media vuejs" @click="open('vuejs')">
        <img class="d-flex" src="../assets/images/vue-logo.png">
        <div class="media-body ml-4">
          <h5 class="mt-0 mb-1"><router-link to="vuejs">Vue.js</router-link></h5>
          The Progressive JavaScript Framework
        </div>
      </li>
      <li class="media bootstrap my-4" @click="open('bootstrap')">
        <img class="d-flex" src="../assets/images/bootstrap-stack-logo.png">
        <div class="media-body ml-4">
          <h5 class="mt-0 mb-1"><router-link to="bootstrap">Bootstrap</router-link></h5>
          The most popular HTML, CSS, and JS library in the world.
        </div>
      </li>
      <li class="media spring-boot" @click="open('spring-boot')">
        <img class="d-flex" src="../assets/images/spring-boot-logo.png">
        <div class="media-body ml-4">
          <h5 class="mt-0 mb-1"><router-link to="spring-boot">Spring Boot</router-link></h5>
          Takes an opinionated view of building production-ready Spring applications.
        </div>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'starter',
  data () {
    return {
      starter: 'vuejs.spring-boot'
    }
  },
  methods: {
    open (technology) {
      this.$router.push(technology)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1 code {
  padding: 0.2rem 0.6rem;
  background-color: #f4f4f4;
  border-radius: 0.5rem;
}

.starter a {
  color: #333;
}

ul {
  margin-top: 50px;
}

ul li {
  padding: 10px;
  -webkit-border-radius: 5px;
  -moz-border-radius: 5px;
  border-radius: 5px;
  cursor: pointer;
  height: 85px;
}

.media img {
  width: 64px;
}

.media.vuejs:hover {
  background-color: #e0fbef;
}

.media.bootstrap:hover {
  background-color: #e7dcf9;
}

.media.spring-boot:hover {
  background-color: #eaf7e2;
}
</style>
