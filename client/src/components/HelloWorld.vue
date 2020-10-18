<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <video style="width: 50%;" controls autoplay>
      <source src="../assets/Peer2Peer_Enterprise.mp4" type="video/mp4" />
      <!-- <source src="movie.ogg" type="video/ogg"> -->
      Your browser does not support the video tag.
    </video>

    <h2>
      Feel free to
    <a
      target="_blank"
      href="https://github.com/michael-spengler/p2p-enterprise"
      rel="noopener noreferrer"
    > fork the repo</a> and create a PR to contribute.

    </h2> 
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
