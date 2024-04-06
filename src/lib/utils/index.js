import React from 'react'
import imageUrlBuilder from '@sanity/image-url'
import { client } from '../sanity/client'

export function getDomain() {
    const protocol = process.env.REACT_APP_VERCEL_ENV === "production" ? "https" : "http"
    const domain = process.env.REACT_APP_VERCEL_URL ? process.env.REACT_APP_VERCEL_URL : "localhost:3000"
    
    return `${protocol}://${domain}`
  }
  export function getDomainName() {
    const protocol = process.env.REACT_APP_VERCEL_ENV === "production" ? "https" : "http"
    const domain = process.env.REACT_APP_VERCEL_URL ? process.env.REACT_APP_VERCEL_URL : "localhost:3000"
    
    return `${domain}`
  }
  

  
  // Get a pre-configured url-builder from your sanity client
  const builder = imageUrlBuilder(client)
  
  // Then we like to make a simple function like this that gives the
  // builder an image and returns the builder for you to specify additional
  // parameters:
  export function urlForImage(source) {
    return builder.image(source)
  }
  

  export function extractTweetId(url){
    const regex = /\/status\/(\d+)/;
    const match = regex.exec(url);
    if (match && match[1]) {
      return match[1];
    }
    return null;
  }

  