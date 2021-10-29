import React,{useState} from 'react'
import { AddCategory } from './components/AddCategory'
import { GifGrid } from './components/GifGrid'


export const GifExpertApp = () => {
    //const categories = ['One Punch Man','Koi to Uso', 'shigatsu wa kimi no uso']
    const [categories, setCategories ] = useState(['One Punch Man'])
    // const handleAdd = () =>{
    //     //setCategories([...categories, 'Bunny girl senpai']);
    //     setCategories(cats => [...cats, 'BunnyGirlSenpai']);
    // }
    return (
        <>
            <h2>GifExpertApp</h2>
            <AddCategory setCategories={ setCategories } />
            <hr />
        <ol>
            {
                categories.map( category => (
                    <GifGrid
                    key={category}
                    category={category}
                    />
                ))
            }
        </ol>

        </>

    )
}


