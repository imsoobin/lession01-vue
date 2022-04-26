<template>
  <footer>
      <p>Copyright: 2022</p>
      <router-link to="/about">About me</router-link>
  </footer>
</template>

<script>
export default {
    name: 'Footer',
}
</script>

<style scoped>
    footer{
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 50px;
        background-color: black;
        color: #fff;
    }
    a{
        text-decoration: none;
        font-weight: 600;
    }
</style>

