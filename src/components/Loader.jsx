import { Html } from "@react-three/drei"
import { bouncing } from "../utils"

const Loader = () => {
  return (
    <Html>
        <div className="absolute top-0 left-0 w0full h-full flex justify-center items-center">
            <div className="w-[10vw] h-[10vw] rounded-full">...</div>
        </div>
    </Html>
  )
}

export default Loader