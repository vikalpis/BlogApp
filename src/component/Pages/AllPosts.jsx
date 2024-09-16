import React, { useState, useEffect } from 'react';
import appwriteService from '../../appwrite/conf';
import { Container, PostCard } from '../../component';

function AllPosts() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await appwriteService.getPosts([]);
                if (response) {
                    setPosts(response.documents);
                }
            } catch (error) {
                console.error('Failed to fetch posts:', error);
            }
        };

        fetchPosts();
    }, []);

    return (
        <div className='w-full py-8 bg-gradient-to-r from-gray-500 via-gray-600 to-gray-800'>
            <Container>
                <div className='flex flex-wrap -mx-4'>
                    {posts.length > 0 ? (
                        posts.map((post) => (
                            <div
                                key={post.$id}
                                className='p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform transform hover:scale-105 hover:shadow-lg duration-300 ease-in-out'
                            >
                                <PostCard {...post} />
                            </div>
                        ))
                    ) : (
                        <div className='w-full text-center text-gray-700'>
                            No posts available
                        </div>
                    )}
                </div>
            </Container>
        </div>
    );
}

export default AllPosts;
