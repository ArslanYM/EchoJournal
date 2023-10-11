const express = require("express");
const session = require("express-session");
const cors = require("cors");
const mongoose = require("mongoose");

//db
const { User, Blog } = require("../db");

//passportJS
const passport = require("passport");
const LocalStrategy = require("passport-local");
//middlewares
const app = express();
app.use(cors());
app.use(express.json());
app.use(
  session({
    secret: "S3Cret",
    resave: false,
    saveUninitialized: true,
    cookie: { secure: false, maxAge: 6000 },
  })
);
//psp middlewares
app.use(passport.initialize());
app.use(passport.session());

// envs
const PORT = 3000;
const MONGO_URL = "mongodb+srv://ars:663663@blogapp.mbksvib.mongodb.net/";

//routes
app.get("/me", passport.authenticate("local"), (req, res) => {
  res.send(req.user._id);
});
app.get("/blogs", passport.authenticate("local"), async (req, res) => {
  const blogs = await Blog.find({});
  res.send(blogs);
});

app.post("/blogs", passport.authenticate("local"), async (req, res) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title, description } = req.body;

    const newBlog = new Blog({
      title,
      description,
      author: req.user,
    });

    const savedBlog = await newBlog.save();

    res.status(201).json(savedBlog);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Internal Server Error" });
  }
});

//->registation
app.post("/register", async (req, res, done) => {
  const { username, password } = req.body;
  const user = await User.findOne({ username });
  if (user) {
    res.status(400).json({ message: "Username Exists already" });
  } else {
    const newUser = new User({ username, password });
    await newUser.save();
    res.status(201).json({ message: "User Created successfully" });
    done(null, user);
  }
});

app.post("/login", passport.authenticate("local"), (req, res) => {
  res.send({ message: "Authenticated", user: req.user });
});
app.post("/logout", (req, res) => {
  req.logOut();
});

//strategy used for passport
passport.use(
  new LocalStrategy(async (username, password, done) => {
    const user = await User.findOne({ username: username });
    if (!user) {
      return done(null, false, { message: "Incorrect username" });
    }
    return done(null, user);
  })
);

passport.serializeUser((user, done) => {
  if (user) {
    return done(null, user.id);
  }
  return done(null, false);
});

passport.deserializeUser((user, done) => {
  User.findById(id, (err, user) => {
    if (err) return done(null, false);
    return done(null, user);
  });
});
//listen
mongoose
  .connect(MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: "blog",
  })
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on PORT ${PORT}`);
    });
  })
  .catch((e) => {
    console.error(e);
  });
