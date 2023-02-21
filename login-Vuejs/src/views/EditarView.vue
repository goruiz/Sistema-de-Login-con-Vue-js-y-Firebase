<template>
    <main class="login">

        <section class="forms">

            <form class="editar" @submit.prevent="editar">
                <h2>Editar usuario </h2>
                <input type="email" placeholder="Ingresa tu nuevo correo: abc@gmail.com" maxlength="30" required=""
                    v-model="editar_form.email" />
                <input type="email" placeholder="Vuelve a escribir tu correo" maxlength="30" required=""
                    v-model="editar_form.email2" />
                <input type="password" placeholder="Ingresa una contraseña" maxlength="30" minlength="10" required=""
                    v-model="editar_form.password" />
                <input type="password" placeholder="Vuelve a ingresa la contraseña" minlength="10" required=""
                    v-model="editar_form.password2" />
                <input type="submit" value="Confirmar" />
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
 
        const editar_form = ref({});
        const editar2_form = ref({});
        const store = useStore();

      

        const editar = () => {
            store.dispatch('editar', editar_form.value);
        }
        const editar2 = () => {
            store.dispatch('editar2', editar2_form.value);
        }
  


        return {
            
            editar_form,
            editar2_form, 
            editar,
            editar2,
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

form.editar {
    color: #FFF;
    background-color: rgb(234, 255, 0);
    background-image: linear-gradient(to bottom right,
            rgb(194, 245, 66) 0%,
            rgb(108, 214, 9) 100%);
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

form.editar input:not([type="submit"]) {
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

form.editar input[type="submit"] {
    background-color: #FFF;
    color: rgb(150, 245, 66);
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