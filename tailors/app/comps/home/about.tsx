import Image from "next/image";

const About = ()=>{
    return(
        <>
        <h1 className="text-3xl py-5 ml-7 ">TAILORS DREAM COLLEGE</h1>
        <div className="flex flex-row flex-nowrap">
            <div className="w-1/2 h-[50vh]">
              <img src="/logo/favicon.ico" alt="" className="w-full h-full object-contain"/>
            </div>
            <div className="p-4 w-1/2 leading-[38px]">
                Tailors Dream College is a school of tailing found by BIA The African Touch
                Since 2023. This was the idea to help all Rwandan people to improve the carrier 
                experience and became most famiiliar with our daily clothing such that the Rwanda 
                community can now widely start producing such clothes, shoes, baskets and 
                so on. We enable students to perform and became competent globally, our studies are 
                extensible. We provide compete student in months period. Joining our college is the 
                best choice ever! 
            </div>
        </div>
        </>
    );
}
export default About;