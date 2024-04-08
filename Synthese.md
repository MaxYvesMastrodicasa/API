# A rendre

Une API REST avec NodeJS et ExpressJS :

- [ ] Créer un projet NodeJS
- [ ] Installer ExpressJS
- [ ] Creer un serveur ExpressJS
- [ ] Installer Mongoose et se connecter à une base de données MongoDB
- [ ] Organiser son projet avec des routes et des middlewares
- [ ] Utiliser le pattern MVC
- [ ] Créer une authentification avec JWT
- [ ] Proteger une route (creation d'un middleware qui verifie le token)
- [ ] Mettre en place une API DOC avec Swagger
- [ ] Gerer les erreurs avec un middleware

Vous penserez a faire des commits réguliers et à commenter votre code. La redaction d'un README.md est obligatoire.

# API avec Node JS

## Introduction

Une API Rest est une interface de programmation qui permet de communiquer avec une application. Elle permet de récupérer des données, de les modifier ou de les supprimer. Elle est basée sur le protocole HTTP et utilise les verbes HTTP (GET, POST, PUT, DELETE) pour effectuer des actions.

NodeJS est un environnement d'exécution JavaScript construit sur le moteur JavaScript V8 de Chrome. Il permet d'exécuter du JavaScript côté serveur. Il est basé sur un modèle d'entrée/sortie asynchrone et événementiel. Il est donc très performant pour les applications qui manipulent de nombreuses connexions simultanées.

## Installation

Pour installer NodeJS, il suffit de télécharger le fichier d'installation sur le site officiel : https://nodejs.org/en/download/

## Création d'un projet

Pour créer un projet NodeJS, il faut créer un dossier et initialiser le projet avec la commande `npm init`. Cela va créer un fichier `package.json` qui contient les informations du projet et les dépendances.

## Installation des dépendances

Pour installer des dépendances, il faut utiliser la commande `npm install <nom du package>`. Cela va installer le package dans le dossier `node_modules` et ajouter une entrée dans le fichier `package.json`.

## Lancer le projet

Pour lancer le projet, il faut utiliser la commande `node <nom du fichier>`. Cela va lancer le fichier JavaScript et exécuter le code.

## Express

Express est un framework pour NodeJS qui permet de créer des applications web. Il permet de créer des routes, de gérer les requêtes et les réponses, de gérer les sessions, etc.

Pour installer Express, il faut utiliser la commande `npm install express`.

Pour utiliser Express, il faut l'importer dans le fichier JavaScript avec la commande `const express = require('express')`.

Pour créer une application Express, il faut utiliser la commande `const app = express()`.

Pour créer une route, il faut utiliser la commande `app.get(<url>, <callback>)`. Le callback prend en paramètre la requête et la réponse. Il est possible d'utiliser les verbes HTTP (GET, POST, PUT, DELETE) pour créer des routes.

Pour lancer l'application, il faut utiliser la commande `app.listen(<port>, <callback>)`. Le callback est optionnel et permet d'exécuter du code lorsque le serveur est lancé.

## Mongoose

Mongoose est un ORM (Object Relational Mapping) pour NodeJS. Il permet de manipuler des données dans une base de données MongoDB.

Pour installer Mongoose, il faut utiliser la commande `npm install mongoose`.

Pour utiliser Mongoose, il faut l'importer dans le fichier JavaScript avec la commande `const mongoose = require('mongoose')`.

Pour se connecter à une base de données MongoDB, il faut utiliser la commande `mongoose.connect(<url>, <options>, <callback>)`. Le callback est optionnel et permet d'exécuter du code lorsque la connexion est établie.

Pour créer un modèle, il faut utiliser la commande `const <nom du modèle> = mongoose.model(<nom du modèle>, <schéma>)`. Le schéma est un objet qui définit les propriétés du modèle.

Pour créer un document, il faut utiliser la commande `const <nom du document> = new <nom du modèle>(<données>)`. Les données sont un objet qui contient les propriétés du document.

Pour sauvegarder un document, il faut utiliser la commande `<nom du document>.save(<callback>)`. Le callback est optionnel et permet d'exécuter du code lorsque le document est sauvegardé.

Pour récupérer des documents, il faut utiliser la commande `<nom du modèle>.find(<conditions>, <callback>)`. Les conditions sont un objet qui permet de filtrer les documents. Le callback est optionnel et permet d'exécuter du code lorsque les documents sont récupérés.

## Exemple

```javascript
const express = require("express");
const mongoose = require("mongoose");

const app = express();

mongoose.connect(
  "mongodb://localhost:27017/test",
  { useNewUrlParser: true },
  () => {
    console.log("Connected to database");
  }
);

const User = mongoose.model("User", {
  name: String,
  age: Number,
});

const user = new User({
  name: "John",
  age: 30,
});

user.save(() => {
  console.log("User saved");
});

app.get("/", (req, res) => {
  User.find({}, (err, users) => {
    res.send(users);
  });
});

app.listen(3000, () => {
  console.log("Server started");
});
```

## Sources

- https://nodejs.org/en/
- https://expressjs.com/

# Le standard REST

## Introduction

REST (Representational State Transfer) est un style d'architecture qui permet de créer des services web. Il est basé sur le protocole HTTP et utilise les verbes HTTP (GET, POST, PUT, DELETE) pour effectuer des actions.

## Ressources

Une ressource est une entité qui peut être manipulée par l'API. Elle est identifiée par une URI (Uniform Resource Identifier).

## Verbes HTTP

Les verbes HTTP permettent d'effectuer des actions sur les ressources.

- GET : Récupérer une ressource
- POST : Créer une ressource
- DELETE : Supprimer une ressource
- PUT : Modifier une ressource
- OPTIONS : Récupérer les options de la ressource
- etc.

## Codes HTTP

Les codes HTTP permettent de définir le statut de la requête.

- 1xx : Information
- 2xx : Succès
- 3xx : Redirection
- 4xx : Erreur client
- 5xx : Erreur serveur
- Custom : Erreur spécifique

# Les middlewares

Avec ExpressJS il est possible de créer des middlewares. Un middleware est une fonction qui est exécutée avant ou après une route. Il permet de modifier la requête ou la réponse, d'exécuter du code, etc.

## Création d'un middleware

Pour créer un middleware, il faut utiliser la commande `app.use(<callback>)`. Le callback prend en paramètre la requête, la réponse et la fonction `next`. Il est possible d'utiliser les verbes HTTP (GET, POST, PUT, DELETE) pour créer des middlewares.

## Exemple

```javascript
const express = require("express");

const app = express();

app.use((req, res, next) => {
  console.log("Middleware");
  next();
});

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started");
});
```

Tout est middleware dans ExpressJS. Les routes sont des middlewares. Il est possible de créer des middlewares qui sont exécutés avant ou après une route.

# Creation de routes

Avec ExpressJS il est possible de créer des routes. Une route est une fonction qui est exécutée lorsqu'une requête est effectuée sur une URI. Elle permet de récupérer des données, de les modifier ou de les supprimer.

## Création d'une route

Pour créer une route, il faut utiliser la commande `app.get(<url>, <callback>)`. Le callback prend en paramètre la requête et la réponse. Il est possible d'utiliser les verbes HTTP (GET, POST, PUT, DELETE) pour créer des routes.

## Exemple

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send("Hello World");
});

app.listen(3000, () => {
  console.log("Server started");
});
```

# Les paramètres

Avec ExpressJS il est possible de récupérer des paramètres dans une route. Un paramètre est une valeur qui est passée dans l'URI. Il permet de récupérer des données, de les modifier ou de les supprimer.

## Récupération d'un paramètre

Pour récupérer un paramètre, il faut utiliser la commande `req.params.<nom du paramètre>`. Le paramètre est un objet qui contient les paramètres.

## Exemple

```javascript
const express = require("express");

const app = express();

app.get("/:name", (req, res) => {
  res.send(`Hello ${req.params.name}`);
});

app.listen(3000, () => {
  console.log("Server started");
});
```

# Les query strings

Avec ExpressJS il est possible de récupérer des query strings dans une route. Un query string est une valeur qui est passée dans l'URI. Il permet de récupérer des données, de les modifier ou de les supprimer.

## Récupération d'un query string

Pour récupérer un query string, il faut utiliser la commande `req.query.<nom du query string>`. Le query string est un objet qui contient les query strings.

## Exemple

```javascript
const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.send(`Hello ${req.query.name}`);
});

app.listen(3000, () => {
  console.log("Server started");
});
```

# Les formulaires

Avec ExpressJS il est possible de récupérer des données d'un formulaire dans une route. Un formulaire est une interface qui permet de récupérer des données. Il permet de récupérer des données, de les modifier ou de les supprimer.

## Récupération des données d'un formulaire

Pour récupérer les données d'un formulaire, il faut utiliser la commande `app.use(express.urlencoded({ extended: true }))`. Cela va ajouter les données du formulaire dans la requête.

## Exemple

```javascript
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post("/", (req, res) => {
  res.send(`Hello ${req.body.name}`);
});

app.listen(3000, () => {
  console.log("Server started");
});
```

# La validation de donnees de formulaires avec express-validator

Avec ExpressJS il est possible de valider des données d'un formulaire dans une route. Un formulaire est une interface qui permet de récupérer des données. Il permet de récupérer des données, de les modifier ou de les supprimer.

## Installation

Pour installer express-validator, il faut utiliser la commande `npm install express-validator`.

## Importation

Pour utiliser express-validator, il faut l'importer dans le fichier JavaScript avec la commande `const { check, validationResult } = require('express-validator')`.

avec la syntaxe ES6, il faut utiliser la commande `import { check, validationResult } from 'express-validator'`.

## Validation des données d'un formulaire

Pour valider les données d'un formulaire, il faut utiliser la commande `check(<nom du champ>).<validation>()`. Cela va ajouter les données du formulaire dans la requête.

## Exemple

```javascript
const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.post(
  "/",
  [
    check("name").isLength({ min: 3 }),
    check("email").isEmail(),
    check("age").isNumeric(),
  ],
  (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(422).json({ errors: errors.array() });
    }
    res.send(`Hello ${req.body.name}`);
  }
);

app.listen(3000, () => {
  console.log("Server started");
});
```
