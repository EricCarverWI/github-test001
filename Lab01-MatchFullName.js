// ERIC CARVER 

function main (input){

    let pattern = /\b[A-Z][a-z]+ [A-Z][a-z]+\b/gm;

    console.log (input.match(pattern).join(' '));
}

main ('Chloe Price, KaTe Marsh, Max Caulfield, Victoria CHase, WARren Graham, Rachel Amber, nathan prescott, Steph Gingrich, MIKEY NORTH')