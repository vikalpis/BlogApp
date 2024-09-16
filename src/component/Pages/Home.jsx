import React, { useEffect, useState } from 'react';
import appwriteService from '../../appwrite/conf';
import { Container, PostCard } from "../../component";

function Home() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        appwriteService.getPosts().then((posts) => {
            if (posts) {
                setPosts(posts.documents);
            }
        });
    }, []);

    if (posts.length === 0) {
        return (
            <div className="w-full min-h-screen py-8 bg-gradient-to-r from-blue-200 to-purple-200 flex items-center justify-center">
                <Container>
                    <div className="text-center bg-white p-6 rounded-lg shadow-lg">
                        <h1 className="text-2xl font-bold text-gray-800 mb-4">
                            No Posts Available
                        </h1>
                        <p className="text-lg text-gray-600">
                            Login to read posts and stay updated with our latest content.
                        </p>
                    </div>
                </Container>
            </div>
        );
    }

    return (
        <div className='w-full py-8 bg-gradient-to-r from-blue-100 via-blue-200 to-blue-300'>
            <Container>
                <div className='flex flex-wrap'>
                    {posts.map((post) => (
                        <div key={post.$id} className='p-2 w-full sm:w-1/2 md:w-1/3 lg:w-1/4'>
                            <PostCard {...post} />
                        </div>
                    ))}
                </div>
            </Container>
        </div>
    );
}

export default Home;
