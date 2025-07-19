import { useState } from 'react'

import './App.css'

function App() {
  const [output, setOutput] = useState('Ask a question');
  const outputs = ['It is certain', 'Without a doubt', 'Yes, definitely', 'You may rely on it', 'As I see it, yes', 'Most likely', 'Outlook good', 'Yes', 'Signs point to yes', 'Reply hazy, try again', 'Ask again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again', 'Don’t count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubtful', 'Dont count on it', 'My reply is no', 'My sources say no', 'Outlook not so good', 'Very doubful', 'Reply hazy, try again later', 'Ask Again later', 'Better not tell you now', 'Cannot predict now', 'Concentrate and ask again'];
  let question = document.getElementById('question');

  function triggerMagic() {
    let raondomIndex = Math.floor(Math.random() * outputs.length);

console.log(question)

    if (question <= 0) {
      setOutput('Please ask a question');
      return;
    }

    setOutput(outputs[raondomIndex]);
  }

  return (
    <>
      <section className="8ball-wrapper py-24">
        <div className="container mx-auto px-5">
        <div className="ball">
          <div className="ball__inner">
            <p>{output}</p>
          </div>
        </div>
        <div className="flex w-full align-center justify-center">
          <div className="inline-block text-center mx-auto gap-3">
          <input id='question' type="text" placeholder='Will I become rich?' className='bg-gray-200 min-w-[300px] rounded-sm px-4 py-2 fs-base' />
          <div className="flex gap-2 mt-4 justify-center">
            <button onClick={triggerMagic} className="btn">Ask a question</button>
            <button className="btn">Reset</button>
          </div>
        </div>
        </div>
      </div>
      </section>
    </>
  )
}

export default App
