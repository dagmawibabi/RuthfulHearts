// sm:[a-z]*-*[*[0-9]*[0-9]*%*\]*[0-9]*/*[0-9]*[a-z]*-*[a-z]*[0-9]* 
export default function TextThenImage({image, header, details}) {
    return (
        <div className="h-fit px-0 pt-24 flex-row justify-between
            md:flex lg:flex xl:flex 2xl:flex
            md:px-60 lg:px-60 xl:px-60 2xl:px-60
            md:h-screen lg:h-screen xl:h-screen 2xl:h-screen
        ">
            <div className="w-full h-fit relative -scale-x-100 visible
                md:hidden lg:hidden xl:hidden 2xl:hidden
            ">
                <img alt="img1" src={image} />
            </div>

            <div className="pt-0 h-fit px-5 text-center
                md:px-0 lg:px-0 xl:px-0 2xl:px-0
                md:pt-72 lg:pt-72 xl:pt-72 2xl:pt-72
                md:w-3/6 lg:w-3/6 xl:w-3/6 2xl:w-3/6
                md:text-left lg:text-left xl:text-left 2xl:text-left

            ">
                <span className="text-2xl font-bold  
                    md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl
                "> {header} </span>

                <p className="pt-5 text-lg
                    md:pt-8 lg:pt-8 xl:pt-8 2xl:pt-8
                    md:text-2xl lg:text-2xl xl:text-2xl 2xl:text-2xl
                ">
                    {details}
                </p>
            </div>

            <div className="w-[40%] h-fit relative -scale-x-100 hidden
                md:block lg:block xl:block 2xl:block
            ">
                <img alt="img1" src={image} />
            </div>
      </div>
    )
}