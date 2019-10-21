<template>
  <section class="contact">
    <Title title="contact" subtitle="us" />
    <div class="center">
      <form action="https//formspree.io/shin.ctv72111@gmail.com" method="post" class="form">
        <div>
          <label for="name">name</label>
          <input type="text" name="name" id="name" class="formControl" placeholder="John Smith">
        </div>
        <div>
          <label for="email">email</label>
          <input type="email" name="email" id="email" class="formControl" placeholder="email@email.com">
        </div>
        <div>
          <label for="meassage">message</label>
          <textarea name="message" id="message" class="formControl" placeholder="hello there" />
        </div>
        <div>
          <input type="submit" value="submit here" class="submit">
        </div>
      </form>  
    </div>  
  </section>  
</template>

<style scoped>
.contact {
  padding: 4rem 0;
}
.center {
  width: 80vw;
  margin: 0 auto;
}
@media screen and (min-width: 992px) {
  .center {
    width: 50vw;
    margin: 0 auto;
  }
}
label {
  text-transform: capitalize;
  display: block;
  margin-bottom: 0.5rem;
}
.formControl,
.submit {
  width: 100%;
  font-size: 1rem;
  margin-bottom: 1rem;
  padding: 0.375rem 0.75rem;
  border: 1px solid var(--darkGrey);
  border-radius: 0.25rem;
}
.submit {
  background-color: var(--primaryColor);
  border-color: var(--primaryColor);
  text-transform: uppercase;
  color: var(--mainBlack);
  transition: var(--mainTransition);
  cursor: pointer;
}
.submit:hover {
  background: var(--darkGrey);
  color: var(--mainWhite);
  border-color: var(--darkGrey);
}
</style>
