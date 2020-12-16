import React, { useEffect } from "react";
import "./Player.css";
//icons
import PlayArrowIcon from "@material-ui/icons/PlayArrow";
import PauseIcon from "@material-ui/icons/Pause";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
import SkipNextIcon from "@material-ui/icons/SkipNext";
import SkipPreviousIcon from "@material-ui/icons/SkipPrevious";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";

import { useStateValue } from "../Context/StateProvider";

function Player(props) {
  const [{ play, dayOnMapNumber }, dispatch] = useStateValue({});

  //animated map
  useEffect(() => {
    if (play !== false) {
      setTimeout((event) => {
        console.log(event, dayOnMapNumber, dayOnMapNumber + 1);
        dispatch({
          type: "SET_DAY_NUMBER",
          dayOnMapNumber: dayOnMapNumber + 1,
        });
      }, 1000);
    }
  }, [play, dayOnMapNumber]);
  //end of animated map

  return (
    <div className="player">
      {" "}
      <div className="player__buttons">
        <SkipPreviousIcon className="player__button" />
        <NavigateBeforeIcon className="player__button" />

        {play !== true ? (
          <PlayArrowIcon
            className="player__button"
            onClick={() => {
              dispatch({ type: "SET_PLAY", play: true });
            }}
          />
        ) : (
          <PauseIcon
            className="player__button"
            onClick={() => {
              dispatch({ type: "SET_PLAY", play: false });
            }}
          />
        )}

        <NavigateNextIcon className="player__button" />
        <SkipNextIcon className="player__button" />
      </div>
    </div>
  );
}
export default Player;
