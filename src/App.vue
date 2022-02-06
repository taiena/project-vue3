<template>
<div class="Container">
    <div class="HeaderBlock">
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

    <div class="Paginator">
        <div
            v-for="pageNumber in totalPages"
            :key="pageNumber"
            class="PageNumber"
            :class="{
                'CurrentPageNumber' : page === pageNumber
            }"
            @click="changePage(pageNumber)"
        >
            {{ pageNumber }}
        </div>
    </div>
    
    <post-list
        :posts="sortedAndSearchedPosts"
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

    watch: {
        page() {
            this.fetchPosts()
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

        changePage(pageNumber) {
            this.page = pageNumber
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

.AppButtons {
    display: flex;
    justify-content: space-between;
}

.Paginator {
    margin-bottom: 1rem;
    display: flex;
}

.PageNumber {
    padding: 10px;
    margin-right: 10px;
    border: 1px solid DarkOrchid;
}

.PageNumber:hover {
    cursor: pointer;
    background-color: LavenderBlush;
}

.CurrentPageNumber {
    background-color: Lavender;
}

</style>
ё