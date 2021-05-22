<template>
  <Layout>
      <div class="container">
          <div class="contact-header">
              <h1 class="contact-title">Say Hi</h1>
              <p>Leave me a note with any questions you might have, I'll get back to you as soon as possible.</p>
          </div>
          <form name="contact" class="contact-form">
              <div class="sender-info">
                  <div class="inputName">
                      <label for="name" class="label">Your name</label>
                      <input v-model="form.name" type="text" name="name" />
                  </div>
                  <div>
                      <label for="email" class="label">Your email</label>
                      <input v-model="form.email" type="email" name="email" />
                  </div>
              </div>
              <div class="message">
                  <label for="message" class="label">Message</label>
                  <textarea v-model="form.message" name="message"></textarea>
              </div>
              <button class="button" @click.prevent="onSubmit">Submit form</button>
          </form>
      </div>
  </Layout>
</template>

<script>
import axios from 'axios'

export default {
  name: 'ContactPage',
  data () {
      return {
          form: {
              name: '',
              email: '',
              message: ''
          }
      }
  },
  methods: {
    async onSubmit () {
      try {
          const { data } = await axios({
              method: 'POST',
              url:  `${this.GRIDSOME_API_URL}/contacts`,
              data: this.form
          })
          window.alert('发送成功')
      } catch (err) {
          console.log(err)
          window.alert('发送失败，请稍后重试')
      }
    }
  }
}
</script>

<style>
  .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 2rem;
  }
  .contact-header {
      padding: 2rem 0 4rem;
  }
  .contact-title {
      font-size: 4rem;
      margin: 0 0 4rem;
      padding: 0;
  }
  .sender-info {
      display: flex;
      flex-wrap: wrap;
      margin-bottom: 2rem;
  }
  .inputName {
      flex: 1;
      margin-right: 4rem;
  }
  .label {
      display: block;
      font-weight: 700;
      margin-bottom: .5rem;
  }
  input {
      background: transparent;
      border: 1px solid #f3f3f3;
      outline: none;
      border-radius: .3rem;
      padding: .8rem 1rem;
      color: inherit;
      font-size: 1rem;
      width: 100%;
  }
  textarea {
      resize: none;
      height: 140px;
      background: transparent;
      border: 1px solid #f3f3f3;
      outline: none;
      border-radius: .3rem;
      padding: .8rem 1rem;
      color: inherit;
      font-size: 1rem;
      width: 100%;
  }
  form {
      display: block;
      margin-top: 0em;
  }
  .button {
      color: #fff;
      background: #000;
      outline: none;
      border: 0;
      font-size: .8rem;
      padding: .8rem 1.6rem;
      border-radius: .3rem;
      margin-top: 2rem;
      cursor: pointer;
      transition: opacity .25 ease;
      letter-spacing: .035em;
  }
  p {
      line-height: 1.5;
      font-size: 1.15rem;
  }
</style>