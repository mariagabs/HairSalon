<template>
  <div>
    <nav class="nav">
      <div class="header">
        <a class="nav-logo" href="/">HairSalon<span>.</span></a>
      </div>
    </nav>
    <div class="container-intro">
      <div class="intro">
        <h1>
          Viva uma nova <span>experiência</span> com a HairSalon<span>.</span>
        </h1>
        <p>
          Conheça nossos profissionais e entregue-se a um atendimento único e
          personalizado. Agende online nossos serviços de beleza mais próximos
          de você.
        </p>
        <router-link class="intro-button" to="/Login">Agendar</router-link>
      </div>

      <img class="image-intro" src="../assets/image.png" alt="" />
    </div>
    <div class="price">
      <h1>
        We offer our clients a wide range of <span>professional</span> haircuts
        and hairstyles<span>.</span>
      </h1>
      <ul class="price-list">
        <li>
          <span>Women's Cut</span><span>R$ 40,00</span>
          <p>
            Types of haircut: Short, Medium, Long, Layered, Bob, Shag, Curly,
            Straight, with Bangs, for Thin Hair, for Thick Hair, Pixie and for
            Women Over 50
          </p>
        </li>
        <li>
          <span>Men's Cut</span><span>R$ 30,00</span>
          <p>
            We have haircuts for Wavy, Thin and Thick Hair and for Receding
            Hairline
          </p>
        </li>
        <li>
          <span>Shampoo Style</span><span>R$ 35,00</span>
          <p>
            A standard haircut, or a Shampoo/Cut/Blowdry, is a service in which
            the hair is cleansed and conditioned, then the cut is performed on
            wet hair.
          </p>
        </li>
        <li>
          <span>Single Process Color</span><span>R$ 60,00</span>
          <p>
            A single process refers to any color service that is done in one
            step. This is generally a permanent color that is applied either jus
            to the roots or all over from roots to ends.
          </p>
        </li>
        <li>
          <span>Half Head Highlight</span><span>R$ 80,00</span>
          <p>
            Generally placed around the top half of the hair, focusing on the
            front sections and mohawk section of hair around your face and
            parting.
          </p>
        </li>
        <li>
          <span>Full Head Highlight</span><span>R$ 100,00</span>
          <p>
            If you’re looking to go significantly lighter, full highlights will
            help get you there. While partial highlights are great for a subtle
            lightening effect, if you’re hoping for a more dramatic colour
            transformation such as going from brunette to blonde, we’d recommend
            full highlights.
          </p>
        </li>
        <li>
          <span>Smoothing Treatment Semi-Permanent</span><span>R$ 300,00</span>
          <p>
            Semi-permanent hair straightening lasts 3 to 4 months before your
            natural hair texture starts to reappear. Home hair straightening
            kits don't often last longer than 6 weeks.
          </p>
        </li>
        <li>
          <span>Formal Style</span><span>R$ 45,00</span>
          <p>
            Formal High Ponytail, French Braid with a Bun, High Updo, French
            Thick Formal Braid, Jumbo Formal Braids, Half Updo for Long Hair,
            Four Strand Braid, Formal Hairstyle with Low Bun
          </p>
        </li>
        <li>
          <span>Hair Extensions</span><span>R$ 150,00</span>
          <p>
            Some women also have a hard time growing their hair out once it hits
            a certain length. Hair extensions help them reach their desired
            length.
          </p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style scoped>
.nav {
  display: flex;
  padding: 60px 0 10px 0;
  width: 100%;
  position: absolute;
}

.nav-logo {
  font-size: 44px;
  font-weight: bold;
  color: #fff;
}

.nav-logo span {
  color: #ff8811;
}

.header {
  display: flex;
  margin: 0 180px;
  align-items: center;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.container-intro {
  display: flex;
  align-items: center;
  padding: 0 180px;
  margin-bottom: 50px;
  width: 100%;
  height: 100vh;
  justify-content: space-between;
}

.image-intro {
  max-width: 700px;
  width: 100%;
  margin-left: 10%;
}

.intro {
  width: 35%;
  margin-top: 150px;
}

.intro h1 {
  color: #fff;
  font-size: 36px;
  margin-bottom: 15px;
}

.intro h1 span {
  color: #ff8811;
}

.intro p {
  color: #fff;
  opacity: 0.5;
  font-size: 16px;
  margin-bottom: 45px;
}

.intro-button {
  background: #ff8811;
  background: linear-gradient(
    90deg,
    rgba(255, 136, 17, 1) 0%,
    rgba(248, 82, 141, 1) 100%
  );
  padding: 15px 55px;
  border-radius: 15px;
  cursor: pointer;
  font-size: 18px;
  margin-top: 40px;
  font-weight: bold;
  width: fit-content;
  color: #fff;
}

.intro-button a {
  color: #fff;
}
.price {
  display: flex;
  padding: 0 180px;
  padding-top: 80px;
  background: #7a54bb;
  height: 100vh;
  flex-direction: column;
}
.price h1 {
  color: #fff;
}
.price h1 span {
  color: #fc7f2d;
}
ul.price-list {
  width: 100%;
  max-width: 800px;
  padding: 0;
  overflow-x: hidden;
  overflow: hidden;
  list-style: none;
  align-self: center;
  margin-top: 50px;
  font-size: 18px;
  color: #fff;
}
ul.price-list li {
  padding: 10px 0;
}
ul.price-list p {
  font-size: 16px;
  opacity: 0.6;
  margin-top: 5px;
}
ul.price-list li:before {
  float: left;
  width: 0;
  font-weight: bold;
  white-space: nowrap;
  content: ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . "
    ". . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . . .";
}
ul.price-list span:first-child {
  padding-right: 0.33em;
  background: #7a54bb;
}
ul.price-list span + span {
  float: right;
  padding-left: 0.33em;
  background: #7a54bb;
}
@media (max-width: 1230px) {
  .container-intro {
    padding: 100px;
  }

  .price {
    padding: 100px;
  }

  .price h1 {
    font-size: 26px;
  }
  .price p {
    font-size: 14px;
  }
  .header {
    margin: 0 100px;
  }

  .nav-logo {
    font-size: 32px;
  }
  .intro h1 {
    font-size: 26px;
  }

  .intro p {
    font-size: 14px;
  }

  .intro-button {
    font-size: 16px;
    padding: 10px 50px;
  }

  .image-intro {
    width: 70%;
    margin: 0;
  }
}

@media (max-width: 820px) {
  .container-intro {
    padding: 50px;
  }

  .price {
    padding: 50px;
  }

  .price h1 {
    font-size: 24px;
  }
  .price p {
    font-size: 12px;
  }
  .header {
    margin: 0 50px;
  }

  .image-intro {
    width: 60%;
  }

  .nav-logo {
    font-size: 32px;
  }
  .intro h1 {
    font-size: 24px;
  }

  .intro p {
    font-size: 12px;
  }
}

@media (max-width: 685px) {
  .container-intro {
    flex-direction: column-reverse;
    align-items: center;
    justify-content: center;
  }

  .image-intro {
    width: 100%;
  }

  .intro {
    width: 90%;
    margin-top: 50px;
  }
  ul.price-list {
    overflow-y: scroll;
  }
}

@media (max-width: 475px) {
  .container-intro {
    padding: 20px;
  }

  .image-intro {
    margin-top: 60px;
  }

  .intro {
    margin-top: 50px;
  }
  ul.price-list {
    overflow-y: scroll;
  }
}
</style>
