<script setup>
import { useFlash } from '@/composables/useflash.js';

let {flash} = useFlash();
</script>

<template>
    <div>
        <p>
            <button @click="flash('Hello there how you doing')">Click Me</button>
        </p>
    </div>
</template>
