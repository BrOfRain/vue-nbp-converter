<template>
    <button>
        <slot />
    </button>
</template>

<script>
export default {
    props: {
        item: Object,
    },
}
</script>

<style scoped>

</style>