<template>
  <v-container class="fill-height">
    <v-responsive
      class="align-centerfill-height mx-auto"
      max-width="900"
    >
      <v-card>
        <v-container>
          <v-col cols="6" class="mx-auto">
            <v-row>
              <v-text-field label="Size X" v-model.number="sizeX" type="number" />
            </v-row>
            <v-row>
              <v-text-field label="Size Y" v-model.number="sizeY" type="number" />
            </v-row>
          </v-col>
          <v-col cols="12">
            <v-row style="overflow: scroll">
              <div class="matrix">
                <div
                  v-for="row in rows"
                  :key="row"
                  class="matrix-row"
                >
                  <div
                    v-for="col in cols"
                    :key="col"
                    class="matrix-cell"
                  ></div>
                </div>
              </div>
            </v-row>
          </v-col>
        </v-container>
      </v-card>
    </v-responsive>
  </v-container>
</template>

<script setup>
  import { ref, computed } from 'vue';

  const sizeX = ref(0);
  const sizeY = ref(0);

  const rows = computed(() => Array.from({ length: sizeY.value }, (_, i) => i));
  const cols = computed(() => Array.from({ length: sizeX.value }, (_, i) => i));
</script>

<style scoped>
.matrix {
  background-color: black;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.matrix-row {
  display: flex;
  gap: 4px;
}

.matrix-cell {
  width: 36px;
  height: 36px;
  background-color: white;
  transition: background-color 0.3s;
}

.matrix-cell:hover {
  background-color: blue;
}
</style>

