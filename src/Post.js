import React from 'react';
import luffyImage from './images/luffy.jpg';
import zoroImage from './images/zoro.jpg';
import namiImage from './images/nami.jpg';
import './Post.css';

function Post({ title, image, description }) {
    const [likes, setLikes] = React.useState(0);
    const [isLiked, setIsLiked] = React.useState(false);

    const handleLike = () => {
        if (!isLiked) {
            setLikes(likes + 1);
            setIsLiked(true);
        } else {
            setLikes(likes - 1);
            setIsLiked(false);
        }
    };

    return (
        <div className="post">
            <h2>{title}</h2>
            <img src={image} alt={title} />
            <p>{description}</p>
            <button
                onClick={handleLike}
                className={isLiked ? 'liked' : ''}
            >
                {isLiked ? 'Unlike' : 'Like'} ({likes})
            </button>
        </div>
    );
}

function Posts() {
    return (
        <div className="posts-container">
            <Post
                title="One Piece: Luffy and His Crew"
                image={luffyImage}
                description="One Piece is a popular manga and anime series created by Eiichiro Oda. It follows the adventures of Monkey D. Luffy and his diverse crew of pirates, known as the Straw Hat Pirates."
            />
            <Post
                title="One Piece: Roronoa Zoro"
                image={zoroImage}
                description="Roronoa Zoro is the swordsman of the Straw Hat Pirates. He is one of the crew's top fighters and is known for his goal to become the greatest swordsman in the world."
            />
            <Post
                title="One Piece: Nami"
                image={namiImage}
                description="Nami is the navigator of the Straw Hat Pirates. She has a keen sense of navigation and meteorology, and she dreams of making a complete map of the world."
            />
        </div>
    );
}

export default Posts;

