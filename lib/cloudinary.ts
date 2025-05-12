import { v2 as cloudinary } from 'cloudinary';

cloudinary.config({ 
    cloud_name: 'dws5culpz', 
    api_key: '487668889829384', 
    api_secret: 'KYndpuFNl8YOmjZ9pv2qR65Q7I0'
});

console.log("process.env.NEXT_PUBLIC_API_URL: ", process.env.NEXT_PUBLIC_API_URL);
console.log("process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY: ", process.env.NEXT_PUBLIC_CLOUDINARY_API_KEY);
console.log("process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET: ", process.env.NEXT_PUBLIC_CLOUDINARY_API_SECRET);


export default cloudinary