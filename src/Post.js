import React from 'react';
import luffyImage from './images/luffy.jpg'; // Adjust the filename as per your downloaded image

function Post() {
  return (
    <section className="post">
      <h2>One Piece: Luffy and His Crew</h2>
      <img src={luffyImage} alt="Luffy and his crew" />
      <p>One Piece is a popular manga and anime series created by Eiichiro Oda. It follows the adventures of Monkey D. Luffy and his diverse crew of pirates, known as the Straw Hat Pirates.</p>
      {/* Add more content as needed */}
    </section>
  );
}

export default Post;
