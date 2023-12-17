import React from 'react'

//  Link of Specific Note Id
import { Link } from 'react-router-dom'

const getTitle = (body) => {
	const title = body.split('\n')[0];
	if (title.length > 45) return title.slice(0, 45);
	return title;
}
const getContent = (body) => {
	const title = getTitle(body)
	let content = body.replaceAll('\n', '');
	content = content.replaceAll(title, '');
	if (content.length > 45) return content.slice(0, 45) + '...';
	return content;
}
const ListItem = ({ id, body, updated }) => {
	if (!body) return null;

	return (
		<Link to={'/notes/' + id}>
			<div className='notes-list-item'>
				<h3>{getTitle(body)}</h3>
				<p>
					<span>{new Date(updated).toLocaleDateString()}</span>
					{getContent(body)}
				</p>
			</div>
		</Link>
	)
};

export default ListItem;