import React from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import './Article.css'


export default function Article() {

  let { id } = useParams()
  //console.log(id)

  const { articles } = useSelector(state => ({
    ...state.articleReducer,
  }))
  //console.log(articles)

  let article = articles.filter(item => item.id == id)
  //console.log(article)

  return <div className='article-content'>

    <h2>Votre article : {article[0].title}</h2>
    <p>{article[0].body}</p>
  </div>;
}
