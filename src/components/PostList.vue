<template>
    <div class="PostsContainer">
        <h3>Posts</h3>
        <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
        />
    </div>
</template>

<script>
import PostItem from "./PostItem"

export default {
    components: {
        PostItem
    },

    props: {
        posts: {
            type: Array,
            required: true
        }
    }
}
</script>

<style scoped>
.PostsContainer {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

h3 {
    color: DarkOrchid;
    margin-bottom: 1rem;
}
</style>
