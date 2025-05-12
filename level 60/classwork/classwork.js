let choise = prompt("enter coffe number:");

switch (choise) {
    case 1:
        console.log("americano:");
        break;
    case 2:
        console.log("espreso:");
        break;
    case 3:
        console.log("cappucino");
        break;
    default:
        console.log("unknown")
}

function getGrade(s1, s2, s3) {
    const avg = (s1 + s2 + s3) / 3;

    return avg >= 90 ? 'A' :
           avg >= 80 ? 'B' :
           avg >= 70 ? 'C' :
           avg >= 60 ? 'D' : 'F';
}
