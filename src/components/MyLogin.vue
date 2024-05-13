<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-card>
        <v-form @submit.prevent="handleSubmit">
          <v-container>
            <v-col cols="6" class="mx-auto">
              <v-row>
                <v-text-field
                  v-model="state.email"
                  :error-messages="v$.email.$errors.map(e => e.$message)"
                  label="Email"
                  @blur="v$.email.$touch"
                  @input="v$.email.$touch"
                />
              </v-row>
              <v-row>
                <v-text-field
                  v-model="state.password"
                  :error-messages="v$.password.$errors.map(e => e.$message)"
                  label="Password"
                  @blur="v$.password.$touch"
                  @input="v$.password.$touch"
                />
              </v-row>
              <v-row>
                <v-btn type="submit" block>Login</v-btn>
              </v-row>
            </v-col>
          </v-container>
        </v-form>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { reactive } from 'vue';
  import { useVuelidate } from '@vuelidate/core'
  import { email, required, minLength } from '@vuelidate/validators'
  import { useRouter } from 'vue-router';

  const initialState = {
    email: '',
    password: '',
  }

  const state = reactive({
    ...initialState,
  })

  const rules = {
    password: { required, minLength: minLength(6) },
    email: { required, email },
  }

  const v$ = useVuelidate(rules, state)
  const router = useRouter();

  const handleSubmit = async () => {
    await v$.value.$validate();  // Асинхронная валидация
    if (!v$.value.$error) {
      await router.push('/game');
    }
  };
</script>
