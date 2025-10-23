import Image1 from '../assets/css.jpg'
import Image2 from '../assets/tailwindcss.jpg'
const Images = () => {
    return (
        <div class="p-3 bg-amber-50 mt-4 w-full gap-6 flex justify-center">
            <div class="basis-1/2">
                <img src={Image1} alt="" />
            </div>
            <div class="basis-1/2">
                <img src={Image2} alt="" />
            </div>
        </div>
    )
}

export default Images