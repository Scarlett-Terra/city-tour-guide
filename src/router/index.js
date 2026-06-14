import { createRouter, createWebHistory } from 'vue-router'

import CityListView from '@/views/CityListView.vue'
import CitySpotsView from '@/views/CitySpotsView.vue'
import SpotDetailView from '@/views/SpotDetailView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      redirect: '/cities'
    },
    {path: '/cities', 
     name: 'city-list', 
     component: CityListView
    },
    {path: '/cities/:city', 
     name: 'city-spots', 
     component: CitySpotsView,
    },
    {path: '/cities/:city/spots/:id', 
     name: 'spot-detail', 
     component: SpotDetailView,
    }
  ],
})

export default router
