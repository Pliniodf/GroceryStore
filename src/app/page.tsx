/* import imagem from  '../imagens/mercadinho.jpg' */
import Image from 'next/image'

export default function Home() {
  return (
    <div>
      <header className="bg-slate-200	 h-24 flex px-8 py-6 justify-center align-middle">
        <h2 className="mr-4 color text-black">Home</h2>
        <h2 className="mr-4 color text-black">Minhas compras</h2>
        <h2>Carrinho</h2>
      </header>
      <main className='flex justify-around mt-4'>
        {/* <Image src={imagem} alt='mercadinho' className='opacity-50 w-screen h-screen relative'/> */}
        <div className='w-96 h-96 bg-white shadow-xl rounded-md p-6'>
          <div>Imagem</div>
          <div>Nome do produto</div>
          <div>Valor</div>
        </div>
        <div className='w-96 h-96 bg-white shadow-xl rounded-md p-6'>
          <div>Imagem</div>
          <div>Nome do produto</div>
          <div>Valor</div>
        </div>
        <div className='w-96 h-96 bg-white shadow-xl rounded-md p-6'>
          <div>Imagem</div>
          <div>Nome do produto</div>
          <div>Valor</div>
        </div>
        <div className='w-96 h-96 bg-white shadow-xl rounded-md p-6'>
          <div>Imagem</div>
          <div>Nome do produto</div>
          <div>Valor</div>
        </div>
        {/* <div className='w-screen h-screen bg-transparent'/> */}
      </main>
    </div>
  )
}
