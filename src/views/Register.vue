<template>
  <div class="font-sans text-gray-900 antialiased">
    <div
      class="min-h-screen flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100"
    >
      <div>
        <a href="/">
          <h2>DAV</h2>
        </a>
      </div>

      <div
        class="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg"
      >
        <form @submit.prevent="register">
          <input
            type="hidden"
            name="_token"
            value="ItdyL3jl3BBMVoEkAoG1URFoUOTtK8xQABrWhQ0L"
            data-np-checked="1"
          />
          <div>
            <label class="block font-medium text-sm text-gray-700" for="name">
              Name
            </label>
            <input
              class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
              id="name"
              type="text"
              name="name"
              required="required"
              autofocus="autofocus"
              autocomplete="name"
              v-model="name"
            />
          </div>

          <div class="mt-4">
            <label class="block font-medium text-sm text-gray-700" for="email">
              Email
            </label>
            <input
              class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
              id="email"
              type="email"
              name="email"
              required="required"
              v-model="email"
            />
          </div>

          <div class="mt-4">
            <label
              class="block font-medium text-sm text-gray-700"
              for="password"
            >
              Password
            </label>
            <input
              class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
              id="password"
              type="password"
              name="password"
              required="required"
              autocomplete="off"
              v-model="password"
            />
          </div>

          <div class="mt-4">
            <label
              class="block font-medium text-sm text-gray-700"
              for="password_confirmation"
            >
              Confirm Password
            </label>
            <input
              class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
              id="password_confirmation"
              type="password"
              name="password_confirmation"
              required="required"
              autocomplete="off"
              v-model="confirmPassword"
            />
          </div>

          <div class="flex items-center justify-end mt-4">
            <router-link
              class="underline text-sm text-gray-600 hover:text-gray-900"
              to="/login"
            >
              Already registered?
            </router-link>

            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4"
            >
              Register
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
import { v4 } from 'uuid'
export default {
  data () {
    return {
      name: '',
      email: '',
      password: '',
      confirmPassword: ''
    }
  },
  methods: {
    register () {
      if (this.$store.getters.checkExist(this.email)) {
        console.log(
          this.$store.state.users,
          'exist',
          this.$store.getters.checkExist(this.email)
        )
        alert('utilisateur existant')
        return
      }
      if (this.password !== this.confirmPassword) {
        alert('Mot de passe différent du mot de passe de confirmation')
      }

      this.addUser({
        id: v4(),
        name: this.name,
        email: this.email,
        password: this.password
      })
      this.$router.push('/')
    },
    ...mapActions(['addUser'])
  }
}
</script>
