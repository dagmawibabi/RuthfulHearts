import { PortableText } from '@portabletext/react';

import {getImageDimensions} from '@sanity/asset-utils'
import React from 'react';

import YouTubePlayer from 'react-player/youtube';
import { Tweet } from 'react-tweet'
import { urlForImage } from '../../lib/utils';
import {extractTweetId} from '../../lib/utils'




// Barebones lazy-loaded image component
const ImageComponent = ({value, isInline}) => {
  const {width, height} = getImageDimensions(value)
  return (
    <img
      
      src={urlForImage(value)
        .width(isInline ? 100 : 800)
        .fit('max')
        .auto('format')
        .url()}
      alt={value.alt || ' '}
      loading="lazy"
      style={{
        // paddingLeft:"2rem",
        // paddingRight:"2rem",
        // Display alongside text if image appears inside a block text span
        display: isInline ? 'inline-block' : 'block',
          
        // Avoid jumping around with aspect-ratio CSS property
        aspectRatio: width / height,
        cursor:'pointer'
      }}
      className='hover:brightness-75 transition-all duration-500 px-3 md:px-[2rem]'
    />
  )
}

    const YoutubeBlock=(props)=>{         

            return (
                <div className="w-full flex justify-center my-6">
                <YouTubePlayer  controls={true} url={props.value.url} />
                </div>
      )
    }

    const EmbedBlock=(props)=>{       
      return (
        <iframe height="300" className='w-full h-[20rem]  md:h-[30rem] na md:p-4 border-none bg-transparent' title="Loader Animation - Pure CSS" src={props.value.url} loading="lazy" allowTransparency={true} allowFullScreen={true}>
          
      </iframe>
      )
    }

    
    const TwitterBlock=(props)=>{
      return (
        <div data-theme="dark" className='flex w-full  bg-transparent justify-center'>
          <Tweet  id={extractTweetId(props.value.url) } />
        </div>
      )
    }


const PortableTextComponents = {
  types: {
    'image':ImageComponent,
    youtube:YoutubeBlock,
    twitter:TwitterBlock,
    embed:EmbedBlock

    
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <a className='text-amber-700 dark:text-amber-600 underline max-w-lg hover:text-amber-800 dark:hover:text-amber-400 z-50 text-sm md:text-base transition-all duration-500' href={value.href} rel={rel}>
          {children}
        </a>
      );
    },
    
  },
  block:{
    blockquote: ({children}) => <blockquote className="border-l-8 border-l-[#61dafb] bg-[#61dafb] text-base">{children}</blockquote>,
    div:({children})=><div className='z-50'>{children}</div>,
    p:({children})=><h1>{children}</h1>,

    // a:({value,href}:any)=><a className='text-amber-700 dark:text-amber-600' href={href} target='_blank' rel="noopener noreferrer">{value}</a>,
  }
};

const PortableTextEditor = ({ body }) => {
  return (
    <article className=''>
      <PortableText  value={body} components={PortableTextComponents} />
    </article>
  );
};

export default PortableTextEditor;

