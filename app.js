const express = require("express");
const mongoose = require("mongoose")
const body = require("body-parser");
const app = express();
mongoose.connect("mongodb+srv://admin-sahilsinha:portfolio@cluster0.ego4z.mongodb.net/clientDB", {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
const clientSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  subject: [String],
  text: [String]
})
const Client = mongoose.model("Client", clientSchema);
app.use(express.static("public"));
app.use(body.urlencoded({
  extended: true
}));
app.get("/", function(req, res) {
  res.sendFile(__dirname + "/index.html");
})
app.post("/", function(req, res) {
  const name = req.body.name;
  const email = req.body.email;
  const subject = req.body.subject;
  const projectdetails = req.body.projectdetails;
  const clients = new Client({
    name: name,
    email: email,
    subject: subject,
    text: projectdetails
  })
  Client.findOne({
    email: email
  }, function(err , result) {
    if (!err) {
      if (!result) {
        clients.save();
        res.redirect("/");
      } else {
        result.subject.push(subject);
        result.text.push(projectdetails);
        result.save();
        res.redirect("/");
      }
    }
  })

})
app.post("/download", function(req, res) {
  res.sendFile(__dirname + "/public/SahilResume.pdf")
})
app.post("/certificates", (req, res) => {
  const button = req.body.button;
  switch (button) {
    case "web":
      res.sendFile(__dirname+"/public/certificates/web.pdf")

      break;
    case "python1":
      res.sendFile(__dirname+"/public/certificates/python1.pdf")

      break;
    case "python2":
      res.sendFile(__dirname+"/public/certificates/python2.pdf")

      break;
    case "python3":
      res.sendFile(__dirname+"/public/certificates/python3.pdf")

      break;
    case "training":
      res.sendFile(__dirname+"/public/certificates/training.pdf")

      break;
    default:

  }
})









app.listen(process.env.PORT || 3000, function() {
  console.log("Your server is on");
})
