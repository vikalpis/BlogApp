import React,{useEffect, useState} from 'react'
import {Container, PostForm} from '../../component'
import appwriteService from "../../appwrite/conf"
import { useNavigate, useParams } from 'react-router-dom'


function EditPosts() {
    const [post , setposts] = useState([])
    const {} = useParams()
    const navigate = useNavigate()

    useEffect(()=>{
        if (slug) {
            appwriteService.getPosts(slug).then((post)=>{
                if (post) {
                    setposts(post)
                }
            })
        } else{
            navigate('/')
        }
    },[slug, navigate])
    return post ? (
        <div className='py-8'>
            <Container>
                <PostForm post={post} />
            </Container>
        </div>
      ) : null
    }

export default EditPosts