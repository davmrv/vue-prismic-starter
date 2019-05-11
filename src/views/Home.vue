<template>
  <v-container fill-height fluid>
    <Welcome/>
    <v-container>
    </v-container>
  </v-container>
</template>

<script>
  import Welcome from '../components/Home/Welcome';

  export default {
    name: 'Home',
    components: { Welcome },
  };
</script>
