function Week(week, weekId) {
  this.week = week;
  this.weekId = weekId;
}

function Game(gameId, homeTeam, awayTeam, gameDate, gameTime) {
  this.gameId = gameId;
  this.gameDate = gameDate;
  this.gameTime = gameTime;
  this.homeTeam = homeTeam;
  this.awayTeam = awayTeam;
}

export { Week, Game };
