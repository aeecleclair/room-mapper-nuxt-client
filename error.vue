
<template>
    <div class="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <div class="max-w-screen-sm sm:text-center sm:mx-auto">
            <a href="/" aria-label="View" class="inline-block mb-5 rounded-full sm:mx-auto">
                <div class="flex items-center justify-center w-16 h-16 mb-4 rounded-full bg-indigo-50">
                    <svg class="w-12 h-12 text-deep-purple-accent-400" stroke="currentColor" viewBox="0 0 52 52">
                        <polygon stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"
                            points="29 13 14 29 25 29 23 39 38 23 27 23"></polygon>
                    </svg>
                </div>
            </a>
            <h1 class="mb-4 font-sans text-5xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">{{
                error.statusCode }}</h1>
            <h2 class="mb-4 font-sans text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl sm:leading-none">
                Oooups...
            </h2>
            <p class="text-base text-gray-700 md:text-lg sm:px-4">
                {{ error.message }}
            </p>
            <hr class="w-full my-8 border-gray-300" />
        </div>
            <button
                class="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg"
                @click="handleClearError">Retour à la page principale...</button>
    </div>
</template>

<script setup>
defineProps(['error'])

const handleClearError = () => clearError({ redirect: '/' })
</script>

<style scoped></style>