import { createStore } from 'vuex'
import router from '../router'
import { auth } from '../firebase'
import { sendPasswordResetEmail } from "firebase/auth";


import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
  
} from 'firebase/auth'

export default createStore({
  state: {
    user: null
  },

  mutations: {

    SET_USER(state, user) {
      state.user = user
    },

    CLEAR_USER(state) {
      state.user = null
    }

  },
  actions: {
    async login({ commit }, details) {
      const { email, password } = details

      try {
        await signInWithEmailAndPassword(auth, email, password)
      } catch (error) {
        switch (error.code) {
          case 'auth/user-not-found':
            alert("User not found")
            break
          case 'auth/wrong-password':
            alert("Wrong password")
            break
          default:
            alert("Something went wrong")
        }

        return
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async editar({ commit }, details ) {

      const user=auth.currentUser
      
      const { email, email2, password, password2 } = details
      
      if ((email == email2) && (password == password2)) {
        try {
          await user.updateEmail(email)
          await user.updatePassword(password);
        } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert("El correo ya está en uso")
              break
            case 'auth/invalid-email':
              alert("Correo no válido")
              break
            case 'auth/operation-not-allowed':
              alert("Operacion no permitida")
              break
            case 'auth/weak-password':
              alert("Contraseña débil")
              break
            default:
              alert("Error de datos")
          }

          return
        }
      } 
      if (email!=email2)
      {
        alert("Los correos no coinciden")
      }
      if (password!=password2)
      {
        alert("Las contraseñas no coinciden")
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },

    async logout({ commit }) {
      await signOut(auth)

      commit('CLEAR_USER')

      router.push('/loginview')
    },
    async register({ commit }, details) {
      const { email, email2, password, password2 } = details
      if ((email == email2) && (password == password2)) {
        try {
          await createUserWithEmailAndPassword(auth, email, password)
        } catch (error) {
          switch (error.code) {
            case 'auth/email-already-in-use':
              alert("El correo ya está en uso")
              break
            case 'auth/invalid-email':
              alert("Correo no válido")
              break
            case 'auth/operation-not-allowed':
              alert("Operacion no permitida")
              break
            case 'auth/weak-password':
              alert("Contraseña débil")
              break
            default:
              alert("Algo salió mal")
          }

          return
        }
      } 
      if (email!=email2)
      {
        alert("Los correos no coinciden")
      }
      if (password!=password2)
      {
        alert("Las contraseñas no coinciden")
      }

      commit('SET_USER', auth.currentUser)

      router.push('/')
    },
    async olvide({ commit }, details){
      const { email } = details
      //const auth = getAuth();
      try {
        sendPasswordResetEmail(auth, email)
        .then(() => {
          alert("Correo de reestablecimiento enviado")
        })
        
      } catch (error) {
        switch (error.code) {
        
          case 'auth/invalid-email':
            alert("Correo no válido")
            break
          case 'auth/operation-not-allowed':
            alert("Operacion no permitida")
            break

          default:
            alert("Algo salió mal")
        }

        return
      }
      commit('SET_USER', auth.currentUser)

      router.push('/')
    }
    
    ,

    fetchUser({ commit }) {
      auth.onAuthStateChanged(async user => {
        if (user === null) {
          commit('CLEAR_USER')
        } else {
          commit('SET_USER', user)

          if (router.isReady() && router.currentRoute.value.path === '/loginview') {
            router.push('/')
          }
        }
      })
    }

  }
})
