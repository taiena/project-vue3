<template>
    <div class="Post">
        <div>
            <div>{{ post.id }}</div>
            <div><strong>Title: </strong>{{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>

        <div class="PostBtns">
            <my-button
                @click="$router.push(`/posts/${post.id}`)"
                type="button"
            >
                Open
            </my-button>

            <my-button
                @click="$emit('remove', post)"
                type="button"
            >
                Delete
            </my-button>
        </div>

    </div>
</template>

<script>

export default {

    props: {
        post: {
            type: Object,
            required: true
        }
    }
}
</script>

<style scoped>
.Post {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    padding: 1rem;
    margin-bottom: 1rem;;
    border: 1px solid DarkOrchid;
    background-color: Ivory;
}

.PostBtns {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-left: 1rem;
}

.PostBtns button {
    margin-left: 1rem;
}

</style>
