<template>
    <header class="header">
<h1>TEST LIST</h1>
    <div>
        <router-link class="link" to='/'>HOME</router-link> | 
        <router-link class="link" to='/about'>ABOUT</router-link>
    </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
    .header {
        background: #333;
        color: white;
        text-align: center;
        padding: 10px;
        font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    }
    .link {
        font-size: 0.7rem;
        color: white;
        text-decoration: none;
    } 
</style>