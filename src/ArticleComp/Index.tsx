import * as React from "react";
import { useSelector, shallowEqual, useDispatch } from "react-redux";
import "./styles.css";

import { Dispatch } from "redux";
import { AddArticle } from "./AddArticle";
import { Article } from "./Article";
import {
  addArticle,
  removeArticle,
} from "../store/articleRedux/actionCreators";

const MainPage: React.FC = () => {
  const articles: readonly IArticle[] = useSelector(
    (state: ArticleState) => state.articles,
    shallowEqual
  );

  const dispatch: Dispatch<any> = useDispatch();

  const saveArticle = React.useCallback(
    (article: IArticle) => dispatch(addArticle(article)),
    [dispatch]
  );

  return (
    <main>
      <h1>My Articles</h1>
      <AddArticle saveArticle={saveArticle} />
      {articles.map((article: IArticle) => (
        <Article
          key={article.id}
          article={article}
          removeArticle={removeArticle}
        />
      ))}
    </main>
  );
};

export default MainPage;
