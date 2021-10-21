import { useParams } from "react-router";


function  Single() {
    const param = useParams()
    return(
        <div>
            hi {param.id}
        </div>
    )
}

export default Single;