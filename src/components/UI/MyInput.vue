<template>
    <input
        :value="modelValue"
        @input="updateInput"
        class="Input"
        type="text"
    >
</template>

<script>
export default {
    name: 'my-input',

    props: {
        modelValue: [String, Number]
    },

    methods: {
        updateInput(event) {
            this.$emit('update:modelValue', event.target.value)
        }
    }
}
</script>

<style scoped>
.Input {
    width: 100%;
    padding: 10px 15px;
    border: 1px solid DarkOrchid;
}
</style>
