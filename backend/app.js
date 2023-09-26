const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const cors = require('cors');




const app = express();
// app.use(cors(corsOptions));
app.use(cors());

app.use(bodyParser.json());



//Database

mongoose.connect("mongodb://127.0.0.1:27017/blogDB", {useNewUrlParser: true, useUnifiedTopology: true})//changing url for db
    .then( () => console.log("ConnectedToMongoDB"))
    .catch((err) => console.error(err));

//Creating schema

const blogPostSchema = new mongoose.Schema({
    title: String,
    content: String


});

const BlogPost = new mongoose.model("BlogPost", blogPostSchema);

// Route to render the HTML page

app.post("/api/saveBlogPost", (req, res) => {
    const {title, content} = req.body;

    const newBlogPost = new BlogPost({
        title, content
    });

    newBlogPost.save()
        .then((blogPost) => {
            console.log(blogPost);
            res.json(blogPost);
        })
        .catch((err) => {
            console.log(err);
            res.status(500).json({error: "An error occured"});

        });
});

app.get("/api/getBlogPosts", (req, res) => {
    BlogPost.find({})
      .then((blogPosts) => {
        res.json(blogPosts);
      })
      .catch((err) => {
        console.error("Error fetching blog posts from database:", err);
        res.status(500).json({ error: "An error occurred" });
      });
  });

app.listen(3001, function() {
    console.log("Server started on port 3001");
  });


    



































































































// //jshint esversion:6
// require('dotenv').config();
// const express = require("express");
// const bodyParser = require("body-parser");
// const ejs = require("ejs");
// const mongoose = require("mongoose");
// const session = require('express-session');
// const passport = require("passport");
// const passportLocalMongoose = require("passport-local-mongoose");
// const GoogleStrategy = require('passport-google-oauth20').Strategy;
// const findOrCreate = require('mongoose-findorcreate');

// const app = express();

// app.use(express.static("public"));
// app.set('view engine', 'ejs');
// app.use(bodyParser.urlencoded({
//   extended: true
// }));

// app.use(session({
//   secret: "Our little secret.",
//   resave: false,
//   saveUninitialized: false
// }));

// app.use(passport.initialize());
// app.use(passport.session());

// mongoose.connect("mongodb://127.0.0.1:27017/userDB", {useNewUrlParser: true});
// mongoose.set("useCreateIndex", true);

// const userSchema = new mongoose.Schema ({
//   email: String,
//   password: String,
//   googleId: String
// });
// const postSchema = new mongoose.Schema ({
//   title: String,
//   content: String
// });

// userSchema.plugin(passportLocalMongoose);
// userSchema.plugin(findOrCreate);

// const User = new mongoose.model("User", userSchema);
// const Post = new mongoose.model("Post", postSchema); 

// passport.use(User.createStrategy());

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });

// passport.deserializeUser(function(id, done) {
//   User.findById(id, function(err, user) {
//     done(err, user);
//   });
// });

// passport.use(new GoogleStrategy({
//     clientID: process.env.CLIENT_ID,
//     clientSecret: process.env.CLIENT_SECRET,
//     callbackURL: "http://localhost:3000/auth/google/blogs",
//     userProfileURL: "https://www.googleapis.com/oauth2/v3/userinfo"
//   },
//   function(accessToken, refreshToken, profile, cb) {
//     console.log(profile);

//     User.findOrCreate({ googleId: profile.id }, function (err, user) {
//       return cb(err, user);
//     });
//   }
// ));

// app.get("/", function(req, res){
//   res.render("home");
// });

// app.get("/auth/google",
//   passport.authenticate('google', { scope: ["profile"] })
// );

// app.get("/auth/google/blogs",
//   passport.authenticate('google', { failureRedirect: "/login" }),
//   function(req, res) {
//     // Successful authentication, redirect to blogs.
//     res.redirect("/blogs");
//   });

// app.get("/login", function(req, res){
//   res.render("login");
// });

// app.get("/register", function(req, res){
//   res.render("register");
// });

// app.get("/blogs", function(req, res){
//   User.find({"secret": {$ne: null}}, function(err, foundUsers){
//     if (err){
//       console.log(err);
//     } else {
//       if (foundUsers) {
//         res.render("blogs", {usersWithblogs: foundUsers});
//       }
//     }
//   });
// });

// app.get("/all", function(req, res){

//   Post.find({}, function(err, posts){
//     res.render("all", {
//       posts: posts
//       });
//   });
// });

// app.get("/submit", function(req, res){
//   if (req.isAuthenticated()){
//     res.render("submit");
//   } else {
//     res.redirect("/login");
//   }
// });

// app.post("/submit", function(req, res){
// //   const submittedSecret = req.body.secret;

// // //Once the user is authenticated and their session gets saved, their user details are saved to req.user.
// //   // console.log(req.user.id);

// //   User.findById(req.user.id, function(err, foundUser){
// //     if (err) {
// //       console.log(err);
// //     } else {
// //       if (foundUser) {
// //         foundUser.secret = submittedSecret;
// //         foundUser.save(function(){
// //           res.redirect("/blogs");
// //         });
// //       }
// //     }
// //   });
// const post = new Post({
//   title: req.body.postTitle,
//   content: req.body.postBody
// });


// post.save(function(err){
//   if (!err){
//       res.redirect("/blogs");
//   } else {
//     res.redirect("/");
//   }
// });
// });

// app.get("/posts/:postId", function(req, res){

//   const requestedPostId = req.params.postId;
  
//     Post.findOne({_id: requestedPostId}, function(err, post){
//       res.render("post", {
//         title: post.title,
//         content: post.content
//       });
//     });
  
//   });

// app.get("/logout", function(req, res){
//   res.redirect("/");
// });

// app.post("/register", function(req, res){

//   User.register({username: req.body.username}, req.body.password, function(err, user){
//     if (err) {
//       console.log(err);
//       res.redirect("/register");
//     } else {
//       passport.authenticate("local")(req, res, function(){
//         res.redirect("/blogs");
//       });
//     }
//   });

// });

// app.post("/login", function(req, res){

//   const user = new User({
//     username: req.body.username,
//     password: req.body.password
//   });

//   req.login(user, function(err){
//     if (err) {
//       console.log(err);
//     } else {
//       passport.authenticate("local")(req, res, function(){
//         res.redirect("/blogs");
//       });
//     }
//   });

// });







// app.listen(3000, function() {
//   console.log("Server started on port 3000.");
// });
