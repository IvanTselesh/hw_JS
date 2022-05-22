const subjects = {
    mathematics: {
        students: 200,
        teachers: 6
    },
    biology: {
        students: 120,
        teachers: 6
    },
    geography: {
        students: 60,
        teachers: 2
    },
    chemistry: {
        students: 100,
        teachers: 3
    }
};

//1
let SubjectsStr = Object.keys(subjects).toString();

//2
let sumMembers = 0;
Object.values(subjects).forEach((el) => (sumMembers += el.students + el.teachers));

//3
let sumAverage = 0;
Object.values(subjects).forEach((el) => (sumAverage += el.students));
sumAverage /= Object.keys(subjects).length;

//4 (не совсем понял условие задачи.
let child = Object.entries(subjects);


//5

let a = Object.keys(subjects).sort(function(a, b){
    if(a.teachers > b.teachers) {
        return 1;
    } if (a.teachers < b.teachers) {
        return -1
    } else {
        return 0
    }

});
