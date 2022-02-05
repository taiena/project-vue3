<template>
    <div v-if="posts.length > 0" class="PostsContainer">
        <h3>Posts</h3>
        <transition-group name="post-list">
            <post-item
            v-for="post in posts"
            :key="post.id"
            :post="post"
            @remove="$emit('remove', post)"
        />
        </transition-group>
    </div>

    <h3 v-else>Add your posts</h3>
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

.post-list-item {
    display: inline-block;
}

.post-list-enter-active,
.post-list-leave-active {
   transition: all 1s ease; 
}

.post-list-enter-from,
.post-list-leave-to {
    opacity: 0;
    transform: translateY(30px);
}

.post-list-move {
    transition: transform 0.8s ease;
}
</style>
