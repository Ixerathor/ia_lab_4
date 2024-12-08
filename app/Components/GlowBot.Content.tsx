import Image from "next/image";

export default function GlowBotContent() {
  return (
    <div className="">
      <Image
        className="dark:invert mb-12"
        src="male_face_2_wob.png"
        alt="Next.js logo"
        width={160}
        height={38}
        priority
      />

      <div className="content">
        <h4 className="title text-xl lg:text-5xl mb-4">
          Prueba el nuevo GlowBot.
        </h4>
        <span className="text-lg">
          Estas son algunas cosas con las que puede ayudarte GlowBot
        </span>
        <ol className="list-disc pl-6 text-lg">
          <li>Conocer los producto disponibles.</li>
          <li>Conocer algunos problemas de la piel.</li>
          <li>
            Ayudar si deseas saber que producto podemos ofrecerte para tratar tu
            piel.
          </li>
        </ol>

        <div className="p-4 mt-4 bg-white rounded-sm max-w-sm text-black">
          <span className="text-lg">
            Este es un ejemplo de prompts que puedes seguir para tener una idea
            del alcanze de GlowBot.
          </span>
          <ol className="list-disc pl-6 text-base">
            <li>Hola GlowBot</li>
            <li>Quiero saber que tengo en mi piel</li>
            <li>
              Tengo alergia al latex, de los productos que vendes, cuales me
              recomiendas?
            </li>
            <li>Que tan popular es la Crema hidratante LatexFree?</li>
            <li>Gracias!</li>
          </ol>
        </div>
      </div>
    </div>
  );
}
