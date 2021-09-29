let str1 = "You're catnip to a girl like me. Handsome, dazed, and to die for...";
let str2 = "Batman: \"I tried to save you.\"";
let str3 = "Selina Kyle: catwoman\"Mmm seemsCatwomanlike everyCatWomanwoman you try to save windsCatWOMANup dead... or deeply resentful.\" ";

alert(`${str1}
Length: ${str1.length}
Character number 2 is: ${str1.charAt(2)}
To uppercase ${str1.toUpperCase()}
Concatenation is phrase: ${str1.concat("- Catwoman")}
${'[Batman Returns] '.concat(str2)}
${str3.replace(/catwoman/gi, " ")}
`)


