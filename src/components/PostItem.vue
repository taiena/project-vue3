<template>
    <div class="Post">
        <div>
            <div><strong>Title: </strong>{{ post.title }}</div>
            <div><strong>Description: </strong>{{ post.body }}</div>
        </div>

        <my-button
            @click="$emit('remove', post)"
            type="sumbit"
        >
            Delete
        </my-button>

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

</style>
