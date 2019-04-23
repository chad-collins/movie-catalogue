<template>
  <div class="about">
    <article>
      <p>&copy; 2019 Chad Collins</p>
      <p>
        Permission is hereby granted, free of charge, to any person obtaining a 
        copy of this software and associated documentation files (the "Software"),
        to deal in the Software without restriction, including without limitation 
        the rights to use, copy, modify, merge, publish, distribute, sublicense, 
        and/or sell copies of the Software, and to permit persons to whom the 
        Software is furnished to do so, subject to the following conditions:
        The above copyright notice and this permission notice shall be included 
        in all copies or substantial portions of the Software.
        THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
        IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
        FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL
        THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR
        OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE,
        ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR
        OTHER DEALINGS IN THE SOFTWARE.
      </p>
    </article>
    <div class="links-container">
      <img class="links-img" src="@/assets/images/GitHub-Mark-Light-32px.png" alt="Github logo">
      <img class="links-img" src="@/assets/images/npm.png" alt="npm logo">
      <img class="links-img" src="@/assets/images/vuelogo.png" alt="Vue.js logo">
      <img class="links-img" src="@/assets/images/nodejs.png" alt="Vue logo">
      <img class="links-img" src="@/assets/images/vscode.png" alt="Visual Studio Code logo">
      <p>Icons courtesty of material.io</p>
    </div>
  </div>
</template>

<script>
export default {
  name: "About"
};
</script>

<style scoped>

p {
  color: rgb(136, 136, 136);
}


.links-img {
  margin: 0.5rem;
}

.about {
  
}
</style>