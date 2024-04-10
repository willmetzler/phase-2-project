import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Portfolio from './portfolio'

function PortfolioItem () {

    const params = useParams()

    const [item, setItem] = useState( {} )

    useEffect(() => {
        fetch(`http://localhost:3000/portfolios/${params.id}`)
        .then(res => res.json())
        .then(data => setItem(data))
    }, [])

    return (
        <>
            <Portfolio />
            <h3>{item.name}</h3>
        </>
    )
}

export default PortfolioItem