function Week(week, weekId) {
  this.week = week;
  this.weekId = weekId;
}

function Game(week, gameId, homeTeam, awayTeam, gameDate, gameTime) {
  this.week = week;
  this.gameId = gameId;
  this.homeTeam = homeTeam;
  this.awayTeam = awayTeam;
  this.gameDate = gameDate;
  this.gameTime = gameTime;
}

export { Week, Game };
