// create your App component here
import React, { useEffect, useState } from 'react'

function App() {
    const [dogImage, setDogImage] = useState(null)
    useEffect(() => {
        async function fetchDogImage() {
            const response = await fetch('https://dog.ceo/api/breeds/image/random')
            const dogImage= await response.json()
            setDogImage(dogImage)
        }
        fetchDogImage()
    },[])
    return (
        <>
            {dogImage ? (
                <img src={dogImage} alt="A Random Dog" />
            ) : (
                <p>Loading...</p>
            )}
        </>
    )
}

export default App
