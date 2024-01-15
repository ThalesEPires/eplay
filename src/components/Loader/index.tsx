import { PacmanLoader } from 'react-spinners'
import { colors } from '../../styles'
import { Container } from './styled'

const Loader = () => (
  <Container>
    <PacmanLoader color={colors.white} />
  </Container>
)

export default Loader
