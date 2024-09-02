import Link from "next/link";
const SignupForm = () =>{
   return(
       <div className="flex justify-center p-2 mt-10">
           <div className="border border-blue-300 p-6 rounded-lg w-[35%]">
               <div>
                   <h1 className="text-center text-2xl text-gray-700">REGISTER NOW</h1>
                   <div>
                       {/*<div id="response" className="fixed px-6 py-3 shadow-lg flex justify-between items-center right-9 top-[27%] z-[99] rounded-2xl bg-red-100 border border-red-300 text-slate-600 ">*/}
                       <div id="response" className="fixed px-6 py-3 shadow-lg hidden justify-between items-center right-9 top-[27%] z-[99] rounded-2xl bg-green-100 border border-green-300 text-slate-600 ">
                           <p>Register successfully!</p>
                           <span className="bi bi-x ml-3 cursor-pointer text-[18px]"></span>
                       </div>
                       <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                           <i className="bi bi-person text-lg text-gray-800"></i>
                           <input type="text" name="name" id="name" placeholder="Name" className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"/>
                       </div>
                       <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                           <i className="bi bi-telephone text-lg text-gray-800"></i>
                           <input type="text" name="phone" id="phone" placeholder="Phone" className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"/>
                       </div>
                       <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                           <i className="bi bi-envelope text-lg text-gray-800"></i>
                           <input type="text" name="email" id="email" placeholder="Email " className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"/>
                       </div>
                       <span></span>
                       <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                           <i className="bi bi-key text-lg text-gray-800"></i>
                           <input type="password" name="passWord" id="passWord" placeholder="Password" className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"/>
                       </div> 
                       <div className="flex w-full border border-slate-400 rounded px-3 py-[8px] my-3">
                           <i className="bi bi-key text-lg text-gray-800"></i>
                           <input type="password" name="confirm" id="confirm" placeholder="Confirm password" className="w-full py-1 px-2 rounded text-gray-800 bg-transparent outline-none"/>
                       </div> 
                       <span></span>
                       <div className="mt-3">
                           <button className="w-full border my-5 bg-green-400 py-[10px] rounded-md text-white"><i className="bi bi-box-arrow-in-right text-white"></i> REGISTER</button>
                       </div>
                       <div className="text-right">
                           <span>Already a member? </span>
                           <Link href="/auth/login" className="text-blue-500"> Login</Link>
                       </div>
                       {/*<div>
                           <div className="text-center w-full text-sm text-gray-500">Or</div>
                           <button className="w-full border my-1 bg-slate-200 py-[10px] rounded text-slate-700"><i className="bi bi-google text-green-500 py-1 px-2 bg-white rounded-full"></i> CONTINUE WITH GOOGLE</button>
                           <button className="w-full border my-3 bg-slate-200 py-[10px] rounded text-slate-700"><i className="bi bi-facebook text-blue-500 text-lg"></i> CONTINUE WITH FACEBOOK</button>
                        </div>*/}
                   </div>
               </div>
           </div>

       </div>

   )
}
export default SignupForm;