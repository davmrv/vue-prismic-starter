import Vue from 'vue';
import PrismicVue from 'prismic-vue';
import linkResolver from './prismic/link-resolver';
import htmlSerializer from './prismic/html-serializer';
import App from './App.vue';
import router from './router';

Vue.config.productionTip = false;

Vue.use(PrismicVue, {
  endpoint: process.env.VUE_APP_PRISMIC_REPOSITORY,
  linkResolver,
  htmlSerializer,
});

new Vue({
  router,
  render: h => h(App),
}).$mount('#app');
