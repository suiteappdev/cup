import Vue from 'vue'
import Vuesax from 'vuesax'
import TextareaAutosize  from 'vue-textarea-autosize'
import { BootstrapVue, IconsPlugin } from 'bootstrap-vue'
import 'boxicons/css/boxicons.min.css'
import { ModelSelect } from 'vue-search-select'
import 'vue-search-select/dist/VueSearchSelect.css'
import VueCurrencyFilter from 'vue-currency-filter'

Vue.use(VueCurrencyFilter,
    {
        symbol : '$',
        thousandsSeparator: '.',
        fractionCount: 2,
        fractionSeparator: ',',
        symbolPosition: 'front',
        symbolSpacing: true
      })
Vue.use(ModelSelect)
Vue.use(TextareaAutosize)
Vue.use(BootstrapVue)
Vue.use(IconsPlugin)
Vue.use(Vuesax)

