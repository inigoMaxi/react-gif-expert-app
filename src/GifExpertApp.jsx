import { useState } from "react"
import { AddCategory, GifGrid } from "./components"

export const GifExpertApp = () => {
    const [categories, setCategories] = useState(['One punch'])

    const onAddCategory = (item) => {
        if (categories.includes(item)) return;
        setCategories([ ...categories, item])
    }

    return (
        <>
            <h1>GifExpertApp</h1>
            <AddCategory onNewCategory={value => onAddCategory(value)}></AddCategory>
            {categories.map(category => (<GifGrid key={category} category={category}/>))}
        </>
    )
}
