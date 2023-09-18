export default function FAQ() {
    let telegramCommunityLink = "https://t.me/RuthfulHeartsCommunity";
    let instagramLink = "https://instagram.com/RuthfulHearts";
    
    let faqs = [
        {
            "question": "Where do the donations go to?",
            "answer": "The money you guys donate will goto my account and in Ruthful Hearts' telegram channel I update how much money I've received so far."
        },
        {
            "question": "Who are we helping?",
            "answer": "Based on the amount of donation we raised, we will select a suitable person that fits the donation amount to invest all the money on."
        },
        {
            "question": "How much are you planning to fund raise?",
            "answer": "As much as we are able to raise within one week of fund rasing."
        },
        {
            "question": "How often do we fund raise?",
            "answer": "We hold fund raising campaigns online once every 4 months per year."
        },
        {
            "question": "How will you spend the donations?",
            "answer": "In the weeks after the fund raising campaigns are over, we will go and select a suitable person to help. Then depending on that person's needs we will buy supplies, clothings, shelter, food, medicine and more. Then provide that person with it."
        },
        {
            "question": "Why should we trust you?",
            "answer": "You just have to, but after fund raising campaigns are over you will see a video of me using the money to support and help someone in need."
        },
    ];
    return (
        <div className="w-screen h-fit text-center pt-36 flex flex-col justify-center items-center">
            <div className="text-lg font-bold
                lg:text-5xl xl:text-5xl 2xl:text-5xl
            ">
                Frequently Asked Questions
            </div>
            <div className="w-[90%] pt-10
                lg:w-[50%] xl:w-[50%] 2xl:w-[50%]       
            ">
                {
                    faqs.map((content, index)=>{
                        return (
                            <div className="py-2" key={index}>
                                <div tabIndex={0} className="collapse collapse-arrow bg-[#202020]">
                                    <div className="collapse-title text-base font-bold
                                    lg:text-xl xl:text-xl 2xl:text-xl
                                    ">
                                        {content["question"]}
                                    </div>
                                    <div className="collapse-content bg-[#151515] border-[#212121] border-b border-l border-r rounded-br-2xl rounded-bl-2xl"> 
                                        <div className="py-4">
                                            <p> {content["answer"]} </p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>

        {/* MEANING */}
        <p className="text-sm font-bold px-10 leading-normal pt-10
            sm:text-xl md:text-xl lg:text-xl xl:text-xl 2xl:text-xl 
            sm:px-0 md:px-0 lg:px-0 xl:px-0 2xl:px-0 
        ">
            If you've got more questions join our <a href={telegramCommunityLink} target="_blank" rel="noreferrer" className="text-cyan-500"> telegram community </a> and ask there or DM us on <a href={instagramLink} target="_blank" rel="noreferrer" className="text-pink-500">instagram</a> 
        </p>

       </div>
    )
}