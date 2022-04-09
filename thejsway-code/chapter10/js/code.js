// ******* Older movies *******
const movies = [
    {
        title: "Batman",
        year: 1989,
        director: "Tim Burton",
        imdbRating: 7.6
    },
    {
        title: "Batman Returns",
        year: 1992,
        director: "Tim Burton",
        imdbRating: 7.0
    },
    {
        title: "Batman Forever",
        year: 1995,
        director: "Joel Schumacher",
        imdbRating: 5.4
    },
    {
        title: "Batman & Robin",
        year: 1997,
        director: "Joel Schumacher",
        imdbRating: 3.7
    },
    {
        title: "Batman Begins",
        year: 2005,
        director: "Christopher Nolan",
        imdbRating: 8.3
    },
    {
        title: "The Dark Knight",
        year: 2008,
        director: "Christopher Nolan",
        imdbRating: 9.0
    },
    {
        title: "The Dark Knight Rises",
        year: 2012,
        director: "Christopher Nolan",
        imdbRating: 8.5
    }
];

const moviesBefore2000 = movies.filter(m => m.year < 2000).map(m => m.title);
console.log(moviesBefore2000);

// ******* Government forms *******
const governmentForms = [
    {
        name: "Plutocracy",
        definition: "Rule by the wealthy"
    },
    {
        name: "Oligarchy",
        definition: "Rule by a small number of people"
    },
    {
        name: "Kleptocracy",
        definition: "Rule by the thieves"
    },
    {
        name: "Theocracy",
        definition: "Rule by a religious elite"
    },
    {
        name: "Democracy",
        definition: "Rule by the people"
    },
    {
        name: "Autocracy",
        definition: "Rule by a single person"
    }
];

const formsEndingWithCy = governmentForms.filter(fo => fo.name.endsWith("cy")).map(fo => fo.name);
console.log(formsEndingWithCy);

// ******* Arrays sum *******
const arrays = [[1, 4], [11], [3, 5, 7]];
const sum = lst => {
    return lst.reduce((acc, value) => acc + value, 0);
}
const arraysSum = sum(arrays.map(a => sum(a)));
console.log(arraysSum); // Should show 31

// ******* Student results *******
const students = [
    {
        name: "Anna",
        sex: "f",
        grades: [4.5, 3.5, 4]
    },
    {
        name: "Dennis",
        sex: "m",
        country: "Germany",
        grades: [5, 1.5, 4]
    },
    {
        name: "Martha",
        sex: "f",
        grades: [5, 4, 2.5, 3]
    },
    {
        name: "Brock",
        sex: "m",
        grades: [4, 3, 2]
    }
];

// Compute female student results
// const femaleStudentsResults = [];
// for (const student of students) {
//     if (student.sex === "f") {
//         let gradesSum = 0;
//         for (const grade of student.grades) {
//             gradesSum += grade;
//         }
//         const averageGrade = gradesSum / student.grades.length;
//         femaleStudentsResults.push({
//             name: student.name,
//             avgGrade: averageGrade
//         });
//     }
// }

const average = array => array.reduce((sum, value) => sum + value, 0) / array.length;
const femaleStudentsResults = students.filter(s => s.sex === "f").map(s => (
    {
        name: s.name,
        avgGrade: average(s.grades)
    }
));
console.log(femaleStudentsResults);