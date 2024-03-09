import AudioPlayer from "./audio-player";
import Prompt from "./prompt";

export default function Hero() {
  return (
    <div className="grid grid-cols-2 min-h-[500px] gap-4 mt-8">
      <section>
        <h1 className="text-4xl font-extrabold mb-2">Audifique Textos.</h1>
        <p className="text-base leading-tight">Descreva um assunto e crie aúdios sobre os mesmo gratuitamente</p>
      
        <div className="mt-5 space-y-2">
          <h5 className="font-bold text-lg">Passo a Passo:</h5>
          <ul className="ml-2">
            <li>1. Descreva um tópico</li>
            <li>2. Clique em &apos;Audificar&apos; e aguarde</li>
            <li>3. Compartilhe e salve o seu áudio</li>
          </ul>
        </div>

        <div className="mt-6">
          <AudioPlayer />
        </div>
      </section>

      <section>
        <Prompt />
      </section>
    </div>
  )
}