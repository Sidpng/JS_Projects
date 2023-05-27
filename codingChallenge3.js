let teamDolphinScore1 = parseInt(prompt("Enter the score for the Dolphin team in first match: "));
let teamDolphinScore2 = parseInt(prompt("Enter the score for the Dolphin team in second match: "));
let teamDolphinScore3 = parseInt(prompt("Enter the score for the Dolphin team in third match: "));

let teamKoalaScore1 = parseInt(prompt("Enter the score for the Koala team in first match: "));
let teamKoalaScore2 = parseInt(prompt("Enter the score for the Koala team in second match: "));
let teamKoalaScore3 = parseInt(prompt("Enter the score for the Koala team in third match: "));

let averageScoreTeamDolphin = (teamDolphinScore1 + teamDolphinScore2 + teamDolphinScore3) / 3;
let averageScoreTeamKoala = (teamKoalaScore1 + teamKoalaScore2 + teamKoalaScore3) / 3;

if (averageScoreTeamDolphin > averageScoreTeamKoala && averageScoreTeamDolphin > 100) {
    alert("Team Dolphin wins! with a difference of: " + (averageScoreTeamDolphin - averageScoreTeamKoala));
} else if (averageScoreTeamDolphin < averageScoreTeamKoala && averageScoreTeamKoala > 100) {
    alert("Team Koala wins! with a difference of: " + (averageScoreTeamKoala - averageScoreTeam));
} else if (averageScoreTeamKoala > 100 && averageScoreTeamDolphin > 100 && averageScoreTeamDolphin === averageScoreTeamKoala) {
    alert("Draw! Scores level at: " + averageScoreTeamDolphin);
} else {
    alert("No winner");
}