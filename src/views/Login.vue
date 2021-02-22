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
        <form @submit.prevent="signIn">
          <input
            type="hidden"
            name="_token"
            value="5eg2YCRXTjPv0JSIHyEXK1o26nABcHSLwXHIIuZw"
          />
          <div>
            <label class="block font-medium text-sm text-gray-700" for="email">
              Email
            </label>
            <input
              class="border-gray-300 focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50 rounded-md shadow-sm block mt-1 w-full"
              id="email"
              type="email"
              name="email"
              required="required"
              autofocus="autofocus"
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
              autocomplete="current-password"
              v-model="password"
            />
          </div>

          <div class="block mt-4">
            <label for="remember_me" class="flex items-center">
              <input
                type="checkbox"
                class="rounded border-gray-300 text-indigo-600 shadow-sm focus:border-indigo-300 focus:ring focus:ring-indigo-200 focus:ring-opacity-50"
                id="remember_me"
                name="remember"
              />
              <span class="ml-2 text-sm text-gray-600">Remember me</span>
            </label>
          </div>

          <div class="flex items-center justify-end mt-4">
            <a
              class="underline text-sm text-gray-600 hover:text-gray-900"
              href="http://127.0.0.1:8000/forgot-password"
            >
              Forgot your password?
            </a>

            <button
              type="submit"
              class="inline-flex items-center px-4 py-2 bg-gray-800 border border-transparent rounded-md font-semibold text-xs text-white uppercase tracking-widest hover:bg-gray-700 active:bg-gray-900 focus:outline-none focus:border-gray-900 focus:shadow-outline-gray disabled:opacity-25 transition ease-in-out duration-150 ml-4"
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  data () {
    return {
      email: '',
      password: ''
    }
  },
  methods: {
    signIn () {
      const user = this.$store.getters.checkExistWithPassword(
        this.email,
        this.password
      )
      if (user == null) {
        alert('paramètre de connexion incorrect')
        return
      }
      this.logIn(user)
      this.$router.push('/')
    },
    ...mapActions(['logIn'])
  }
}
</script>
