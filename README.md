# quiz-page

OUTCOMES:
- There should be an alert
- There should be a confirm so the user can opt out
- There should be a first name prompt and a last name prompt
- There should be three question prompts
- The user should be able to see their results after taking the quiz

HTML Setup:
- Some information, presented nicely with an image and some list items.
    - Why? So the user knows what to do.
- A button.
    - Why? to launch the quiz
- A secret, empty div
    - Why? to inject/display the results to the user

1) Grab DOM Elements
    - button
    - secret div
2) Add event listeners
    - button
3) Respond to user input -- in most apps, the real work happens in the cool zone
    - launch an alert
    - launch a confirmation
        - if the user says no, nothing else happens (`return` nothing to break out of the cool zone)
        - if the user says yes, launch the series of propmts
    - launch a first name prompt
        - store that output to display later
    - launch a last name prompt
        - store that output to display later
    - launch quiz prompts with 3 specific yes/no questions
        - how do we evaluate the answers?
        - what counts as a yes?
            - Yes
            - Yeah
            - Yep
            - Y
            - yes
            - yeah
            - y
            - anything that starts with a y counts as a yes
            - how many times are we going to see if something counts as a yes?
                - three times
                - instead of copying and pasting, lets write a `countsAsAYes` function!
    - make a results string
    - display that results string
        - inject stuff into the `textContent` of our secret results div
