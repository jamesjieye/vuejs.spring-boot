import Vue from 'vue'
import router from '@/router'
import Starter from '@/components/Starter'

describe('Starter.vue', () => {
  it('should render correct contents', () => {
    const Constructor = Vue.extend(Starter)
    const vm = new Constructor({
      router
    }).$mount()
    expect(vm.$el.querySelector('h1 code').textContent)
      .to.equal('vuejs.spring-boot')
  })
})
