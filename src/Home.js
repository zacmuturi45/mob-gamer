import React from "react";
import { useEffect, useState } from "react";


function Home() {

    const [firstArray, setFirstArray] = useState([]);
    const [firstImage, setFirstImage] = useState([{url: 'https://media.istockphoto.com/id/538665020/photo/internet-meme-why-you-no-rage-face-3d-illustration.jpg?s=612x612&w=0&k=20&c=5D_g8Jy8kqg5Op2bb4RvcH8_6y0HGPqt29TKDrEqLyM='}]);
    const [displayClick, setDisplayClick] = useState(false);

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


    function handleClick() {
        setDisplayClick(!displayClick);

    }



    const imagesToDisplay = firstArray.map((images) => (
        <li className={displayClick? "arrayimages" : "notflexy"} key={images.id} onClick={() => handleMeme(images.id)} ><img className="pictures" src={images.url} alt={images.name} /></li>
    ));


    return (
        <div>
            <div className="firstimage" >
                <img className="displayimage" onClick={() => handleClick()} src={firstImage[0].url} />
                
            </div>
            <div>
                {imagesToDisplay}
            </div>
        </div>
    )
}

export default Home;