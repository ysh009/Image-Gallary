import React from 'react';

const ImageCard = ({image}) => {
    const tags = image.tags.split(',');
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <img src={image.webformatURL} alt="" className="w-full" /> 
         <div className="px-6 py-4">
          <div className="font-bold text-purple-500 text-xl mb-2">
            Photo By {image.user}
          </div>
          <ul>
            <li>
              <strong>Views: </strong>
              {image.views}
            </li>
            <li>
              <strong>Downloads: </strong>
              {image.downloads}
            </li>
            <li>
              <strong>Likes: </strong>
                {image.likes}
            </li>
          </ul>
         </div>
         <div className="px-6 py-4">
            {
                tags.map((tag,index)=>(
                    <span key={index} className="inline-block bg-gray-200 rounded-full text-sm px-3 py-1 font-bold text-gray-700 mr-2 my-1">
              #{tag}
            </span>
                ))
            }
         </div>
    </div>
  )
}

export default ImageCard;