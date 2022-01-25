<template>
    <div class="Post" v-for="post in posts" :key="post.id">
        <div><strong>Title: </strong>{{ post.title }}</div>
        <div><strong>Description: </strong>{{ post.body }}</div>
    </div>
</template>

<script>
export default {
    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.Post {
    padding: 1rem;
    margin-bottom: 1rem;;
    border: 1px solid DarkOrchid;
    background-color: Ivory;
}
</style>
