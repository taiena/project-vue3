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
        v-if="!isPostsLoading"
    />

    <div v-if="!isPostsLoading">Loading posts...</div>
</div>
</template>

<script>
import PostForm from "./components/PostForm"
import PostList from "./components/PostList"
import axios from "axios"

export default {
    components: {
        PostForm,
        PostList
    },

    data() {
        return {
            posts: [],
            dialogVisible: false,
            isPostsLoading: false
        }
    },

    mounted() {
      this.fetchPosts()
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
        },

        async fetchPosts() {
            try {
                this.isPostsLoading = true

                setTimeout(async () => {
                    const response = await axios.get(
                      "https://jsonplaceholder.typicode.com/posts?_limit=10"
                    )
                    this.posts = response.data
                }, 1000)
                
            } catch(e) {
                alert('Some error')
            } finally {
                this.isPostsLoading = false

            }
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
