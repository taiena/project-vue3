<template>
    <div class="Navbar">
        <div class="Link" @click="$router.push('/')">Main</div>
        <div class="Link" @click="$router.push('/posts')">Posts</div>
    </div>
</template>

<script>
export default {
    name: 'navbar'
}
</script>

<style scoped>
.Navbar {
    display: flex;
    align-items: center;
    height: 50px;
    padding: 0px 2rem;
    background: DarkOrchid;
}

.Link {
    color: white;
    margin-right: 1rem;
}
.Link:hover {
    color: lavenderblush;
    cursor: pointer;
}
</style>
