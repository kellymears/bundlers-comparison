let mix = require("laravel-mix");

mix
  .js("src/app.js", "dist/app/js")
  .css("src/app.css", "dist/app")

  .js("src/app2.js", "dist/app2/js")
  .css("src/app2.css", "dist/app2")

  .js("src/app3.js", "dist/app3/js")
  .css("src/app3.css", "dist/app3")

  .js("src/app4.js", "dist/app4/js")
  .css("src/app4.css", "dist/app4")

  .js("src/app5.js", "dist/app5/js")
  .css("src/app5.css", "dist/app5")

  .js("src/app6.js", "dist/app6/js")
  .css("src/app6.css", "dist/app6")

  .js("src/app7.js", "dist/app7/js")
  .css("src/app7.css", "dist/app7")

  .js("src/app8.js", "dist/app8/js")
  .css("src/app8.css", "dist/app8")

  .js("src/app9.js", "dist/app9/js")
  .css("src/app9.css", "dist/app9")

  .js("src/app10.js", "dist/app10/js")
  .css("src/app10.css", "dist/app10");
