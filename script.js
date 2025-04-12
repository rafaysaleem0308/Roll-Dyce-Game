//Selecting elements
/*const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const dice_display = document.querySelector('.dice');
const button_new = document.querySelector('.btn--new');
const button_roll = document.querySelector('.btn--roll');
const button_hold = document.querySelector('.btn--hold');
const player_1 = document.querySelector('#current--0');
const player_2 = document.querySelector('#current--1');
const active_0 = document.querySelector('.player--0');
const active_1 = document.querySelector('.player--1');

let info = document.querySelector('btn--info');

//starting condition
score_0.textContent = 0;
score_1.textContent = 0;
dice_display.classList.add('hidden');

let score_array = [0, 0];
let current_score = 0;
let player_active = 0;
let check_game = true;

//switch to next player
const switch_player = function () {
  if (player_active == 0) {
    document.getElementById('current--0').textContent = 0;
    current_score = 0;
    player_active = 1;
  } else {
    document.getElementById('current--1').textContent = 0;
    current_score = 0;
    player_active = 0;
  }
  active_0.classList.toggle('player--active');
  active_1.classList.toggle('player--active');
};

//Rolling dice function
const dice_rolling = function () {
  if (check_game) {
    let dice_number = Math.trunc(Math.random() * 6) + 1;

    //displaying it
    dice_display.classList.remove('hidden');
    dice_display.src = `dice-${dice_number}.png`; // Corrected string interpolation
    //check for 1
    if (dice_number != 1) {
      current_score += dice_number;
      document.getElementById(`current--${player_active}`).textContent =
        current_score;
    } else {
      //switch to next player
      switch_player();
    }
  }
};
button_roll.addEventListener('click', dice_rolling);

//Holding functinality
const dice_holding = function () {
  if (check_game) {
    //add cuurent score to active player
    score_array[player_active] += current_score;
    document.getElementById(`score--${player_active}`).textContent =
      score_array[player_active];
    //check if score is >=100
    if (score_array[player_active] >= 100) {
      check_game = false;
      //finish the game
      document
        .querySelector(`.player--${player_active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player_active}`)
        .classList.remove('player--active');
      document.getElementById(`current--${player_active}`).textContent = 0;
    }

    //switch to the next player
    else {
      document.getElementById(`current--${player_active}`).textContent = 0;
      switch_player();
    }
  }
};

button_hold.addEventListener('click', dice_holding);

//New game Functionality
const new_game = function () {
  score_array = [0, 0];
  current_score = 0;
  player_active = 0;
  check_game = true;

  score_0.textContent = 0;
  score_1.textContent = 0;
  player_1.textContent = 0;
  player_2.textContent = 0;

  dice_display.classList.add('hidden');
  active_0.classList.remove('player--winner');
  active_1.classList.remove('player--winner');
  active_0.classList.add('player--active');
  active_1.classList.remove('player--active');
};
button_new.addEventListener('click', new_game);
*/

// Selecting elements
const score_0 = document.querySelector('#score--0');
const score_1 = document.querySelector('#score--1');
const dice_display = document.querySelector('.dice');
const button_new = document.querySelector('.btn--new');
const button_roll = document.querySelector('.btn--roll');
const button_hold = document.querySelector('.btn--hold');
const player_1 = document.querySelector('#current--0');
const player_2 = document.querySelector('#current--1');
const active_0 = document.querySelector('.player--0');
const active_1 = document.querySelector('.player--1');
const button_info = document.querySelector('.btn--info');
const modal = document.querySelector('.modal');
const close_btn = document.querySelector('.close-btn');
const main_content = document.querySelector('.main-content');

// Starting condition
score_0.textContent = 0;
score_1.textContent = 0;
dice_display.classList.add('hidden');

let score_array = [0, 0];
let current_score = 0;
let player_active = 0;
let check_game = true;

// Switch to next player
const switch_player = function () {
  if (player_active == 0) {
    document.getElementById('current--0').textContent = 0;
    current_score = 0;
    player_active = 1;
  } else {
    document.getElementById('current--1').textContent = 0;
    current_score = 0;
    player_active = 0;
  }
  active_0.classList.toggle('player--active');
  active_1.classList.toggle('player--active');
};

// Rolling dice function
const dice_rolling = function () {
  if (check_game) {
    let dice_number = Math.trunc(Math.random() * 6) + 1;

    // Displaying it
    dice_display.classList.remove('hidden');
    dice_display.src = `dice-${dice_number}.png`;
    // Check for 1
    if (dice_number != 1) {
      current_score += dice_number;
      document.getElementById(`current--${player_active}`).textContent =
        current_score;
    } else {
      // Switch to next player
      switch_player();
    }
  }
};
button_roll.addEventListener('click', dice_rolling);

// Holding functionality
const dice_holding = function () {
  if (check_game) {
    // Add current score to active player
    score_array[player_active] += current_score;
    document.getElementById(`score--${player_active}`).textContent =
      score_array[player_active];
    // Check if score is >=100
    if (score_array[player_active] >= 100) {
      check_game = false;
      // Finish the game
      document
        .querySelector(`.player--${player_active}`)
        .classList.add('player--winner');
      document
        .querySelector(`.player--${player_active}`)
        .classList.remove('player--active');
      document.getElementById(`current--${player_active}`).textContent = 0;
    }
    // Switch to the next player
    else {
      document.getElementById(`current--${player_active}`).textContent = 0;
      switch_player();
    }
  }
};

button_hold.addEventListener('click', dice_holding);

// New game functionality
const new_game = function () {
  score_array = [0, 0];
  current_score = 0;
  player_active = 0;
  check_game = true;

  score_0.textContent = 0;
  score_1.textContent = 0;
  player_1.textContent = 0;
  player_2.textContent = 0;

  dice_display.classList.add('hidden');
  active_0.classList.remove('player--winner');
  active_1.classList.remove('player--winner');
  active_0.classList.add('player--active');
  active_1.classList.remove('player--active');
};
button_new.addEventListener('click', new_game);

// Show modal and blur background
const show_modal = function () {
  modal.classList.remove('hidden');
  main_content.classList.add('blur-background');
};

// Hide modal and remove blur from background
const hide_modal = function () {
  modal.classList.add('hidden');
  main_content.classList.remove('blur-background');
};

// Event listener for INFO button
button_info.addEventListener('click', show_modal);

// Event listener for close button in modal
close_btn.addEventListener('click', hide_modal);

// Event listener for ESC key to close modal
document.addEventListener('keydown', function (event) {
  if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
    hide_modal();
  }
});
