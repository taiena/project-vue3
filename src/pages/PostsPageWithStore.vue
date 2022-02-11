<template>
<div>
<navbar />
<div class="Container">
    <div class="HeaderBlock">
        <div>{{ $store.state.isAuth ? "User is auth" : "Anonymos"}}</div>
        <h2>Posts page with store</h2>
        
        <div class="AppButtons">
            <my-button
                @click="showDialog"
            >
                Create post
            </my-button>

            <my-input
                :model-value="searchQuery"
                @update:model-value="setSearchQuery"
                placeholder="Search posts"
            />

            <my-select
                :model-value="selectedSort"
                @update:model-value="setSelectedSort"
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

    <div v-intersection="loadMorePosts"></div>
</div>
</div>
</template>

<script>
import PostForm from "@/components/PostForm"
import PostList from "@/components/PostList"
import {mapState, mapGetters, mapActions, mapMutations} from 'vuex'

export default {
    components: {
        PostForm,
        PostList
    },

    data() {
        return {
            dialogVisible: false,
        }
    },

    mounted() {
        this.fetchPosts()
    },

    computed: {
        ...mapState({
            posts: state => state.post.posts,
            isPostsLoading: state => state.post.isPostsLoading,
            selectedSort: state => state.post.selectedSort,
            searchQuery: state => state.post.searchQuery,
            page: state => state.post.page,
            limit: state => state.post.limit,
            totalPages: state => state.post.totalPages,
            sortOptions: state => state.post.sortOptions
        }),

        ...mapGetters({
            sortedPosts: 'post/sortedPosts',
            sortedAndSearchedPosts: 'post/sortedAndSearchedPosts'
        })
    },

    methods: {
        ...mapMutations({
            setPage: 'post/setPage',
            setSearchQuery: 'post/setSearchQuery',
            setSelectedSort: 'post/setSelectedSort',
        }),

        ...mapActions({
            loadMorePosts: 'post/loadMorePosts',
            fetchPosts: 'post/fetchPosts'
        }),

        createPost(post) {
            this.posts.push(post);
            this.dialogVisible = false;
        },

        removePost(post) {
            this.posts = this.posts.filter(p => p.id !== post.id)
        },

        showDialog() {
            this.dialogVisible = true;
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