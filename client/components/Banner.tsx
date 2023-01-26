import Image from 'next/image'
import React from 'react'
import images from '../api/image.json'
import banner from '../styles/banner.module.css'
import { IBanner } from '../typings'
interface Props {
	fetchImage: IBanner
}
function Banner({ fetchImage } : Props) {
	return (
		<div>
			{images.map(data => (
				<Image
					alt='img'
					key={data.userId}
					className={banner.banner_img}
					src={fetchImage.message}
          height={500}
          width={400}
				/>
			))}
		</div>
	);
}

export default Banner