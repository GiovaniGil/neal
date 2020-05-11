<template>
<div class="profile">
    <div class="profile__wrapper">
        <img src="https://neal.fun/spend/billgates.png" alt="Bill Gates" class="profile__wrapper__image">
            Spend Bill Gates' Money
    </div>
</div>
</template>

<script>
export default {
  name: 'Profile',
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.profile {
    background-color: $content-background-color;

    &__wrapper {
        font-size: 32px;
        margin-bottom: 10px;
        font-weight: bold;
        text-align: center;
        line-height: 1.6em;
        background: $content-background-color;
        padding: 30px 20px;

        &__image {
            display: block;
            margin-left: auto;
            margin-right: auto;
            margin-bottom: 25px;
            width: 125px;
            height: 125px;
            border-radius: 125px;
        }
    }
}
</style>
