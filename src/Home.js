import React from "react";
import { useEffect, useState } from "react";


function Home() {

    const [firstArray, setFirstArray] = useState([]);
    const [firstImage, setFirstImage] = useState([{url: 'https://media.istockphoto.com/id/538665020/photo/internet-meme-why-you-no-rage-face-3d-illustration.jpg?s=612x612&w=0&k=20&c=5D_g8Jy8kqg5Op2bb4RvcH8_6y0HGPqt29TKDrEqLyM='}]);

    useEffect(() => {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((resp) => {
                const img = resp.data.memes
                setFirstArray(img)
            })
    }, []);


    function handleMeme(id) {
        fetch('https://api.imgflip.com/get_memes')
            .then((response) => response.json())
            .then((resp) => {
                const img = resp.data.memes;
                const imag = img.filter((risp) => risp.id === id)
                console.log(imag)
                setFirstImage(imag);
            })
    }


    const imagesToDisplay = firstArray.map((images) => (
        <li className="arrayimages" key={images.id} onClick={() => handleMeme(images.id)} ><img className="pictures" src={images.url} alt={images.name} /></li>
    ));


    return (
        <div>
            <div className="firstimage">
                <img className="displayimage" src={firstImage[0].url} />
                
            </div>
            <div className="flexy">
                {imagesToDisplay}
            </div>
        </div>
    )
}

export default Home;