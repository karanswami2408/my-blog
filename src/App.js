import React from 'react';
import Header from './Header'; // Import the Header component
import Post from './Post'; // Import the Post componentimport React from 'react';
import './styles.css';
import luffyImage from './images/luffy.jpg';
import zoroImage from './images/zoro.jpg';
import namiImage from './images/nami.jpg';

const TopBar = () => (
  <div className="top-bar">
    <div className="logo">One Piece Blog</div>
    <div className="links">
      <a href="#">Home</a>
      <a href="#">About</a>
      <a href="#">Contact</a>
    </div>
  </div>
);

const BlogPost = ({ title, date, author, image, body }) => (
  <div className="blog-post">
    <h2>{title}</h2>
    <p className="meta">Published on {date} by {author}</p>
    <img src={image} alt={title} />
    <p className="body">{body}</p>
    <hr />
  </div>
);

const App = () => {
  const blogPostsData = [
    {
      title: 'Monkey D. Luffy - The Future Pirate King',
      date: 'May 31, 2024',
      author: 'Eiichiro Oda',
      image: luffyImage,
      body: 'Monkey D. Luffy is the captain of the Straw Hat Pirates, known for his dream to become the Pirate King...'
    },
    {
      title: 'Roronoa Zoro - The Swordsman of the Straw Hats',
      date: 'May 30, 2024',
      author: 'Eiichiro Oda',
      image: zoroImage,
      body: 'Roronoa Zoro is the combatant of the Straw Hat Pirates, known for his incredible swordsmanship and ambition to become the world\'s greatest swordsman...'
    },
    {
      title: 'Nami - The Navigator of the Straw Hat Pirates',
      date: 'May 29, 2024',
      author: 'Eiichiro Oda',
      image: namiImage,
      body: 'Nami is the navigator of the Straw Hat Pirates, with a talent for map-making and weather prediction...'
    }
  ];

  return (
    <div>
      <TopBar />
      <div className="blog-posts">
        {blogPostsData.map((post, index) => (
          <BlogPost key={index} {...post} />
        ))}
      </div>
    </div>
  );
};

export default App;

