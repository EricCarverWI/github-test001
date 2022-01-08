// ERIC CARVER 

function main (input){

    let pattern = /\b(?<Day>\d{2})([-| |.|\/])(?<Month>[A-Z][a-z]{2})(\2)(?<Year>\d{4})/gm;

    // let matches = input.match(pattern);

    // matches.forEach(element => {
    //     let [day, month, year] = element.split(/[.\-\/]/);
    //     console.log (`Day: ${day}, Month: ${month}, Year: ${year}`);
    // });

    let validDate = pattern.exec(input);

    while (validDate){
        console.log (`Day: ${validDate.groups.Day}, Month: ${validDate.groups.Month}, Year: ${validDate.groups.Year}`);
        validDate = pattern.exec(input);
    }
}
main ('03-Sep-1973, 8 Jul 2007, 08.Jun.1969, 123/788/20000, 27/Mar/1997, 28/-Aug/-2010');
// Day: 03, Month: Sep, Year: 1973
// Day: 08, Month: Jun, Year: 1969
// Day: 27, Month: Mar, Year: 1997