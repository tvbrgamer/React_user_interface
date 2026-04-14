import { Background } from "./styles"
import UsersImage from "../../assets/users.png"

function TopBackground() {
    return (
        <Background>
            <img src={UsersImage} alt="Imagem-usuarios" />
        </Background>
    )
}

export default TopBackground