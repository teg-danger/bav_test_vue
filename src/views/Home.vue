<template>
  <div
    class="grid lg:grid-cols-5 sm:grid-cols-3 grip-cols-1 gap-4 mt-10 mx-10 lg:mx-auto"
    style="max-width: 1250px"
  >
    <router-link to="/create">
      <div class="flex bg-gray-800 h-full text-white">
        <div class="m-auto">Add product</div>
      </div>
    </router-link>
    <router-link
      :to="{ name: 'details', params: { id: product.id } }"
      v-for="(product, i) in products"
      :key="i"
    >
      <div class="flex flex-col border-1 border-gray-500">
        <div class="flex justify-center bg-gray-400">
          <img :src="product.image" alt="" height="180" class="image-preview" />
        </div>
        <div>
          <p class="text-center">{{ product.name }}</p>
        </div>
        <div>
          <p class="normal-nums text-center">{{ product.price }}</p>
        </div>
      </div>
    </router-link>
  </div>
</template>

<script>
// @ is an alias to /src
import { mapState } from 'vuex'
export default {
  name: 'Home',
  data () {
    return {
      openMode: false,
      product: {
        name: '',
        description: '',
        price: ''
      }
    }
  },
  methods: {
    openDialog () {
      this.openMode = true
    },
    store () {},
    edit (id) {},
    update () {}
  },
  computed: {
    ...mapState(['products'])
  }
}
</script>

<style scoped>
.image-preview {
  height: 180px;
}
</style>
