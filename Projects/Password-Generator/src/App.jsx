import { useCallback, useEffect, useRef, useState } from 'react'

function App() {

  const [numbersAllowed, setNumbersAllowed] = useState(false);
  const [charactersAllowed, setCharactersAllowed] = useState(false);
  const [length, setLength] = useState(8);
  const [password, setPassword] = useState("");
  
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numbersAllowed) str += "0123456789";
   if(charactersAllowed) str+= "!@#$%&*?";

    for(let i=0 ; i<length;i++){
      let charIndex = Math.floor(Math.random() * (str.length+1));
      pass += str.charAt(charIndex);
    }
    setPassword(pass);
  },[numbersAllowed,charactersAllowed,length,setPassword]);

  const handleCopy = () =>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  }

  useEffect(()=>{
    passwordGenerator();
  },[numbersAllowed,charactersAllowed,length])


  return (
    <>
    <div className="w-full max-w-lg h-auto px-4 py-8 rounded-xl bg-slate-600 mx-auto my-12 flex flex-col items-center gap-4">
      <div>
        <h1 className="text-center text-3xl text-white font-semibold">Password Generator</h1>
      </div>
      <div className="flex w-full px-3">
      <input type="text" 
      className="w-full outline-none px-4 py-3 rounded-l-2xl text-lg text-gray-900"
      value={password}
      placeholder='Password'
      ref={passwordRef}
      readOnly
      
      />
      <button className="bg-sky-600 hover:bg-sky-500 px-4 py-2 text-white text-[1rem] font-semibold rounded-r-2xl shrink-0"
      onClick={handleCopy}
      >Copy</button>
      </div>
      <div className="w-full flex items-center justify-around text-orange-600 text-lg font-semibold">
        <div>
        <label htmlFor="PasswordLength" className="mx-2">Length : {length}</label>
        <input 
        type="range"
        id='PasswordLength'
        min={8}
        max={24}
        value={length}
        className='cursor-pointer'
        onChange={(e)=>setLength(e.target.value)}
        />
        </div>

        <div>
        <label htmlFor="NumberCheckbox" className="mx-2">Numbers</label>
        <input
         type="checkbox" 
        id="NumberCheckbox" 
        defaultChecked = {charactersAllowed}
        onChange={()=>setNumbersAllowed((prev)=> !prev)}
        />
        </div>
        <div>
        <label htmlFor="CharacterCheckbox" className="mx-2">Characters</label>
        <input
         type="checkbox" 
        id="CharacterCheckbox" 
        onChange={()=>setCharactersAllowed((prev)=> !prev)}
        />
        </div>
      </div>
    </div>
    </>
  )
}

export default App
