import { useParams } from 'react-router-dom'


const Details = ({food}) => {

    const params = useParams()  
    const ingredients = food[params.details]
    return(
        <p>{ ingredients }</p>
    )
}

export default Details