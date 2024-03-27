    // start with strings, numbers and booleans
    //let age = 100;
    //let age2 = age;
    //console.log(age, age2);
    //age = 200;
    //console.log(age, age2);

    //let name = "wes";
    //let name2 = name;
    //console.log(name, name2);
    //name = "kim";
    //console.log(name, name2);


    // Let's say we have an array
    const players = ['Wes', 'Sarah', 'Ryan', 'Poppy'];

    // and we want to make a copy of it.
    const team = players;
    console.log(team);

    // You might think we can just do something like this:
    team[3] = 'Lux';
    console.log(players, team);

    // however what happens when we update that array?
    // - It is tracing all the back to the original array and changing it, !!!!!!!
    // now here is the problem!
    // oh no - we have edited the original array too!
    // Why? It's because that is an array reference, not an array copy. They both point to the same array!
    // So, how do we fix this? We take a copy instead!
    const team2 = players.slice();
    // one way
    // or create a new array and concat the old one in
    const team3 = [].concat(players);
    // or use the new ES6 Spread
    const team4 = [...players];
    //or 
    const team5 = Array.from(players);
    // now when we update it, the original one isn't changed


    // The same thing goes for objects, let's say we have a person object


    // with Objects
    const person = {
      name: 'Wes Bos',
      age: 80
    };

    // and think we make a copy: THIS IS EDITING THE ORIGINAL OBJECT
    const captain = person;
    captain.number = 99;
    console.log(captain, person);

    // how do we take a copy instead?
    // first: empty object, Second: copy object from, Third: our changement in the copied object
    const captain2 = Object.assign({}, person, { number: 100});

    // We will hopefully soon see the object ...spread
    const captain3 = {...person};

    // Things to note - this is only 1 level deep - both for Arrays and Objects. lodash has a cloneDeep method, but you should think twice before using it.
    const wes = {
      name: 'wes',
      age: 100,
      social: {
        twitter: '@wesbos',
        facebook: 'webbos@face'
      }
    };

    // YOU CANNOT COPY OR CLONE THE WHOLE FIN, ONLY FIRST LEVEL WITH THE ABOVE ASSIGN TECHNIC.

    // TIPS AND TRIX for CLONE
    // This make it to a string, and then object again with a clone and passed it dev variable
    const dev = JSON.parse(JSON.stringify(wes));
    console.log(dev);
