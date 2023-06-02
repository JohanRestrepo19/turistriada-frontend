import { Link } from 'react-router-dom'

export const CitiesCarousel = () => {
  return (
    <>
      {/* <div className="carousel w-full"> */}
      {/*   <div id="item1" className="carousel-item w-full"> */}
      {/*     <img src="/src/assets/cities/viaducto.png" /> */}
      {/*   </div> */}
      {/*   <div id="item2" className="carousel-item w-full"> */}
      {/*     <img src="/src/assets/cities/viaducto.png" /> */}
      {/*   </div> */}
      {/*   <div id="item3" className="carousel-item w-full"> */}
      {/*     <img src="/src/assets/cities/viaducto.png" /> */}
      {/*   </div> */}
      {/* </div> */}
      {/* <div className="flex justify-center w-full py-2 gap-2"> */}
      {/*   <a href="#item1" className="btn btn-xs"> */}
      {/*     1 */}
      {/*   </a> */}
      {/*   <a href="#item2" className="btn btn-xs"> */}
      {/*     2 */}
      {/*   </a> */}
      {/*   <a href="#item3" className="btn btn-xs"> */}
      {/*     3 */}
      {/*   </a> */}
      {/* </div> */}
      <div className="carousel w-full">
        <div id="slide1" className="carousel-item relative w-full">
          <img src="/src/assets/cities/viaducto.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide3" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide2" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide2" className="carousel-item relative w-full">
          <img src="/src/assets/cities/viaducto.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide1" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide3" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>

        <div id="slide3" className="carousel-item relative w-full">
          <img src="/src/assets/cities/viaducto.png" className="w-full" />
          <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
            <a href="#slide2" className="btn btn-circle">
              ❮
            </a>
            <a href="#slide1" className="btn btn-circle">
              ❯
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
