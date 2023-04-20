<template>
  <section class="control">
    <div class="container">
      <div class="control__inner">
        <div class="control__title">
          Наши проекты под полным циклом управления:
        </div>
        <nuxt-link to="/">
          <div class="control__img">
            <img src="@/assets/images/main-page/drevo-ru.png" alt="drevo-ru">
            <div class="control__desc">
              Центр семейной родословной Галины Рублевой
            </div>
          </div>
        </nuxt-link>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
.control {
  background-color: #181816;
}
.control__inner {
  padding: 100px 0;
  a{
    display: block;
    width: fit-content;
  }
  .control__title {
    font-weight: 700;
    font-size: 40px;
    line-height: 55px;
    color: #FAFF00;
    padding-bottom: 74px;
  }
  .control__img {
    max-width: 480px;
    height: 300px;
    position: relative;
    transition: all .2s;
    &:hover{
      transform: scale(1.01);
    }
  }
  .control__desc {
    font-family: 'Lato', sans-serif;
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
    color: #FFFFFF;

    position: absolute;
    bottom: 34px;
    left: 39px;
    max-width: 391px;
  }
}
@media (max-width: 1024px) {
  .control__inner{
    padding-top: 150px;
    .control__title{
      font-size: 28px;
      line-height: 34px;
      padding-bottom: 50px;
    }
    .control__img{
      max-width: none;
      width: 416px;
      height: 217px;
    }
    .control__desc{
      bottom: 24px;
      left: 26px;
      max-width: 380px;
    }
  }
}
@media (max-width: 768px) {
  .control__inner{
    padding-top: 100px;
    .control__img {
      width: 354px;
      height: 217px;
      .control__desc{
        max-width: 310px;
      }
    }
  }
}
@media (max-width: 480px) {
  .control__inner{
    .control__title {
      line-height: 34px;
      padding-bottom: 54px;
    }
    .control__img {
      max-width: none;
      width: 100%;
      height: auto;
      .control__desc{
        font-size: 22px;
        line-height: 30px;
        max-width: 380px;
        bottom: 22px;
      }
    }
  }
}
@media (max-width: 360px) {
  .control__inner{
    .control__title {
      padding-bottom: 25px;
    }
    .control__img{
      .control__desc {
        font-size: 16px;
        bottom: 15px;
        left: 20px;
        max-width: 250px;
      }
    }
  }
}
</style>
