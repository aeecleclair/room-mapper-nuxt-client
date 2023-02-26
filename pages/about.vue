<template>
    <div>
        <div>{{ data }}</div>
    </div>
</template>

<script setup>
    const { data } = await useFetch("/api/currency/GBP") 
</script>

<style scoped>

</style>