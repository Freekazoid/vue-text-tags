<template>
  <v-container fluid >
    <v-row :align="alignment[0]" :justify="alignment[1]" ref="box" class="conteiner-tags">
      <div class="tag-context" v-for="(tag, index) in arrayTagsFormated" :key="index">
        <v-icon v-if="tag.indexOf('-')">
          {{ tag }}
        </v-icon>
        <div v-else>
          {{ tag }}
        </div>
        <v-icon v-if="index<arrayTagsFormated.length-1" style="font-size: 50px;">mdi-circle-small</v-icon>
      </div>
    </v-row>
  </v-container>
</template>

<script>
export default {
  inheritAttrs: false,
  props: {
    arrayTags: {
      type: Array,
      default: () => []
    },
    alignment:{
      type: Array,
      default: () => ['baseline', 'end']
    }
  },
  data: () => ({
    arrayTagsFormated: [],
  }),
  computed:{
    tags(){
      const array = []
      this.arrayTags.forEach(item => {
        if(item.indexOf('-')!=-1)
          item.split(' ').forEach(i=>array.push(i))
        else
          array.push(item)
      })
      return array
    },
  },
  watch:{
    arrayTags(){
      this.arrayTagsFormated = this.tags.filter(i=> i!='')
    }
  },
  mounted(){
    this.childrenOffset = Array.from(this.$refs.box.children).map(i=>i.offsetWidth ).reduce((prev, curr) => prev + curr, 0)
  },
  created() {
    this.arrayTagsFormated = this.tags
  }
}
</script>

<style>
  .conteiner-tags{
    height: 50px;
    overflow: hidden;
  }
</style>