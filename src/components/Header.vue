<template>
  <nav id="nav" class="bg-white border-b border-gray-100">
    <!-- Primary Navigation Menu -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex justify-between h-16">
        <div class="flex">
          <!-- Logo -->
          <div class="flex-shrink-0 flex items-center">
            <router-link to="/">
              <div class="flex-col flex justify-center">
                <h2>DAV</h2>
              </div>
            </router-link>
          </div>

          <!-- Navigation Links -->
          <div class="hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
            <router-link
              class="inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium leading-5 text-gray-900 focus:outline-none focus:border-indigo-700 transition duration-150 ease-in-out"
              to="/"
            >
              home
            </router-link>
          </div>
        </div>

        <div class="ml-2 relative hidden space-x-8 sm:-my-px sm:ml-10 sm:flex">
          <div
            class="origin-top-right right-0 hidden space-x-8 sm:-my-px sm:ml-10 sm:flex"
          >
            <router-link
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              to="/login"
              v-if="!isLogin"
            >
              Login
            </router-link>
            <router-link
              class="inline-flex items-center px-1 pt-1 border-b-2 border-transparent text-sm font-medium leading-5 text-gray-500 hover:text-gray-700 hover:border-gray-300 focus:outline-none focus:text-gray-700 focus:border-gray-300 transition duration-150 ease-in-out"
              to="/register"
              v-if="!isLogin"
            >
              Register
            </router-link>
            <a
              class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
              @click.prevent="signOut"
              v-if="isLogin"
              href="#"
            >
              logout {{ currentUser.name }}
            </a>
          </div>
        </div>
        <!-- Hamburger -->
        <div class="-mr-2 flex items-center sm:hidden">
          <button
            @click="open = !open"
            class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out"
          >
            <svg
              class="h-6 w-6"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                :class="{ hidden: open, 'inline-flex': !open }"
                class="inline-flex"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              ></path>
              <path
                :class="{ hidden: !open, 'inline-flex': open }"
                class="hidden"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </div>

    <!-- Responsive Navigation Menu -->
    <div :class="{ block: open, hidden: !open }" class="hidden sm:hidden">
      <div class="pt-2 pb-3 space-y-1">
        <router-link
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          to="/"
        >
          home
        </router-link>
      </div>

      <div class="pt-4 pb-1">
        <router-link
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          to="/login"
          v-if="!isLogin"
        >
          Login
        </router-link>
        <router-link
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          to="/register"
          v-if="!isLogin"
        >
          Register
        </router-link>
        <a
          class="block pl-3 pr-4 py-2 border-l-4 border-transparent text-base font-medium text-gray-600 hover:text-gray-800 hover:bg-gray-50 hover:border-gray-300 focus:outline-none focus:text-gray-800 focus:bg-gray-50 focus:border-gray-300 transition duration-150 ease-in-out"
          @click="signOut"
          v-if="isLogin"
        >
          logout
        </a>
      </div>
      <!-- Responsive Settings Options -->
    </div>
  </nav>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
export default {
  mounted () {
    console.log('isLogin', this.isLogin, 'current user', this.currentUser)
  },
  data () {
    return {
      open: false
    }
  },
  methods: {
    signOut () {
      this.logOut()
      this.$router.push('/')
    },
    ...mapActions(['logOut'])
  },
  computed: {
    ...mapGetters(['isLogin', 'currentUser'])
  }
}
</script>
