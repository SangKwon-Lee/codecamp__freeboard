import React, { Component, useState } from 'react';
import 'react-quill/dist/quill.snow.css';

function EditorComponent() {
	let ReactQuill =
		typeof window === 'object' ? require('react-quill') : () => false;

	const modules = {
		toolbar: [
			//[{ 'font': [] }],
			[{ header: [1, 2, false] }],
			['bold', 'italic', 'underline', 'strike', 'blockquote'],
			[
				{ list: 'ordered' },
				{ list: 'bullet' },
				{ indent: '-1' },
				{ indent: '+1' },
			],
			['link', 'image'],
			[{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
			['clean'],
		],
	};

	const formats = [
		//'font',
		'header',
		'bold',
		'italic',
		'underline',
		'strike',
		'blockquote',
		'list',
		'bullet',
		'indent',
		'link',
		'image',
		'align',
		'color',
		'background',
	];

	const [value, setValue] = useState();
	const onChange = (e) => {
		setValue(e);
	};
	return (
		<div style={{ height: '650px' }}>
			<ReactQuill
				style={{ height: '600px' }}
				theme="snow"
				modules={modules}
				formats={formats}
				value={value || ''}
				onChange={(content, delta, source, editor) =>
					onChange(editor.getHTML())
				}
			/>
		</div>
	);
}
export default EditorComponent;
