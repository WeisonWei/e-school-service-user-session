var names = db.getCollectionNames();

// -- Create Collections --
if (!names.includes('users')) {
    db.createCollection("users", {});
    print("create collection users");
}
if (!names.includes('logins')) {
    db.createCollection("logins", {});
    print("create collection logins");
}
// -----------------------------


// -- Create users indexes --
var usersIndexNames = db.users.getIndexes().map(function (i) {
    return i.name
});

if (!usersIndexNames.includes('unique_name_mobile')) {
    db.students.createIndex({
        "name": 1,
        "address": 1
    }, {
        name: "unique_name_mobile",
        background: true,
        unique: true
    });
    print('create users index unique_name_mobile');
}

// -- Create lgoins indexes --
var loginsIndexNames = db.lgoins.getIndexes().map(function (i) {
    return i.name
});

if (!loginsIndexNames.includes('unique_studentId_subject')) {
    db.lgoins.createIndex({
        "studentId": 1,
        "subject": 1
    }, {
        name: "unique_studentId_subject",
        background: true,
        unique: true
    });
    print('create lgoins index unique_studentId_subject');
}

// -----------------------------
// -- students data init --
// -----------------------------
var usersResult = db.users.findOne({"name": "Even"});
if (usersResult == null) {
    db.users.insert([  /* 1 */
        {
            "name" : "Even",
            "age" : 9.0,
            "sex" : "Male",
            "address" : "Xian",
            "hobbies" : [
                "YuWen",
                "English"
            ]
        },
        /* 2 */
        {
            "name" : "Weison",
            "age" : 10.0,
            "sex" : "Male",
            "address" : "Henan",
            "hobbies" : [
                "Wuli",
                "English"
            ]
        },
        /* 3 */
        {
            "name" : "Angule",
            "age" : 13,
            "sex" : "Female",
            "hobbies" : [
                "YuWen",
                "English"
            ],
            "address" : "Chengdu",
            "_class" : "com.wxx.sbm.domain.Student"
        }]);
}


var lgoinsResult = db.lgoins.findOne({"studentName": "Even"});
if (lgoinsResult == null) {
    db.lgoins.insert([/* 1 */
        {
            "studentId" : "5d48dc820fd614486f1c1f09",
            "subject" : "YuWen",
            "studentName" : "Weison",
            "subjectScore" : 90
        },
        /* 2 */
        {
            "studentId" : "5d48dc820fd614486f1c1f09",
            "subject" : "English",
            "studentName" : "Weison",
            "subjectScore" : 98
        },
        /* 3 */
        {
            "studentId" : "5d48dc820fd614486f1c1f09",
            "subject" : "ShuXue",
            "studentName" : "Weison",
            "subjectScore" : 59
        },
        /* 4 */
        {
            "studentId" : "5d48dc820fd614486f1c1f08",
            "subject" : "YuWen",
            "studentName" : "Even",
            "subjectScore" : 90
        },
        /* 5 */
        {
            "studentId" : "5d48dc820fd614486f1c1f08",
            "subject" : "English",
            "studentName" : "Even",
            "subjectScore" : 98
        },
        /* 6 */
        {
            "studentId" : "5d48dc820fd614486f1c1f08",
            "subject" : "ShuXue",
            "studentName" : "Even",
            "subjectScore" : 59
        },
        /* 7 */
        {
            "studentId" : "5d48f09b4cf1451aad930f54",
            "subject" : "YuWen",
            "studentName" : "Angule",
            "subjectScore" : 90
        },
        /* 8 */
        {
            "studentId" : "5d48f09b4cf1451aad930f54",
            "subject" : "English",
            "studentName" : "Angule",
            "subjectScore" : 98
        },
        /* 9 */
        {
            "studentId" : "5d48f09b4cf1451aad930f54",
            "subject" : "ShuXue",
            "studentName" : "Angule",
            "subjectScore" : 59
        }]);
}


