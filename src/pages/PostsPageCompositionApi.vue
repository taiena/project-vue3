<template>
<div>
<navbar />
<div class="Container">
    <div class="HeaderBlock">
         
        <h2>Posts page composition API</h2>

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

</div>
</div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import { usePosts } from "@/hooks/usePosts"
import useSortedPosts from "@/hooks/useSortedPosts"
import useSortedAndSearchedPosts from "@/hooks/useSortedAndSearchedPosts"

export default {
    components: {
        PostForm,
        PostList
    },

    data() {
        return {
            dialogVisible: false,
            sortOptions: [
                {value: 'title', name: 'Sort for titles'},
                {value: 'body', name: 'Sort for bodies'}
            ]
        }
    },

    setup(props) {
        const {posts, totalPages, isPostsLoading} = usePosts(10)
        const {sortedPosts, selectedSort} = useSortedPosts(posts)
        const {searchQuery, sortedAndSearchedPosts} = useSortedAndSearchedPosts(sortedPosts)

        return {
            posts,
            totalPages,
            isPostsLoading,
            sortedPosts,
            selectedSort,
            searchQuery,
            sortedAndSearchedPosts,
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