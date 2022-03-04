const path = require('path');
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');
const helpers = require('./utils/helpers');

// local connection
const app = express();
const PORT = process.env.PORT || 3001;

//sequelize connection
const sequelize = require('./config/config');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const sess = {
  secret: 'Super secret secret',
  cookie: {},
  resave: false,
  saveUninitialized: true,
  store: new SequelizeStore({
    db: sequelize
  })
};

app.use(session(sess));

//creation of helpers
const hbs = exphbs.create({ helpers });

//allows handlebars
app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');


//JSON
app.use(express.json());

//Allows changes
app.use(express.urlencoded({ extended: true }));

//sets file structure so when citing files in public, you can directly link the file not ../
app.use(express.static(path.join(__dirname, 'public')));

//requires controllers
app.use(require('./controllers/'));

//create listen and console log that app is working on local port
app.listen(PORT, () => {
  console.log(`App listening on port ${PORT}!`);
  sequelize.sync({ force: false });
});
