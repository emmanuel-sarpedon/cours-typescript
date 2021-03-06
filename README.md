# Typescript

## Introduction

**Installation de `TypeScript`**

```bash
npm install -g typescript
```

**Compilation d'un fichier `TypeScript`**

```bash
tsc index
```

> un fichier index.js sera créé

**Quelques projets en `TypeScript`**

Librairies/Framework Front-End : Angular, React, Vue

Back-end : Nest, RxJS

API : Firebase

**Pourquoi typer JavaScript ?**

Le typage est l'association d'une variable et de son type

Par défaut, JavaScript a un typage dynamique, autrement dit, le type d'une variable peut évoluer au cours du script.

+ Avantages :
  + Flexibilité
  + Rapidité
+ Inconvénients :
  + Limitant pour code complexes notamment côté serveur
  + Une erreur de type peut bloquer l'exécution de toute l'application

L'avantage de TypeScript est de mettre en évidence les erreurs de typage lors de la compilation et du développement de notre application, et non plus lors de l'exécution de notre programme.

## Typer une variable

**Types primitifs** : Boolean, Null, Undefined, Number, String, Symbol

**Types objets natifs ou globaux**: Array, Function, Promise, Error

TyeScript implémente un type `any`, lorsque l'on ne souhaite pas typer une variable ou qu'on ne connait pas à l'avance le type de notre variable

**Définition littérale**

```typescript
let newUser: {
  name: String;
  age: Number;
  student: Boolean;
};

newUser = {
  name: "Manu",
  age: 26,
  student: true,
};
```

**Les interfaces**

> Metadata qui décrivent la structure des données. Une interface impose une structure à une variable

```typescript
interface UserInterface {
  name: string;
  age: number;
  student: boolean;
}

let newUser: UserInterface = {
  name: "Manu",
  age: 26,
  student: true,
};
```

**Les classes**

```typescript
class User {
  name: string;
  age: number;
  student: boolean;
  gender?: string; // facultatif "?"

  constructor(name: string, age: number, student: boolean, gender?: string) {
    this.name = name;
    this.age = age;
    this.student = student;
    this.gender = gender;
  }
}

let firstUser = new User("Manu", 26, true, "male");

let secondUser = new User("John", 42, false); // paramètre "gender" non renseigné

```



> Les classes peuvent faire appel aux interfaces grâce au mot clé `implements` :
>
> ```typescript
> interface UserInterface {
>   name: string;
>   age: number;
>   student: boolean;
>   gender?: string;
> }
> 
> class User implements UserInterface {
>   name: string;
>   age: number;
>   student: boolean;
>   gender?: string; // facultatif "?"
> 
>   constructor(name: string, age: number, student: boolean, gender?: string) {
>     this.name = name;
>     this.age = age;
>     this.student = student;
>     this.gender = gender;
>   }
> }
> 
> let firstUser = new User("Manu", 26, true, "male");
> 
> let secondUser = new User("John", 42, false);
> ```

**Classe ou interface ?**

Objectif :

	- interface : création d'un contrat
	- classe : création d'un nouvel objet

Code interface disparaît à la compilation

## Créer un projet TypeScript

**Exemple de hiérarchisation de dossier minimaliste**

```bash
proj/
	|- src/ #source à compiler
	|- dist/ #destination
```

**Projet avec Gulp**

Installation des dépendances

```bash
npm i -g gulp-cli
npm i --save-dev gulp 
npm i --save-dev typescript gulp-typescript

#-g installe les dépendances de manière globale sur la machine, et non seulement dans l'application

# *-cli donne accès à des commandes supplémentaires directement dans le terminal

#--save-dev exclut les dépendances de la compilation pour la mise en production de l'application
```

Configuration Gulp-stream

```javascript
// Dépendances
const gulp = require("gulp");
const ts = require("gulp-typescript");

gulp.task("default", () => { //callback de la commande gulp
  return gulp
    .src("src/main.ts") // définition du fichier source à compiler
    .pipe(
      ts({
        noImplicitAny: true,
        outFile: "main.js",
      })
    )
    .pipe(gulp.dest("dist")); // définition du fichier de destination
});
```

Si tout fonctionne, on a ce résultat dans la console :

```bash
**@MacbookAir first-tsc-app % gulp 
[17:19:38] Using gulpfile ~/Documents/01-DEV/1-Fiches/cours-typescript/ressources/first-tsc-app/gulpfile.js
[17:19:38] Starting 'default'...
[17:19:46] Finished 'default' after 7.98 s
```















