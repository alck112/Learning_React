import React from 'react';

const LikeButton = (props) => {

    const getHeartClasses = () => {
        let classes = "";
        classes = props.movie.isLiked ? "fa fa-heart" : "fa fa-heart-o";
        return classes;
    }

    return (
        <div>
            <i onClick={props.onLikeClick} className={getHeartClasses()}></i>
        </div>
    );
}

export default LikeButton;