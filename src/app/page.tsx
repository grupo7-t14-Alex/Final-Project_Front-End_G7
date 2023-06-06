const cars = [
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 600,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 36000000,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 4600000,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 2600000,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 1600000,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 600,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 600,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 600,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
  {
    "id": 1,
    "model": "Panamera",
    "brand": "Porsche",
    "year": 2020,
    "fuel": "flex",
    "km": 100,
    "price": 600,
    "urlImage": "https://img.olx.com.br/images/96/966372612798546.jpg",
    "owner": "Gabriel dos santos"
  },
]


export default function Home() {
  return (
    <main>
      <header>
        <h1 className="flex justify-start border">Home Page</h1>
      </header>

      <div className="bg-gradient-to-b from-gray-500 to-gray-950 h-96 w-full relative">
        <img src="https://www.assobrav.com.br/wp-content/uploads/2020/07/porsche-911-turbo-2021-4.jpg" alt="Imagem ilustrativa carro porsche" className="w-full h-full object-cover absolute mix-blend-overlay" />
        <div className="h-full flex flex-col justify-center gap-5">
          <h2 className="font-lexend text-4xl font-bold text-center text-white">Motors Shop</h2>
          <p className="w-full font-lexend text-3xl font-semibold text-center text-white">A melhor plataforma de anúncios de carro do país</p>
        </div>
      </div>

      <div className="grid grid-rows-1 p-1 md:grid-cols-5">
        <aside className="flex flex-col w-full gap-2 p-1">
          {/* <h3 className="font-lexend text-base font-medium" >Filtro</h3> */}
          <form class="hidden md:flex  flex-col bg-gray-100 rounded-md shadow-md gap-4 p-4">
            <div class="grid grid-rows-6">
              <label for="brand" class="font-lexend text-2xl font-semibold">Marca</label>
              <input type="button" value="Porsche" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Hyundai" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Ford" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Nissan" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Honda" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Mercedes-Benz" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="BMW" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
            <div class="grid grid-rows-6">
              <label for="model" class="font-lexend text-2xl font-semibold">Modelo</label>
              <input type="button" value="Porsche 911" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Porsche Panamera" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="BMW M3" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="BMW X6" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Mercedes-Benz GLE" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Mercedes-Benz A45" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
              <input type="button" value="Nissan GTR-R35" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" />
            </div>
            <div class="grid grid-rows-6">
              <label for="year" class="font-lexend text-2xl font-semibold">Ano</label>
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="2023" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="2022" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="2021" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="2020" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="2019" />
              <input type="button" id="year" name="year" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="2018" />
            </div>
            <div class="grid grid-rows-4">
              <label for="year" class="font-lexend text-2xl font-semibold">Combustível</label>
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="Diesel" />
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="Etanol" />
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="Gasolina" />
              <input type="button" id="fuel" name="fuel" className="flex flex-row justify-start text-gray-500 hover:text-gray-700 cursor-pointer" value="Flex" />
            </div>
            <div class="grid grid-rows-2">
              <label for="km" class="font-lexend text-2xl font-semibold">KM</label>
              <div className="grid grid-cols-2 gap-2" >
                <input type="number" id="km-min" name="km-min" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Minimo" />
                <input type="number" id="km-max" name="km-max" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Máximo" />
              </div>
            </div>
            <div class="grid grid-rows-2">
              <label for="price" class="font-lexend text-2xl font-semibold">Preço</label>
              <div className="grid grid-cols-2 gap-2" >
                <input type="number" id="price-min" name="price-min" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Minimo" />
                <input type="number" id="price-max" name="price-max" className="w-full p-2 border border-gray-400 rounded-md" placeholder="Máximo" />
              </div>
            </div>
            <button type="submit" class="w-full py-2 px-4 text-white bg-purple-800 hover:bg-purple-900 rounded-md">Ver anúncios</button>
          </form>
        </aside>
        <div className="w-full overflow-auto p-1 md:col-span-4 flex flex-col space-y-5">
          <ul className="flex flex-row overflow-auto gap-14 md:grid grid-cols-3 gap-15 p-4">
            {
              cars.map(car =>
                <li key={car.id} className="max-w-72 max-w-xs max-h-96 border rounded-md border-transparent">
                  <img src={car.urlImage} alt="imagem carro" className="w-full h-40" />
                  <div className="overflow-hidden p-1 flex flex-col gap-7 max-h-full">
                    <h5 className="font-lexdend font-semibold text-base">{car.brand}-{car.model}</h5>
                    <p className="break-words font-inter font-normal text-sm text-gray-600 line-clamp-3">dadadaudadaojijiocnscnjedcnedbrbycbrncviovoirvidnvubsbsuycmascimsmuhgruihunuinsnuicniscsocsnpsuivnfvndunvudscmisocoiejfuirfnuivnsurvsnp</p>
                    <div className="flex items-center gap-2" >
                      <img src="https://rare-gallery.com/mocahbig/396683-wallpaper-satoru-gojo-jujutsu-kaisen-4k-hd.jpg" alt="profile image" className="w-8 h-8 rounded-full" />
                      <span className="break-words font-inter font-medium text-sm text-gray-600">{car.owner}</span>
                    </div>
                    <div className="max-w-full grid grid-cols-4">
                      <span className="line-clamp-1 font-inter font-medium text-sm text-purple-800">{car.km} KM</span>
                      <span className="line-clamp-1 font-inter font-medium text-sm text-purple-800">{car.year}</span>
                      <span className="col-span-2 flex justify-end break-words font-lexend font-medium text-base text-gray-800">{car.price.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' })}</span>
                    </div>
                  </div>
                </li>
              )
            }
          </ul>
          <div className="hidden md:flex flex-col justify-center">
            <span className="flex flex-row justify-center gap-4 line-clamp-1">1</span>
            <div className="flex flex-row justify-center space-x-6">
              <button type="button" class="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">{'<'} Voltar</button>
              <button type="button" class="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">Seguinte {'>'}</button>
            </div>
          </div>
        </div>
        <div className="flex flex-col space-y-6 my-4 md:hidden">
          <button type="button" class="w-full py-2 px-4 text-white bg-purple-800 hover:bg-purple-900 rounded-md">Filtro</button>
          <div className="flex flex-col justify-center">
            <span className="flex flex-row justify-center gap-4 line-clamp-1">1</span>
            <div className="flex flex-row justify-center space-x-6">
              <button type="button" class="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">{'<'} Voltar</button>
              <button type="button" class="py-2 px-4 bg-transparent text-purple-800 hover:text-gray-900 rounded-md">Seguinte {'>'}</button>
            </div>
          </div>
        </div>
      </div>
    </main>
  )
}
