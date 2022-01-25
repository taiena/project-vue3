<template>
<div class="Container">
    <post-form
        @create="createPost"
    />
    <post-list
        :posts="posts"
    />
</div>
</template>

<script>
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"

export default {
    components: {
        PostForm,
        PostList
    },

    data() {
        return {
            posts: [
                {id: 1, title: "post 1", body: "body 1"}
            ],

        }
    },

    methods: {
        createPost(post) {
            this.posts.push(post)
        },
    }
}
</script>

<style>
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

.Container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 2rem;
}
</style>
