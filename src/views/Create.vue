<template>
  <div class="w-1/4 mx-auto">
    <form @submit.prevent="save">
      <div class="px-6 py-4">
        <div class="text-lg">Add a new product</div>

        <div class="mt-4">
          <div
            style="height: 250px"
            class="upload-image relative row-start-3 col-start-3 col-span-6 sm:col-start-3 sm:col-span-5 md:col-start-1 md:row-start-1 md:col-span-4 row-span-2 bg-gray-200 mb-3 rounded border-2 border-dashed border-gray-400 cursor-pointer"
          >
            <input
              @change="imChanged"
              accept="image/*"
              class="absolute cursor-pointer top-0 opacity-0 left-0 z-20 w-full h-full"
              type="file"
              name="productImage"
              id="file-input"
            />
            <img
              class="cursor-pointer top-0 z-10 left-0 w-full h-full px-2 py-2"
              width="90"
              height="90"
              alt=""
              src=" "
              ref="product_preview"
            />
          </div>
        </div>

        <div class="mt-4">
          <input
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            type="text"
            placeholder="Name"
            required
            v-model="name"
          />
          <textarea
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            placeholder="Description"
            required
            v-model="description"
          >
          </textarea>

          <input
            class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm mt-1 block w-full"
            type="number"
            required
            placeholder="Price"
            data-np-checked="1"
            v-model="price"
          />
        </div>
      </div>
      <div class="px-6 py-4 bg-gray-100 text-right">
        <button
          type="submit"
          class="inline-flex items-center px-4 py-2 bg-white border border-gray-300 rounded-md font-semibold text-xs text-gray-700 uppercase tracking-widest shadow-sm hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:text-gray-800 active:bg-gray-50 transition ease-in-out duration-150 ml-2 text-white"
          style="color: white; background-color: blueviolet"
        >
          Create product
        </button>
      </div>
    </form>
  </div>
</template>
<script>
import { mapActions } from 'vuex'
import { v4 as uuidv4 } from 'uuid'
export default {
  methods: {
    data () {
      return {
        name: '',
        description: '',
        price: '',
        imageFile: null,
        image: null
      }
    },
    imChanged (event) {
      if (event.target.files[0]) {
        this.imageFile = event.target.files[0]
        const imageEl = this.$refs.product_preview

        const reader = new FileReader()

        reader.onload = (e) => {
          this.image = imageEl
          this.image.src = e.target.result
        }

        reader.readAsDataURL(this.imageFile)
      }
    },
    save () {
      if (this.image == null) {
        alert('Choose an image')
        return
      }
      this.addProduct({
        id: uuidv4(),
        name: this.name,
        description: this.description,
        image: this.image.src,
        price: this.price
      })
      this.$router.push('/')
    },
    ...mapActions(['addProduct'])
  }
}
</script>
<style  scoped>
.upload-image {
  background-image: url("../assets/add_photo.png");
  background-position: center;
  background-size: contain;
}
</style>
