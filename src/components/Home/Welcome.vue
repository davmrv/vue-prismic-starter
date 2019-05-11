<template>
  <v-container
    id="container"
    fill-height
    fluid
  >
    <v-layout
      align-center
      justify-center
    >
      <v-flex
        xs5
        class="text-xs-center"
      >
        <v-avatar
          size="200"
          class="mb-4 elevation-2"
        >
          <v-img
            :src="picture.url"
          />
        </v-avatar>
        <prismic-rich-text
          :field="message"
          class="white--text"
        />
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>
  export default {
    name: 'Welcome',
    data: () => ({
      message: null,
      picture: {
        url: '',
      },
    }),
    async created() {
      const { results: [welcome] } = await this.$prismic.client.query(
        this.$prismic.Predicates.at('document.type', 'welcome'),
      );

      this.message = welcome.data.message;
      this.picture = welcome.data.picture;
    },
  };
</script>
<style lang="scss" scoped>
  #container {
    background-image: linear-gradient(45deg, #c42fed 2%,#4c92e8 100%);
  }
</style>
