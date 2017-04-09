MongoDB Nodejs Native Driver
http://mongodb.github.io/node-mongodb-native/2.2/api/index.html

Search: Mongodb Update operators
https://docs.mongodb.com/manual/reference/operator/update/

Mongoose Docs
http://mongoosejs.com/docs/guide.html
Validator
http://mongoosejs.com/docs/validation.html
Schema's
http://mongoosejs.com/docs/guide.html

PostMan
http://getpostman.com

HTTP Statuses
http://httpstatuses.com

//Model creation Examples

// newTodo.save().then((doc) => {
//   console.log('Saved Todo', doc);
// }, (e) => {
//   console.log('Unable to save todo')
// });
//
// var nextTodo = new Todo({
//   text: "Make Breakfast",
// });
//
// nextTodo.save().then((doc) => {
//   console.log(JSON.stringify(doc, undefined, 2));
// }, (err) => {
//   console.log('Unable to save Todo', err);
// })
// var newUser = new User({
//   name: '    Edward',
//   email: '  edward@echeadle.info  '
// });

// newUser.save().then((user) =>{
//   console.log(JSON.stringify(user, undefined, 2));
// }, (err) => {
// console.log('Cannot add user', err);
// });

$heroku logs
$git push heroku master
$heroku create
Creating app... done, ⬢ lit-dawn-93034
https://lit-dawn-93034.herokuapp.com/ | https://git.heroku.com/lit-dawn-93034.git

$heroku addons:create mongolab:sandbox
Creating mongolab:sandbox on ⬢ lit-dawn-93034... free
Welcome to mLab.  Your new subscription is being created and will be available shortly.  Please consult the mLab Add-on Admin UI to check on its progress.
Created mongolab-solid-83509 as MONGODB_URI
Use heroku addons:docs mongolab to view documentation

$heroku config
=== lit-dawn-93034 Config Vars
MONGODB_URI: mongodb://heroku_8s2jfv1n:pb6nl9kiomn71b576p52qirsfo@ds157278.mlab.com:57278/heroku_8s2jfv1n
