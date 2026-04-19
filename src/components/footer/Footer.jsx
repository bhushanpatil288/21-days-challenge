import { Container } from "../"

const Footer = () => {
    return (
        <Container>
            <footer>
                <div className="flex items-center justify-center">
                    <p className="text-center py-5">All rights reserved by Bhushan Patil | {new Date().getFullYear()}</p>
                </div>
            </footer>
        </Container>
    )
}

export default Footer