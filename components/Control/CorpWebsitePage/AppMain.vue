<template>
  <section class="Main">
    <div class="container">
      <div class="Main__inner">
        <div class="Main__about">
          <h1 class="Main__title">
            Корпоративный сайт
          </h1>
          <div class="Main__desc">
            Уникальный корпоративный сайт - ключ к вашему успешному онлайн-присутствию! Мы в EduPartner предлагаем разработку современных и функциональных корпоративных сайтов, соответствующих вашим потребностям.
          </div>
          <div class="Main__btn">
            Заказать сайт
          </div>
        </div>
        <div class="Main__animation">
          <img src="../../../assets/images/control/corp-website/devices.png" alt="devices">
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
@import '~/assets/scss/variables.scss';
.Main{
  background: #1D1D1D;
}
.Main__inner {
  padding: 228px 0 235px 0;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  column-gap: 30px;
  .Main__about{
      max-width: 530px;
    .Main__title{
      font-family: $ff1;
      font-style: normal;
      font-weight: 700;
      font-size: 45px;
      line-height: 55px;
      color: #FFFFFF;
      padding-bottom: 37px;
    }
    .Main__desc{
      font-family: $ff2;
      font-style: normal;
      font-weight: 400;
      font-size: 20px;
      line-height: 24px;
      padding-bottom: 37px;
      color: #D4D4D4;
      max-width: 459px;
    }
    .Main__btn{
      font-family: $ff1;
      font-style: normal;
      font-weight: 600;
      font-size: 18px;
      line-height: 33px;
      color: rgba(29, 29, 29, 0.9);
      width: fit-content;
      padding: 10px 40px;
      background: #F9FF05;
      box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.15);
      border-radius: 50px;
    }
  }
  .Main__animation{
    max-width: 545px;
    height: auto;
    position: relative;
    &::before{
      content: '';
      position: absolute;
      width: 100%;
      height: 100%;
      background: rgba(250, 255, 0, 0.51);
      -webkit-filter: blur(150px);
      filter: blur(150px);
    }
    img{
      position: relative;
      z-index: 1;
    }
  }
}
@media (max-width: 1024px) {
  .Main__inner{
    column-gap: 10px;
    padding-bottom: 100px;
    .Main__about{
      .Main__title{
        padding-bottom: 31px;
      }
    }
    .Main__animation{
      max-width: 400px;
    }
  }
}
@media (max-width: 768px) {
  .Main__inner{
    column-gap: 0;
    position: relative;
    padding-top: 322px;
    .Main__about{
      max-width: 352px;
      .Main__title{
        position: absolute;
        top: 230px;
        left: 0;
        font-size: 40px;
        line-height: 55px;
      }
      .Main__desc{
        padding-bottom: 50px;
      }
    }
    .Main__animation{
      max-width: 330px;
    }
  }
}
@media (max-width: 480px) {
  .Main__inner{
    padding: 206px 0 100px 0;
    flex-wrap: wrap;
    row-gap: 48px;
    .Main__about{
      .Main__title{
        font-size: 36px;
        line-height: 55px;
        position: static;
      }
      .Main__desc{
        padding-bottom: 22px;
      }
    }
    .Main__animation{
      max-width: none;
    }
  }
}
@media (max-width: 360px) {
  .Main__inner{
    row-gap: 90px;
    .Main__about{
      .Main__title{
        font-size: 28px;
        padding-bottom: 45px;
      }
      .Main__desc{
        padding-bottom: 50px;
      }
      .Main__btn{
        width: 100%;
        text-align: center;
      }
    }
  }
}
</style>
