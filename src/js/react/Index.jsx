import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import someImg from "@img/cover.png";

const CommentsList = () => {
	const [comments, setComments] = useState([
		{ id: 1, text: "Это первый комментарий" },
		{ id: 2, text: "Это второй комментарий" },
		{ id: 3, text: "Это третий комментарий" }
	]);

	const handleDelete = (id) => {
		setComments(comments.filter(comment => comment.id !== id));
	};

	return (
		<div className="comments">
			<h2>Комментарии нашей лечебницы</h2>
			<ul className="comments__list">
				{comments.map(comment => (
					<li className="comments__item _icon-search" key={comment.id}>
						{comment.text}
						<button className="comments__btn" onClick={() => handleDelete(comment.id)}>Удалить</button>
					</li>
				))}
			</ul>
		</div>
	);
};

const App = () => (

	<div className="page__content content">
		<div className="content__container">
			<h1 className="title">REACTабилитационный центр</h1>
			<img src={someImg} alt="Image" />
			<CommentsList />
		</div>
	</div>

);


const mainPage = document.querySelector("main.page");
// Рендеринг приложения в элемент <main>
ReactDOM.createRoot(mainPage).render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);
