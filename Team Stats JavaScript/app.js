const team = {
    _players: [
        {firstName: "John", lastName: "Jones", age: 26},
        {firstName: "James", lastName: "Smith", age: 21},
        {firstName: "Tom", lastName: "Tebow", age: 24}
    ],
    _games: [
        {opponent: "Broncos", teamPoints: 44, opponentPoints: 25},
        {opponent: "Tigers", teamPoints: 33, opponentPoints: 28},
        {opponent: "Bears", teamPoints: 34, opponentPoints: 37}
    ],

    get players(){
        return this._players;
    },

    get games(){
        return this._games;
    },

    addPlayer(firstName, lastName, age){
        let player = {
            firstName: firstName,
            lastName: lastName,
            age: age
        };
        this.players.push(player);
    },

    addGame(oppName, points, oppPoints){
        const game = {
            opponent: oppName,
            points: points,
            opponentPoints: oppPoints
        }
        this.games.push(game);

    }
};

team.addPlayer("Steph", "Curry", 27);
team.addPlayer("Bill", "Jones", 25);
team.addPlayer("Sam", "Smith", 23);

console.log(team.players);

team.addGame("Sea Lions", 100, 105);
team.addGame("Wolves", 55, 91);
team.addGame("Wolf Cats", 33, 42);

console.log(team.games);