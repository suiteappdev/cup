<template>
    <div class="thumbnail-image">
      <img :src="thumbnail">
    </div>
</template>

<script>
  export default {
  props: {
        thumbnail: String
    }
  }
</script>