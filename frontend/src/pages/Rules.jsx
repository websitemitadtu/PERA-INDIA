import React from 'react';
import '../assets/styles/Rules.css';

const rulesData = {
  Cricket: [
    "Each team will have to bring the playing kit by themselves.",
    "Innings will be of 10 overs.",
    "Maximum number of players will be 16.",
    "White dress will be compulsory.",
    "In case of a tie, winner will be decided on wickets fallen. If further tie, winner will be decided on ball-out."
  ],
  Football: [
    "Maximum number of players will be 16.",
    "Playing kit is compulsory.",
    "In case of a draw, penalty shootout will decide the winner."
  ],
  Kabaddi: [
    "Maximum number of players will be 12.",
    "Playing kit is compulsory.",
    "In case of a tie, 5 minutes extra time will be allotted."
  ],
  "Basket Ball": [
    "Maximum number of players will be 12.",
    "In case of a tie, 5 minutes of extra time will be allotted.",
    "Playing kit is compulsory for each participant."
  ],
  Volleyball: [
    "Maximum number of players will be 12.",
    "Playing kit is compulsory."
  ],
  Badminton: [
    "Minimum players for men: 4 max 6.",
    "Minimum players for women: 2 max 4.",
    "There will be three singles & doubles in men’s category and two singles and one doubles in Women’s category.",
    "Maximum 3 common players in Men’s category; 2 in Women’s. One player can play only one double and one single.",
    "Playing kit is compulsory."
  ],
  "Table Tennis": [
    "Maximum players for men: 5, women: 4.",
    "There will be three singles followed by two reverse singles (if required).",
    "Playing kit is compulsory."
  ],
  Tennis: [
    "Minimum players – 2, maximum – 4 (for both men & women).",
    "Two singles & one double match will be played.",
    "Playing kit is compulsory."
  ],
  "Water Polo": [
    "Maximum number of players will be 13.",
    "Balls will be provided.",
    "In case of a draw: 2 halves of 3 minutes each, then penalty shootout if needed."
  ],
  Chess: [
    "Maximum number of players will be 6.",
    "Chess clock & chess boards to be brought by players."
  ],
  Swimming: [
    "Maximum 2 players per category from each college.",
    "One player can participate in up to 3 individual events.",
    "On-the-spot entries are not allowed."
  ],
  Rowing: [
    "Equipment will be provided.",
    "Playing kit is compulsory.",
    "Doubling is allowed."
  ],
  Boxing: [
    "Boxing kit is compulsory (Red/Blue Corner).",
    "BFI approved gloves & headgear are compulsory.",
    "Weigh-in & medical check-up at 8 AM on 1st day & before event."
  ],
  Archery: [
    "Maximum number of players will be 3.",
    "Playing kit is compulsory.",
    "Personal equipment (Bow & Arrow) must be carried."
  ],
  "Kho-Kho": [
    "Maximum number of players will be 12.",
    "Each innings has 2 turns, 9 minutes each (chasing & defending).",
    "Ground will be a soil field."
  ]
};

const Rules = () => {
  return (
    <div className="rules-page">
      <h1>Rules & Regulations</h1>
      <div className="register-container">
        <a
          href="https://www.townscript.com/e/pera-premier-championship-033102"
          target="_blank"
          rel="noopener noreferrer"
          className="register-button"
        >
          Register
        </a>
      </div>
      {Object.entries(rulesData).map(([sport, rules]) => (
        <div key={sport} className="rule-section">
          <h2>{sport}</h2>
          <ul>
            {rules.map((rule, index) => (
              <li key={index}>{rule}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default Rules;
