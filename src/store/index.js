import { createStore } from 'vuex'
import VuexPersistence from 'vuex-persist'
const vuexLocal = new VuexPersistence({
  storage: window.localStorage
})

export default createStore({
  state: {
    users: [],
    currentUser: null,
    products: [
      {
        id: '1',
        name: 'First Product',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: '1000',
        image: 'https://via.placeholder.com/640x480.png/000044?text=T%C3%A9'
      },
      {
        id: '2',
        name: 'Second Product',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: '1500',
        image: 'https://via.placeholder.com/640x480.png/000044?text=T%C3%A9'

      },
      {
        id: '3',
        name: 'Third Product',
        description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.',
        price: '500',
        image: 'https://via.placeholder.com/640x480.png/000044?text=T%C3%A9'

      }

    ]
  },
  mutations: {
    ADD (state, product) {
      state.products.push(product)
    },
    UPDATE (state, product) {
      const index = state.products.findIndex((el) => el.id === product.id)
      if (index > -1) {
        state.products.splice(index, 1, product)
      }
    },
    REMOVE (state, product) {
      const index = state.products.findIndex((el) => el.id === product.id)
      if (index > -1) {
        state.products.slice(index, 1)
      }
    },
    ADD_USER (state, user) {
      state.users.push(user)
      state.currentUser = user
      window.currentUser = user
    },
    LOGIN (state, user) {
      state.currentUser = user
      window.currentUser = user
    },
    LOGOUT (state, user) {
      state.currentUser = null
    },
    DELETE (state, id) {
      const index = state.products.findIndex(el => el.id === id)
      state.products.splice(index, 1)
    }
  },
  actions: {
    addProduct ({ commit }, product) {
      commit('ADD', product)
    },
    updateProduct ({ commit }, product) {
      commit('UPDATE', product)
    },
    removeProduct ({ commit }, product) {
      commit('REMOVE', product)
    },
    addUser ({ commit }, user) {
      commit('ADD_USER', user)
    },
    logIn ({ commit }, user) {
      commit('LOGIN', user)
    },
    logOut ({ commit }) {
      commit('LOGOUT')
    },
    deleteProduct ({ commit }, id) {
      commit('DELETE', id)
    }

  },
  getters: {
    getProduct: (state) => (id) => {
      return state.products.find(el => el.id === id)
    },
    checkExistWithPassword: (state) => (email, password) => state.users.find(el => el.email === email && el.password === password),
    checkExist: (state) => (email) => state.users.find(el => el.email === email),
    isLogin: (state) => state.currentUser !== null,
    currentUser: (state) => state.currentUser
  },
  modules: {
  },
  plugins: [vuexLocal.plugin]
})
