// sm:[a-z]*-*[*[0-9]*[0-9]*%*\]*[0-9]*/*[0-9]*[a-z]*-*[a-z]*[0-9]* 
export default function TextThenImage({image, header, details}) {
    return (
        <div className="h-fit px-0 pt-24 flex-row justify-between
             lg:flex xl:flex 2xl:flex
             lg:px-40 xl:px-40 2xl:px-60
             lg:h-screen xl:h-screen 2xl:h-screen
        ">
            <div className="w-[70%] mx-auto h-fit relative -scale-x-100 visible
                 lg:hidden xl:hidden 2xl:hidden
                 min-[590px]:w-[50%]
                 md:w-[40%] lg:w-[40%] xl:w-[40%] 2xl:w-[40%]

            ">
                <img alt="img1" src={image} />
            </div>

            <div className="pt-0 h-fit px-5 text-center
                 lg:px-0 xl:px-0 2xl:px-0
                 lg:pt-40 xl:pt-40 2xl:pt-72
                 lg:w-3/6 xl:w-3/6 2xl:w-3/6
                 lg:text-left xl:text-left 2xl:text-left

            ">
                <span className="text-2xl font-bold  
                     lg:text-5xl xl:text-5xl 2xl:text-6xl
                "> {header} </span>

                <p className="pt-5 text-base
                     lg:pt-8 xl:pt-8 2xl:pt-8
                     lg:text-xl xl:text-xl 2xl:text-2xl
                ">
                    {details}
                </p>
            </div>

            <div className="w-[40%] h-fit relative -scale-x-100 hidden
                 lg:block xl:block 2xl:block
            ">
                <img alt="img1" src={image} />
            </div>
      </div>
    )
}