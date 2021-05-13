// import functions and grab DOM elements
const quizButton = document.getElementById('launch-quiz');
const secretDiv = document.getElementById('secret-div');

// initialize state

// set event listeners to update state and DOM
quizButton.addEventListener('click', () => {
    // PSEUDOCODE
    // - launch an alert
    alert('Welcome to my quiz!');
    // - launch a confirmation
    const confirmation = confirm('Do you want to proceed?');
    //     - if the user says no, nothing else happens (`return` nothing to break out of the cool zone)
    if (!confirmation) {
    // if (confirmation === false) {

        // return just ENDS THINGS
        return;
    }

    //     - if the user says yes, launch the series of propmts
    // - launch a first name prompt
    const firstName = prompt('What is your first name?');
    //     - store that output to display later
    // - launch a last name prompt
    const lastName = prompt('What is your last name?');
    //     - store that output to display later
    // - launch quiz prompts with 3 specific yes/no questions
    const firstAnswer = prompt('Was the first patent for a rollercoaster issued in 1885?');

    if (firstAnswer.charAt(0).toUpperCase() === 'Y') {
        // validation step!
        console.log('you got it!');
    } else {
        // validation step!
        console.log('failed!');
    }
    
    // TRACK OVER TIME === LET (state)
    // we need to to ____track over time_____ how many correct answers the user got . . .
        // why? we want to show the user their score at the end

        // - how do we evaluate the answers?
    //     - what counts as a yes?
    //         - anything that starts with a y counts as a yes
    // - make a results string
    // - display that results string
    //     - inject stuff into the `textContent` of our secret results div
});