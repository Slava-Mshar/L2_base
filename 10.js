function bingo(ticket, win){
const miniWins = ticket.reduce((count,[str,num]) => 
  count +(str.split('').some(char=>char.charCodeAt(0)===num)?1:0),0);
  return miniWins >= win? 'Winner!' : 'Loser!'
}