import React from 'react';
import { Link } from 'react-router-dom';
import appwriteService from '../appwrite/conf';

function PostCard({ $id, title, featuredImage }) {
    return (
        <Link to={`/post/${$id}`} className="group">
            <div className="w-full bg-white rounded-lg shadow-lg overflow-hidden transition-transform transform group-hover:scale-105">
                <div className="relative h-48">
                    <img
                        src={appwriteService.getFilePreview(featuredImage)}
                        alt={title}
                        className="object-cover w-full h-full rounded-t-lg"
                    />
                </div>
                <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800 group-hover:text-primary transition-colors">
                        {title}
                    </h2>
                </div>
            </div>
        </Link>
    );
}

export default PostCard;
