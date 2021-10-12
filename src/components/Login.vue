<template>
  <div class="container">
    <div class="card">
      <div class="title">
        <h1>Sign in to HairSalon<span>.</span></h1>
        <p>New here? <span> Create an account</span></p>
      </div>
      <div class="info">
        <p>E-mail</p>
        <input type="text" name="" id="" />
      </div>
      <div class="info">
        <p>Password</p>
        <input type="password" name="" id="" />
      </div>
      <router-link class="button" to="/Appointment">Sign in</router-link>
      <span class="forgot-password">Forgot your password?</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
}

.card {
  display: flex;
  flex-direction: column;
  background: #fff;
  max-width: 400px;
  width: 100%;
  height: 450px;
  border-radius: 15px;
  margin: 0 auto;
  padding: 50px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
}

.title {
  font-weight: bold;
  margin-bottom: 30px;
}

.title h1 {
  font-size: 28px;
}

.title p {
  font-size: 14px;
  margin-top: 10px;
}

.title span {
  color: #ff8811;
  cursor: pointer;
}

.info {
  margin-bottom: 25px;
}

.info p {
  font-size: 14px;
  opacity: 0.8;
  margin-bottom: 5px;
}

.info input {
  border: 1px solid #6b6b6b;
  border-radius: 5px;
  font-size: 16px;
  height: 40px;
  width: 100%;
  padding: 10px;
}

.button {
  margin-top: 10px;
  text-align: center;
  padding: 13px 30px;
  border-radius: 10px;
  background: #ff8811;
  color: #fff;
  font-weight: bold;
  font-size: 18px;
  box-shadow: 0px 3px 10px rgba(0, 0, 0, 0.15);
  cursor: pointer;
}

.button a {
  color: #fff;
  width: 100%;
  height: 100%;
}

.forgot-password {
  font-size: 12px;
  cursor: pointer;
  align-self: center;
  margin-top: 8px;
  color: #ff8811;
  font-weight: bold;
}

@media (max-width: 475px) {
  .container {
    padding: 20px;
  }

  .card {
    padding: 35px;
  }
}
</style>
