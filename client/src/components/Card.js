import React from "react";
import {AiTwotoneLike, AiTwotoneDislike, AiTwotoneStar} from 'react-icons/ai'
import {MdKeyboardReturn} from 'react-icons/md'
import TinderCard from 'react-tinder-card'
export default function Card(props) {
    console.log(props);

  return (
    <TinderCard preventSwipe={['up','down']}>
    <div className="card-container">
      <img src={`${props.pic}`}/>
      <div className="name-container">
        <p>{props.name + " " + props.surname}</p>
      </div>
      <div className="dialog">
        <button>
          <AiTwotoneDislike className="logo dislike" />
        </button>
        <button>
          <AiTwotoneLike className="logo like" />
        </button>
        <button>
          <AiTwotoneStar className="logo superlike" />
        </button>
        <button>
          <MdKeyboardReturn className="logo return" />
        </button>
      </div>
    </div>
    </TinderCard>
  );
}
