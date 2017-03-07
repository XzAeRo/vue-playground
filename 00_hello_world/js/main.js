var app = new Vue({
  el: '#declarative-rendering-app',
  data: {
    message: 'Hello Vue!'
  }
});

var app2 = new Vue({
  el: '#attribute-binding-app',
  data: {
    message: 'You loaded this page on ' + new Date()
  }
});

var app3 = new Vue({
  el: '#two-way-binding-app',
  data: {
    message: "You can change this text!"
  }
});