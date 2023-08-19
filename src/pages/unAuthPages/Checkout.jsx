import Navbar from "../../components/Navbar"
import Button from "../../components/bits/Button"
import Container from "../../components/bits/Container"

const Checkout = () => {
  return (
    <>
      <Container>
        <Navbar />
        <div className=" w-full">
          <img src="/src/assets/img/checkout-bg.png" alt="bg" className=" w-full h-[100px] object-cover md:h-[148px]" />
          <Button  label={`PAY PRICE`}/>
        </div>
      </Container>
    </>
  )
}

export default Checkout