import dynamic from 'next/dynamic';
import { useState } from 'react';
import 'react-quill/dist/quill.snow.css';

const ReactQuill = dynamic(() => import('react-quill'), {
	ssr: false,
});

export default function Quill() {
	const [edit, setEdit] = useState('');
	const handleOnChangeEditor = (content) => {
		setEdit(content);
		console.log(edit);
	};
	return <ReactQuill onChange={handleOnChangeEditor}></ReactQuill>;
}
