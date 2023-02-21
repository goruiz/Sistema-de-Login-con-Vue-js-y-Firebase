<template>
    <main class="login">

        <section class="forms">

            <form class="register" @submit.prevent="register">
                <h2>Regístrate</h2>
                <input type="email" placeholder="Ingresa tu correo: abc@gmail.com"  maxlength="30"  required="" v-model="register_form.email" />
                <input type="email" placeholder="Vuelve a escribir tu correo"  maxlength="30" required="" v-model="register_form.email2" />
                <input type="password" placeholder="Ingresa una contraseña" maxlength="30" minlength="10" required="" v-model="register_form.password" />
                <input type="password" placeholder="Vuelve a ingresa la contraseña" minlength="10" required="" v-model="register_form.password2" />
                <input type="submit" value="Registrarse" />
            </form>

            <form class="login" @submit.prevent="login">
                <h2>Inicia Sesión</h2>
                
                <input type="email" placeholder="Ingresa tu correo" v-model="login_form.email" />
                <input type="password" placeholder="Ingresa tu contraseña" v-model="login_form.password" />
                <input type="submit" value="Iniciar" />
            </form>

            <form class="olvide" @submit.prevent="olvide">
                <h2>¿Olvidaste tu contraseña?</h2>
                <br><br>
                <input type="email" placeholder="Ingresa tu correo" v-model="olvide_form.email" />
                <input type="submit" value="Recuperar contraseña" />
            </form>


        </section>


    </main>

</template>

<script>
import { ref } from 'vue'
import { useStore } from 'vuex'
//import { getAuth, sendPasswordResetEmail } from "firebase/auth";
//import firebase from 'firebase'
export default {
    setup() {
        const login_form = ref({});
        const register_form = ref({});
        const register2_form = ref({});
        const olvide_form = ref({});
        const store = useStore();

        const login = () => {
            store.dispatch('login', login_form.value);
        }

        const register = () => {
            store.dispatch('register', register_form.value);
        }
        const register2 = () => {
            store.dispatch('register2', register2_form.value);
        }
        const olvide = () => {
            store.dispatch('olvide', olvide_form.value);
        }
        

        return {
            login_form,
            register_form,
            register2_form,
            olvide_form,
            login,
            register,
            register2,
            olvide
        }
    },
    
}
</script>

<style>
.forms {
    display: flex;
    min-height: 100vh;
}

form {
    flex: 1 1 0%;
    padding: 8rem 1rem 1rem;
}

form.register {
    color: #FFF;
    background-color: rgb(245, 66, 101);
    background-image: linear-gradient(to bottom right,
            rgb(245, 66, 101) 0%,
            rgb(189, 28, 60) 100%);
}

form.olvide {
    color: #FFF;
    background-color: rgb(66, 224, 245);
    background-image: linear-gradient(to bottom right,
            rgb(66, 209, 245) 0%,
            rgb(28, 189, 127) 100%);
}

h2 {
    font-size: 2rem;
    text-transform: uppercase;
    margin-bottom: 2rem;
}

input {
    appearance: none;
    border: none;
    outline: none;
    background: none;

    display: block;
    width: 100%;
    max-width: 400px;
    margin: 0 auto;
    font-size: 1.5rem;
    margin-bottom: 2rem;
    padding: 0.5rem 0rem;
}

input:not([type="submit"]) {
    opacity: 0.8;
    transition: 0.4s;
}

input:focus:not([type="submit"]) {
    opacity: 1;
}

input::placeholder {
    color: inherit;
}

form.register input:not([type="submit"]) {
    color: #FFF;
    border-bottom: 2px solid #FFF;
}

form.olvide input:not([type="submit"]) {
    color: #FFF;
    border-bottom: 2px solid #FFF;
}

form.login input:not([type="submit"]) {
    color: #2c3e50;
    border-bottom: 2px solid #2c3e50;
}

form.login input[type="submit"] {
    background-color: rgb(245, 66, 101);
    color: #FFF;
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}

form.register input[type="submit"] {
    background-color: #FFF;
    color: rgb(245, 66, 101);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}

form.olvide input[type="submit"] {
    background-color: #FFF;
    color: rgb(28, 189, 127);
    font-weight: 700;
    padding: 1rem 2rem;
    border-radius: 0.5rem;
    cursor: pointer;
    text-transform: uppercase;
}
</style>