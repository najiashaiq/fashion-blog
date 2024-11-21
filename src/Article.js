import React from 'react';

function Article({ date, title, imageSrc, imageAlt, content }) {
  return (
    <article>
      <h2>{date}</h2>
      <h3>{title}</h3>
      <img src={imageSrc} alt={imageAlt} />
      <p>{content}</p>
      <p><a href="#">Continues...</a></p>
    </article>
  );
}

export default Article;