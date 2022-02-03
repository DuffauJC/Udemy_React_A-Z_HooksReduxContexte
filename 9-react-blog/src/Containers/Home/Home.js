import React, { useState, useEffect } from 'react';
import './Home.css'
import Card from '../../Components/Card/Card'

import { useDispatch, useSelector } from 'react-redux';
import { getArticles } from '../../redux/articles/articleReducer'
import { v4 as uuidv4 } from 'uuid';
import { Link } from 'react-router-dom';

export default function Home() {

    const { articles } = useSelector(state => ({
        ...state.articleReducer,
    }))
    // console.log(articles)
    const dispatch = useDispatch()

    useEffect(() => {
        if (articles.length === 0) {
            dispatch(getArticles())
        }
    }, [dispatch, getArticles, articles]);

    return (
        <>
            <h1 className='home-title'>Tous les articles</h1>
            <div className="container-cards">
                {articles.map((item) => {
                    // console.log(item)
                    return (
                        <Card key={uuidv4()}>
                            <h2>{item.title}</h2>

                            <Link
                                to={`/articles/${item.id}`} >
                                Lire l'article
                            </Link>
                        </Card>
                    )
                })}
            </div>
        </>
    );
}
