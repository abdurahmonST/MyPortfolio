import { MainWrapper } from './mainStyle'

const MainLayout = (props) => {
  return (
    <MainWrapper>
        
        {props.children}
    </MainWrapper>
  )
}

export default MainLayout
