import { schedule21 } from "../schedule/scheduleData21.js";

const FormFields = () => {
  console.log(schedule21);

  return (
    <form>
      <label htmlFor="week">Week:</label>
      <input type="text" id="week" name="week"></input>
      <br />
      <label htmlFor="gameDate">Date:</label>
      <input type="date" id="gameDate" name="gameDate"></input>
      <br />
      <label htmlFor="gameTime">Time:</label>
      <input type="time" id="gameTime" name="gameTime"></input>
      <br />
      <label htmlFor="homeTeam">Home Team:</label>
      <input type="text" id="homeTeam" name="homeTeam"></input>
      <br />
      <label htmlFor="awayTeam">Away Team:</label>
      <input type="text" id="awayTeam" name="awayTeam"></input>
      <br />
    </form>
  );
};

export default FormFields;
