<template>
<div>
<navbar />
<div class="Container">
    <div class="HeaderBlock">
         
        <router-link to="/">go to main</router-link>
        <h2>Posts page</h2>

        <div class="AppButtons">
            <my-button
                @click="showDialog"
            >
                Create post
            </my-button>

            <my-input
                v-model="searchQuery"
                placeholder="Search posts"
            />

            <my-select
                v-model="selectedSort"
                :options="sortOptions"
            />
        </div>
    </div>

    <my-dialog v-model:show="dialogVisible">
        <post-form
            @create="createPost"
        />
    </my-dialog>

    <post-list
        :posts="sortedAndSearchedPosts"
        @remove="removePost"
        v-if="!isPostsLoading"
    />

    <div v-else>Loading posts...</div>

    <div ref="observer"></div>
</div>
</div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
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
            isPostsLoading: false,
            selectedSort: "",
            searchQuery: "",
            page: 1,
            limit: 10,
            totalPages: 0,
            sortOptions: [
                {value: 'title', name: 'Sort for titles'},
                {value: 'body', name: 'Sort for bodies'}
            ]
        }
    },

    mounted() {
        this.fetchPosts()

        const options = {
            rootMargin: '0px',
            threshold: 1.0
        }

        const callback = (entries, observer) => {
            if (entries[0].isIntersecting) {
                console.log('load');
                this.loadMorePosts()
            }
        }

        const observer = new IntersectionObserver(callback, options)

        observer.observe(this.$refs.observer)
    },

    computed: {
        sortedPosts() {
            return [...this.posts].sort((post1, post2) => {
                return post1[this.selectedSort]?.localeCompare(post2[this.selectedSort])
            })
        },

        sortedAndSearchedPosts() {
            return this.sortedPosts.filter(post => post.title.includes(this.searchQuery))
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
        },

        async fetchPosts() {
            try {
                this.isPostsLoading = true

                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts", {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    }
                )

                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)

                this.posts = response.data
            } catch(e) {
                alert('Some error')
            } finally {
                this.isPostsLoading = false
            }
         },

         async loadMorePosts() {
            try {
                this.page += 1

                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts", {
                        params: {
                            _page: this.page,
                            _limit: this.limit
                        }
                    }
                )
                
                this.totalPages = Math.ceil(response.headers['x-total-count'] / this.limit)
                this.posts = [...this.posts, ...response.data]
            } catch(e) {
                alert('Some error')
            } finally {
            }
         }
    }
}
</script>

<style>

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

.AppButtons {
    display: flex;
    justify-content: space-between;
}

</style>