import Banner from '../../components/Banner'
import ProductsList from '../../components/ProductsList'

import { useGetOnSaleQuery, useGetSoonQuery } from '../../Services/api'

const Home = () => {
  const { data: onSaleGames, isLoading: isLoadingSale } = useGetOnSaleQuery()
  const { data: soonGames, isLoading: isLoadingSoon } = useGetSoonQuery()

  if (onSaleGames && soonGames) {
    return (
      <>
        <Banner />
        <ProductsList
          games={onSaleGames}
          title="Promoções"
          background="gray"
          id="on-sale"
          isLoading={isLoadingSale}
        />
        <ProductsList
          games={soonGames}
          title="Em breve"
          background="black"
          id="coming-soon"
          isLoading={isLoadingSoon}
        />
      </>
    )
  }

  return <h4>Carregando</h4>
}

export default Home
