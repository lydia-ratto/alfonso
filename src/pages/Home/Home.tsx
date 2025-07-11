import Button  from "@/components/Button/Button"
import ButtonGroup  from "@/components/ButtonGroup/ButtonGroup"

export default function Home() {
  return (
      <main>
        <section>
          <h1>Authentic Italian gelato</h1>
        </section>
        <section>
          <p>While gelato simply means ice cream in Italian, we know it’s so much more than that. We use artisan methods to create quality Ice cream that will transport you to Italy. Starting in 2018 from an Ape Piaggio truck in Oxford, we’ve since opened shops around Oxfordshire and neighbouring counties. We hope that our flavours and products can bring comfort, surprise and memorable experiences.</p>
          <ButtonGroup direction="row">
            <Button variant='primary'>Shops</Button>
            <Button variant='secondary'>Wholesale</Button>
          </ButtonGroup>
        </section>
      </main>
  )
}
