<template>
    <header class="header">
        <div class="header__logo">
            <a class="header__logo__link" href="/">Neal.fun</a>
        </div>
    </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.header {
    font-size: 30px;
    font-weight: bold;
    background-color: $content-background-color;
    margin-bottom: 25px;
    padding: 30px 60px;

    &__logo {
        padding-left: 15px;
        max-width: 950px;
        margin-left: auto;
        margin-right: auto;

        &__link {
            text-decoration: none;
            color: inherit;
        }
    }
}
</style>
