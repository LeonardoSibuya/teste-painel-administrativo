import { LoadingContainer } from "./styles"

import { RingLoader } from "react-spinners"

const Loading = () => {
    return (
        <LoadingContainer>
            <RingLoader
                color="#0CA4EB"
                loading
                size={80}
                speedMultiplier={0.8}
            />
        </LoadingContainer>
    )
}

export default Loading