<template>
	<v-toolbar app>
		<v-toolbar-title>
			<span class="headline font-weight-bold">{{ title }}</span>
			<span class="font-weight-light">
        {{ subTitle }}
      </span>
		</v-toolbar-title>
		<v-spacer></v-spacer>
	</v-toolbar>
</template>

<script>
export default {
  name: 'Header',
  data: () => ({
    title: null,
    subTitle: null,
  }),
  async created() {
    const { results: [information] } = await this.$prismic.client.query(
      this.$prismic.Predicates.at('document.type', 'site_information'),
    );

    this.title = information.data.website_title;
    this.subTitle = information.data.sub_title;
  }
}
</script>
