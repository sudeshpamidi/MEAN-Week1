var fs = require('fs');

var authorize = (username, password) => {
    let auth = false;
    var user = getUsers().find((o) => o.username === username && o.password === password);
    if (user) {
        auth = true;
    }
    return auth;
};

var getUsers = () => {
    try {
        var users = fs.readFileSync('./data/users.json');
        return JSON.parse(users);
    } catch (err) {
        return [];
    }
};

var insertUser = (username, password, email) => {
    let users = getUsers();
    let user = {
        username: username,
        password: password,
        email: email
    };

    var duplicateUser = users.filter((o) => {
        return (o.username === username || o.email === email);
    });
    console.log(duplicateUser);

    if (duplicateUser.length === 0) {
        users.push(user);
        saveUsers(users);
        return user;
    }
};
var saveUsers = (users) => {
    fs.writeFileSync('./data/users.json', JSON.stringify(users));
};
module.exports = { authorize, insertUser };