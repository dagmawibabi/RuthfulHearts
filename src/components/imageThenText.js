export default function ImageThenText({image, header, details}) {
    return (
        <div className="h-fit w-screen px-0 pt-24 flex-row justify-between
            sm:flex md:flex lg:flex xl:flex 2xl:flex
            sm:px-60 md:px-60 lg:px-60 xl:px-60 2xl:px-60
            sm:h-screen md:h-screen lg:h-screen xl:h-screen 2xl:h-screen
        ">
            <div className="w-full h-fit relative
                sm:w-[40%] md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]
            ">
                <img alt="img1" src={image} />
            </div>
            <div className="w-screen h-fit pt-0 text-center px-5
                sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0
                sm:pt-72 md:pt-72 lg:pt-72 xl:pt-72 2xl:pt-72
                sm:w-3/6 md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6
                sm:text-left md:text-left lg:text-left xl:text-left 2xl:text-left
            ">
                <span className="text-2xl font-bold
                    sm:text-6xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl
                "> {header} </span>
                <p className="pt-5 text-lg
                    sm:pt-8 md:pt-8 lg:pt-8 xl:pt-8 2xl:pt-8
                    sm:text-2xl md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl
                ">
                    {details}
                </p>
            </div>
      </div>
    )
}