import React, { useEffect, useState } from 'react';
import { getPosts } from './api.jsx';
import TodoList from './TodoList.jsx';

function App() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        getPosts().then(data => setPosts(data));
    }, []);

    return (
        <div>
            <ul>
                {posts.map((post) => (
                    <li key={post.id}>{post.title}</li>
                ))}
            </ul>
            <TodoList />
        </div>
    );
}

export default App;
