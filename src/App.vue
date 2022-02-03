<template>
<div class="Container">
    <div class="HeaderBlock">
      <h2>Posts page</h2>

      <my-button
        @click="showDialog"
      >
        Create post
      </my-button>
    </div>

    <my-dialog v-model:show="dialogVisible">
      <post-form
        @create="createPost"
      />
    </my-dialog>
    
    <post-list
        :posts="posts"
        @remove="removePost"
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

            dialogVisible: false

        }
    },

    methods: {
        createPost(post) {
            this.posts.push(post)
            this.dialogVisible = false
        },

        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },

        showDialog() {
            this.dialogVisible = true
        }
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

.HeaderBlock {
    margin-bottom: 2rem;
}

h2 {
    color: DarkOrchid;
    margin-bottom: 1rem;
}
</style>
