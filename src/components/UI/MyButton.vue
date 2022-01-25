<template>
    <button class="Btn">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: 'my-button'
}
</script>

<style scoped>
.Btn {
    padding: 10px 15px;
    color: darkorchid;
    background: white;
    border: 1px solid DarkOrchid;
}

.Btn:hover {
    cursor: pointer;
    background: LavenderBlush;
}
</style>
