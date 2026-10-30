function runVarLab() {

    var studentName = "Rahul";
    var studentAge = 25;

    document.write("<h1>VAR LAB</h1>");

    document.write("<h3>Initial Values</h3>");

    document.write("Student Name: " + studentName + "<br>");

    document.write("Student Age: " + studentAge + "<br><br>");

    document.write("Observe the student name before it is changed.<br><br>");

    studentName = "Ritesh Kumar";

    document.write("<h3>Updated Value</h3>");

    document.write("Updated Student Name: " + studentName);

    alert("VAR Experiment Completed!");
}

function runLetLab() {

    let score = 75;

    document.write("<h1>LET LAB</h1>");

    document.write("Initial Score: " + score + "<br><br>");

    document.write("Observe the score before it is changed.<br><br>");

    score = 95;

    document.write("<h3>Updated Score</h3>");

    document.write("New Score: " + score);

    alert("LET Experiment Completed!");
}

function runConstLab() {

    const courseName = "JavaScript";

    document.write("<h1>CONST LAB</h1>");

    document.write("Course Name: " + courseName);

    alert("A const variable cannot be reassigned!");
}

function runUndefinedLab() {

    var studentAge;

    document.write("<h1>UNDEFINED LAB</h1>");

    document.write("Student Age: " + studentAge + "<br>");

    document.write("Type of Student Age: " + typeof studentAge);

    alert("A declared but uninitialized variable has the value undefined.");
}

function runScopeLab() {

    var message = "This variable is declared outside the if block.";

    if (true) {

        var firstValue = "Iam VAR variable inside a block.";

        let secondValue = " Iam LET Variable inside the block.";

        document.write("<h1>SCOPE LAB</h1>");

        document.write("<h3>Inside If Block</h3>");

        document.write("First Value: " + firstValue + "<br>");

        document.write("Second Value: " + secondValue + "<br><br>");
    }

    document.write("<h3>Outside If Block</h3>");

    document.write("Message: " + message + "<br>");

    document.write("First Value: " + firstValue + "<br>");

    alert("var is function-scoped, whereas let is block-scoped.");
}


function runHoistingLab() {

    document.write("<h1>HOISTING LAB</h1>");

    document.write("Student Age Before Initialization: " + studentAge + "<br><br>");

    var studentAge = 25;

    document.write("Student Age After Initialization: " + studentAge);

    alert("The var declaration is hoisted, but its initialization is not.");
}
