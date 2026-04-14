import { useEffect, useState } from "react"
import { useNavigate } from "react-router-dom"
import api from "../../services/api"

import Button from "../../components/Button"
import TopBackground from "../../components/TopBackground"
import { CardUsers, Container, ContainerUsers, Title, TrashIcon, AvatarUser } from "./styles"
import Trash from "../../assets/trash.svg"

function ListUsers() {

    const navigate = useNavigate()

    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getUsers() {
            const { data } = await api.get('/usuarios')
            setUsers(data.users)
        }
        getUsers()

    }, [])

    async function deleteUsers(id){
        await api.delete(`/usuarios/${id}`)

        const updatedUsers = users.filter( user => user.id !== id)

        setUsers(updatedUsers)
    }


    return (

        <Container>
            <TopBackground />

            <Title>Listagem de usuários</Title>

            <ContainerUsers>
                {users.map(user => (
                    <CardUsers key={user.id}>
                            <AvatarUser src={`https://api.dicebear.com/9.x/adventurer/svg?seed=${user.id}`} />
                        <div>
                            <h3>{user.name}</h3>
                            <p>{user.age}</p>
                            <p>{user.email}</p>
                        </div>
                        <TrashIcon src={Trash} alt="icone-lixo" onClick={() => deleteUsers(user.id)}/>
                    </CardUsers>
                ))}
            </ContainerUsers>
            <Button onClick={() => navigate('/')}>Voltar</Button>
        </Container>
    )
}
export default ListUsers