/*  Players X and O are playing a game consisting of N rounds. A player wins the whole game if they win any three rounds
in a row, and their opponent does not. If neither or both players manage to win three rounds in a row, there is a tie. 
Note that the total number of rounds a player has won does not matter 

Write a function: function solution(S) 
which, given a string S of length N consisting only on letters "X" and "O", determines the winner of the game. Return "X" if player X won the game, "O" 
if player O won the game, or "tie" if there was a tie*/

function solution(S) {
if (S.includes('XXXOOO') || S.includes('OOOXXX')) {
    console.log('tie');
    return 'tie';
} 
else if (S.includes('XXX')) {
    console.log('X wins');
    return 'X';
}else if (S.includes('OOO')) {
    console.log('O wins');
    return 'O';
}
else { console.log("String does not have X's and O's");
}
}
S = "XXXOOOXXOOX";
solution(S);