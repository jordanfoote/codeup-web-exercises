"use strict";

const users = [
    {
        id: 1,
        name: 'ryan',
        email: 'ryan@codeup.com',
        languages: ['clojure', 'javascript'],
        yearsOfExperience: 5
    },
    {
        id: 2,
        name: 'luis',
        email: 'luis@codeup.com',
        languages: ['java', 'scala', 'php'],
        yearsOfExperience: 6
    },
    {
        id: 3,
        name: 'zach',
        email: 'zach@codeup.com',
        languages: ['javascript', 'bash'],
        yearsOfExperience: 7
    },
    {
        id: 4,
        name: 'fernando',
        email: 'fernando@codeup.com',
        languages: ['java', 'php', 'sql'],
        yearsOfExperience: 8
    },
    {
        id: 5,
        name: 'justin',
        email: 'justin@codeup.com',
        languages: ['html', 'css', 'javascript', 'php'],
        yearsOfExperience: 9
    }
];

let filteredUsers = users.filter(function (user) {
    return user.languages.length >= 3;
});

filteredUsers.forEach(function (user){
    console.log(user.languages);
});

let mappedUsers = users.map(function (user) {
    return user.email;
});

mappedUsers.forEach(function (email) {
    console.log(email);
});

let totalYears = users.reduce(function (years, user) {
    return years + user.yearsOfExperience;
}, 0);

let average = totalYears / users.length;
console.log(average);

let longestEmail = users.reduce(function (longest, user) {
    if (user.email.length > longest.length) {
        longest = user.email;
    }

    return longest;
}, '');

console.log(longestEmail);

let instructors = users.reduce(function (result, user) {
    return result += user.name + ", ";
}, 'Instructors are: ');

console.log(instructors);

let languages = users.reduce(function (list, user) {
    user.languages.forEach(function (lang) {
        if (!list.includes(lang)) {
            list.push(lang);
        };
    });
    return list;
}, []);

console.log(languages);